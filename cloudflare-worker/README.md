# Auric Concierge — Cloudflare Worker proxy

This folder holds the source for the Worker deployed at
`https://auric-proxy.auricmovement.workers.dev`. The Worker is the secure
bridge between the static site (`app.auricmovement.com/assistant.html`)
and the Anthropic API.

## Why this exists

The frontend can't call Anthropic directly because that would expose the
API key in the browser. The Worker:

1. Receives chat requests from the frontend (no secrets needed there).
2. Adds the Anthropic API key from a Cloudflare-encrypted env var.
3. Forwards the call to `https://api.anthropic.com/v1/messages`.
4. Passes the response straight back to the frontend.

This version also enables **Anthropic prompt caching** on the system
prompt, so repeat requests within a 5-minute window pay ~10% of the
normal input-token cost on the cached block.

## How to deploy

You don't deploy this from git — Cloudflare Workers live in the Cloudflare
dashboard. To update the live worker:

1. Go to [Cloudflare Dashboard → Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages).
2. Click on **auric-proxy**.
3. Click **Edit code** → **Quick edit**.
4. Open `worker.js` from this folder. Copy the entire file.
5. Paste it into the Cloudflare code editor, replacing what's there.
6. Click **Save and deploy** in the top right.

The first request after deploy will be a cache miss (slightly more
expensive than no caching, ~1.25× the input price for the cached
portion). Every subsequent request within 5 minutes hits the cache.

## Required environment variable

The Worker reads `ANTHROPIC_API_KEY` from Cloudflare's encrypted Variables.
To set it:

1. In the Worker editor, click **Settings** in the right sidebar.
2. Under **Variables**, add `ANTHROPIC_API_KEY` and paste your key.
3. **Click the encrypt button** so it's not stored in plaintext.
4. Click **Save**.

## Cost math

System prompt is ~14K chars / ~3.5K tokens after the recent overhaul.

| Scenario | Per-request input cost |
|---|---|
| No caching, every request | $0.0105 (3500 tok × $3/M) |
| First request in a 5-min window (cache write) | ~$0.013 (1.25× write penalty) |
| Cached request in a 5-min window (cache read) | ~$0.00105 (10% of normal) |

If 100 users hit Concierge within a 5-minute window, total system-prompt cost:
- Without caching: 100 × $0.0105 = **$1.05**
- With caching: $0.013 + 99 × $0.00105 = **$0.117**

That's an 89% reduction at scale. Less material when traffic is light.

## Tightening security

For production, replace `'Access-Control-Allow-Origin': '*'` in
`worker.js` with `'https://app.auricmovement.com'` so only your site
can call the proxy. (Open CORS is fine while you're still iterating.)
