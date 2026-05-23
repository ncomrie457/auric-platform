-- =============================================================================
-- Auric OS — Supabase schema
-- =============================================================================
-- Run this entire file once in your Supabase project's SQL Editor to set up:
--   1. venue_suggestions    (wired today via suggest.html)
--   2. creator_profiles     (future Phase 2)
--   3. venue_reviews        (future Phase 2)
--   4. success_stories      (future Phase 2)
--
-- All tables use Row Level Security (RLS). Anonymous users can INSERT
-- (so the public site can submit) but cannot SELECT/UPDATE/DELETE.
-- Reading + moderating happens through the Supabase dashboard, which
-- uses the service_role key (bypasses RLS).
--
-- After running this, see cloudflare-worker/README.md (or in this folder)
-- for what to paste into supabase-config.js.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- 1. venue_suggestions — for the Suggest a Venue form
-- -----------------------------------------------------------------------------
create table if not exists public.venue_suggestions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Venue
  venue_name text not null,
  neighborhood text not null,
  venue_type text not null,
  modalities text,
  capacity text,
  rate text,
  website text,
  contact_email text,
  contact_instagram text,
  why_it_belongs text not null,

  -- Submitter
  submitter_name text not null,
  submitter_email text not null,
  relationship text not null,

  -- Moderation
  status text not null default 'pending'
    check (status in ('pending','approved','rejected','duplicate','needs-info')),
  review_notes text,

  -- Optional fingerprint to dedupe submissions (we hash venue_name + neighborhood client-side)
  fingerprint text
);

create index if not exists venue_suggestions_created_at_idx
  on public.venue_suggestions (created_at desc);
create index if not exists venue_suggestions_status_idx
  on public.venue_suggestions (status);

alter table public.venue_suggestions enable row level security;

-- Anonymous public can insert (the Suggest a Venue form)
drop policy if exists "anon can insert suggestions" on public.venue_suggestions;
create policy "anon can insert suggestions"
  on public.venue_suggestions
  for insert
  to anon
  with check (true);

-- Anonymous public CANNOT read anyone's submissions (privacy)
-- Reading is done via the Supabase dashboard with service_role key.


-- -----------------------------------------------------------------------------
-- 2. creator_profiles — future Phase 2
-- -----------------------------------------------------------------------------
create table if not exists public.creator_profiles (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- Identity
  display_name text not null,
  pronouns text,
  bio text,
  avatar_url text,                 -- Supabase Storage URL
  borough text,                    -- Manhattan / Brooklyn / Queens / Bronx / Staten Island / Other
  neighborhood text,

  -- Practice
  specialties text[],              -- ['pilates','yoga','sound_bath',...]
  certifications text,             -- free-text list
  years_teaching int,
  modalities text[],

  -- Links
  instagram text,
  website text,
  contact_email text not null,     -- private, used for inbound inquiries

  -- Moderation
  status text not null default 'pending'
    check (status in ('pending','published','paused','rejected')),
  is_featured boolean not null default false,
  review_notes text
);

create index if not exists creator_profiles_status_idx
  on public.creator_profiles (status) where status = 'published';

alter table public.creator_profiles enable row level security;

-- Public reads only published profiles
drop policy if exists "anon can read published profiles" on public.creator_profiles;
create policy "anon can read published profiles"
  on public.creator_profiles
  for select
  to anon
  using (status = 'published');

-- Anonymous can insert (submission form), goes to 'pending'
drop policy if exists "anon can submit profiles" on public.creator_profiles;
create policy "anon can submit profiles"
  on public.creator_profiles
  for insert
  to anon
  with check (status = 'pending');


-- -----------------------------------------------------------------------------
-- 3. venue_reviews — future Phase 2
-- -----------------------------------------------------------------------------
create table if not exists public.venue_reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- What's being reviewed
  venue_name text not null,        -- matches name in venues.js
  venue_known boolean not null default true,  -- false = venue not yet in DB

  -- Review
  rating int not null check (rating between 1 and 5),
  review_text text not null check (char_length(review_text) <= 500),
  event_type text,                 -- 'pilates pop-up', 'sound bath', etc.
  event_size int,
  booked_via_auric boolean not null default false,

  -- Reviewer
  reviewer_name text not null,
  reviewer_email text not null,    -- private
  reviewer_handle text,            -- optional public attribution

  -- Moderation
  status text not null default 'pending'
    check (status in ('pending','published','paused','rejected')),
  review_notes text
);

create index if not exists venue_reviews_venue_idx
  on public.venue_reviews (venue_name) where status = 'published';
create index if not exists venue_reviews_status_idx
  on public.venue_reviews (status);

alter table public.venue_reviews enable row level security;

drop policy if exists "anon can read published reviews" on public.venue_reviews;
create policy "anon can read published reviews"
  on public.venue_reviews
  for select
  to anon
  using (status = 'published');

drop policy if exists "anon can submit reviews" on public.venue_reviews;
create policy "anon can submit reviews"
  on public.venue_reviews
  for insert
  to anon
  with check (status = 'pending');


-- -----------------------------------------------------------------------------
-- 4. success_stories — future Phase 2
-- -----------------------------------------------------------------------------
create table if not exists public.success_stories (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  creator_name text not null,
  event_name text not null,
  venue_name text not null,
  borough text,
  photo_url text,                  -- Supabase Storage URL
  story_text text not null check (char_length(story_text) <= 500),
  instagram text,
  submitter_email text not null,   -- private

  status text not null default 'pending'
    check (status in ('pending','published','paused','rejected')),
  is_featured boolean not null default false,
  review_notes text
);

create index if not exists success_stories_published_idx
  on public.success_stories (created_at desc) where status = 'published';

alter table public.success_stories enable row level security;

drop policy if exists "anon can read published stories" on public.success_stories;
create policy "anon can read published stories"
  on public.success_stories
  for select
  to anon
  using (status = 'published');

drop policy if exists "anon can submit stories" on public.success_stories;
create policy "anon can submit stories"
  on public.success_stories
  for insert
  to anon
  with check (status = 'pending');


-- -----------------------------------------------------------------------------
-- updated_at auto-update trigger for creator_profiles
-- -----------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists creator_profiles_set_updated_at on public.creator_profiles;
create trigger creator_profiles_set_updated_at
  before update on public.creator_profiles
  for each row execute function public.set_updated_at();


-- =============================================================================
-- Done. After running:
--   1. Settings → API: copy your Project URL and anon public key
--   2. Paste both into /supabase-config.js in the repo
--   3. Re-upload supabase-config.js + suggest.html to GitHub
--   4. Submit a test suggestion at app.auricmovement.com/suggest.html
--   5. Confirm the row appears under Table Editor → venue_suggestions
-- =============================================================================
