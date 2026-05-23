# Supabase setup for Auric OS

A real database for venue suggestions, creator profiles, venue reviews,
and success stories. About **15 minutes** end-to-end.

Until you complete this, the Suggest-a-Venue form on
`app.auricmovement.com/suggest.html` falls back to the `mailto:` flow —
nothing breaks, but submissions don't accumulate in a database.

---

## 1. Create a Supabase project (5 min)

1. Go to [supabase.com](https://supabase.com) → **Start your project**.
2. Sign in with GitHub or email.
3. Click **New project**.
4. Name it: `auric-platform`. Pick a strong database password (save it
   in your password manager — you won't need it for the site, but you'll
   need it if you ever migrate or do direct SQL admin).
5. Region: **East US (North Virginia)** — closest to NYC traffic.
6. Plan: **Free**. The free tier handles ~50,000 monthly active users
   and 500MB of database storage. Massively more than you need to start.
7. Wait ~2 minutes for the project to provision.

## 2. Run the schema (3 min)

1. In your project sidebar, open **SQL Editor**.
2. Click **+ New query**.
3. Open `supabase/schema.sql` from this repo. Copy the **entire file**.
4. Paste into the SQL Editor.
5. Click **Run** (or Cmd+Enter).

You should see: *Success. No rows returned.* Four tables are now in your
database: `venue_suggestions`, `creator_profiles`, `venue_reviews`,
`success_stories`, all with Row Level Security on.

## 3. Get your project URL + anon key (2 min)

1. In your project sidebar, go to **Settings** (gear icon) → **API**.
2. Find **Project URL** (looks like `https://abcdefgh.supabase.co`). Copy it.
3. Find **Project API keys** → the **`anon`** **`public`** key (long string starting with `eyJ…`). Copy it.

Both values are safe to put in client-side code — Row Level Security
in your schema protects the data. The `anon` key is meant to be public.
**Do NOT use the `service_role` key in client code** — that one bypasses
RLS and should only ever be used server-side or in the dashboard.

## 4. Paste them into supabase-config.js (1 min)

Open `supabase-config.js` in this repo. You'll see:

```js
window.AURIC_SUPABASE = {
  url: "YOUR_SUPABASE_URL_HERE",
  anonKey: "YOUR_SUPABASE_ANON_KEY_HERE",
};
```

Replace the placeholder strings with your values from step 3. Save.

## 5. Deploy (3 min)

Upload **`supabase-config.js`** and **`suggest.html`** to GitHub via the
web UI (Add file → Upload files). Both go in the root of the repo.
Commit.

## 6. Test (2 min)

1. Wait ~1 minute for GitHub Pages to rebuild.
2. Open `app.auricmovement.com/suggest.html`.
3. Fill in a test submission (use your own email so the moderation
   notification, when we add one, will go to you).
4. Click **Send suggestion →**.
5. You should see the green success state appear inline — no email
   client opens (that's the Supabase path, not the mailto fallback).
6. Back in Supabase, open **Table Editor** → `venue_suggestions`. Your
   row should be there.

If you see the email-client open instead of the inline success state,
the config didn't take — re-check `supabase-config.js` for typos.

---

## Moderating submissions

For now, moderation happens in the Supabase dashboard:

1. **Table Editor → venue_suggestions** — review the row
2. Edit the **`status`** column from `pending` to:
   - `approved` — once you add the venue to `venues.js` in this repo
   - `rejected` — fails the no-franchises / no-closed / no-locked rules
   - `duplicate` — already exists in the directory
   - `needs-info` — submitter needs to send more details (use `review_notes`)
3. Email the submitter (their email is in the `submitter_email` column).

Same pattern will work for the `creator_profiles`, `venue_reviews`, and
`success_stories` tables when those features ship.

When you outgrow dashboard-based moderation, the next step is a private
admin page that pulls these tables via the `service_role` key behind
HTTP basic auth. Out of scope for now.

---

## Future-ready, not yet wired

The schema includes tables for **creator profiles**, **venue reviews**,
and **success stories** — none of those forms exist on the site yet.
When you're ready to ship them (Phase 2 of the original roadmap), the
database side is already done.

---

## Costs

The free tier is more than enough for your current and near-future
traffic. Specifically:

- **500 MB database storage** — venue suggestions are ~1 KB each, so
  you'd hit the limit at ~500,000 submissions. Realistic year-1 ceiling
  is in the hundreds.
- **5 GB bandwidth/month** — covers a lot of static-site traffic + DB
  reads.
- **50,000 monthly active users** — way past anything you'll hit at
  launch.

If you ever do exceed the free tier, the **Pro plan is $25/month** and
gives you 8 GB DB + 250 GB bandwidth + daily backups. No surprise bills.

---

## Security notes

- **RLS is on for every table.** Anonymous users can only INSERT into
  the four submission tables, and only INSERT rows with `status='pending'`
  for the moderated ones.
- **Anonymous users cannot READ** their own submissions or anyone else's
  back. Reading happens through the dashboard (service_role).
- **CORS** — Supabase allows requests from any origin by default for
  the anon key. If you want to restrict to `app.auricmovement.com`,
  go to **Authentication → URL Configuration** and set Site URL +
  Redirect URLs. (Not strictly necessary while you're using anon-key
  inserts only.)
- **Rate limiting** — Supabase rate-limits the anon key at the API
  gateway. If you ever see spam-volume submissions, set up Cloudflare
  Turnstile on the form (no-code, free) for a captcha gate.
