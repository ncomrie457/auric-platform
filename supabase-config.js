// =============================================================================
// Auric OS — Supabase config
// =============================================================================
//
// Paste your Supabase project's URL and anon public key here.
// Both values are safe to put in client-side code — Row Level Security
// in your schema protects the data. The anon key is meant to be public.
//
// How to find them:
//   1. Supabase dashboard → your project → Settings → API
//   2. "Project URL" → paste below as SUPABASE_URL
//   3. "Project API keys" → "anon" "public" → paste below as SUPABASE_ANON_KEY
//
// If both values stay as the placeholder strings ("YOUR_…_HERE"), the
// site falls back to the mailto: flow on suggest.html — no errors.
// =============================================================================

window.AURIC_SUPABASE = {
  url: "https://cdwlbrdnjlqiydgmokfg.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkd2xicmRuamxxaXlkZ21va2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NTY1NDIsImV4cCI6MjA5NTEzMjU0Mn0.aBmNOU13F-xpzMZWJkj3h28zHfrPdK3_tkfjdiD0c7M",
};

window.AURIC_SUPABASE_READY = function () {
  const cfg = window.AURIC_SUPABASE || {};
  return (
    cfg.url &&
    cfg.anonKey &&
    !cfg.url.startsWith("YOUR_") &&
    !cfg.anonKey.startsWith("YOUR_")
  );
};
