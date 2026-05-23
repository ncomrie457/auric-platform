// =============================================================================
// Auric Concierge — Cloudflare Worker proxy with Anthropic prompt caching
// =============================================================================
//
// Deployed at: https://auric-proxy.auricmovement.workers.dev
//
// What this does:
//   - Receives Concierge chat requests from app.auricmovement.com/assistant.html
//   - Adds the Anthropic API key (kept secret on the server) and forwards to
//     api.anthropic.com/v1/messages
//   - Wraps the system prompt as a cacheable content block so Anthropic's
//     prompt cache kicks in. Drops input-token cost on cache hits by ~90%.
//
// Drop-in compatible with the existing assistant.html code:
//   - Same POST endpoint URL
//   - Same request shape: { model, max_tokens, system, messages }
//   - Same response shape (Anthropic's native /v1/messages JSON, passed through)
//
// To deploy:
//   1. Open Cloudflare Dashboard → Workers & Pages → auric-proxy
//   2. Click "Edit code" → "Quick edit"
//   3. Replace the entire file with this content
//   4. Click "Save and deploy"
//   5. Make sure ANTHROPIC_API_KEY is set under Settings → Variables (encrypted)
//
// Cache behavior (Anthropic prompt caching):
//   - The system prompt (~14K chars / ~3.5K tokens) is large enough to cache
//     (Sonnet/Opus require ≥1024 tokens per cached block).
//   - Cache lives 5 minutes from each read. Refreshed automatically on every
//     hit, so a steady stream of users keeps it warm.
//   - First user in a 5-minute window pays full input price; subsequent users
//     pay 10% (Sonnet/Opus) for the cached portion.
//
// Expected savings at ~14K chars system prompt:
//   - Without caching: ~3500 input tokens × $3/M = ~$0.0105 per request
//   - With caching (hit): ~3500 input tokens × $0.30/M = ~$0.00105 per request
//   - First-write penalty: ~$0.013 per cache write (1.25× input price, one-time)
// =============================================================================

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(),
      });
    }

    if (request.method !== 'POST') {
      return jsonError('Method not allowed. Use POST.', 405);
    }

    if (!env.ANTHROPIC_API_KEY) {
      return jsonError('Server missing ANTHROPIC_API_KEY. Set it in Cloudflare Worker → Settings → Variables.', 500);
    }

    let payload;
    try {
      payload = await request.json();
    } catch (e) {
      return jsonError('Request body must be valid JSON.', 400);
    }

    const { model, max_tokens, system, messages } = payload;

    if (!system) return jsonError('Missing required field: system.', 400);
    if (!Array.isArray(messages)) return jsonError('Missing or invalid field: messages (must be an array).', 400);

    // Transform system string into a cacheable content block.
    // Anthropic prompt cache requires blocks tagged with cache_control: { type: "ephemeral" }.
    // Strings get wrapped automatically; if the caller already sent an array, pass it through.
    const systemBlocks = typeof system === 'string'
      ? [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }]
      : system;

    const upstreamBody = {
      model: model || 'claude-sonnet-4-6',
      max_tokens: max_tokens || 1000,
      system: systemBlocks,
      messages,
    };

    let upstream;
    try {
      upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(upstreamBody),
      });
    } catch (e) {
      return jsonError('Could not reach Anthropic API: ' + e.message, 502);
    }

    // Pass through Anthropic's response (status + body) so the frontend gets
    // exactly what it would have gotten from a direct API call. Includes
    // useful headers like cache_creation_input_tokens + cache_read_input_tokens
    // in the response body for observability.
    const responseBody = await upstream.text();

    return new Response(responseBody, {
      status: upstream.status,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders(),
      },
    });
  },
};

// ---- helpers --------------------------------------------------------------

function corsHeaders() {
  // Restrict to your domain in production by replacing '*' with
  // 'https://app.auricmovement.com'. Open CORS is OK while testing.
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonError(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(),
    },
  });
}
