# Venue verification workflow

When a creator submits a venue via `/suggest.html`, the row lands in
Supabase's `venue_suggestions` table with `status = 'pending'`. **Nothing
appears on the live site until you change that status to `approved`**
AND add the venue to `venues.js`.

This doc is the checklist you run through before doing either.

---

## The hard rules — auto-reject if any fail

If a submission hits any of these, set `status = 'rejected'` and stop.
The same rules live in your memory file `feedback_venue_ingest_rules.md`:

- **Corporate franchise with locked instructor model.** Club Pilates,
  SoulCycle, CorePower, OrangeTheory, Pure Barre, F45, etc. UNLESS
  there's specific documented evidence they rent to outside teachers.
- **Permanently closed.** Yelp or Google Business shows "Permanently
  closed" — verify before rejecting; sometimes a flag is stale.
- **Members-only with no non-member event hire pathway.** Soho House,
  legacy members-only clubs without a public events team.
- **Domain dead.** DNS failure, all pages 404, no social presence.
- **Duplicates an existing entry.** Already in `venues.js` under a
  different name or framing. Set `status = 'duplicate'` instead of
  `rejected` so you can track it.

---

## The soft checks — green-light before approving

For a submission to be added, you need **yes to most of these**:

### 1. Rental availability is verifiable
- [ ] Venue website has a "Rentals," "Private Events," "Host an Event,"
      or "Studio Rental" page, OR
- [ ] Venue has documented past events of the type creators want to host
      (Instagram posts, news mentions), OR
- [ ] The submitter has personally booked there and described the
      process in the "why it belongs" field, OR
- [ ] The venue is publicly bookable infrastructure (NYC Parks, NYPL,
      community centers, etc.) with a clear application route.

### 2. The venue exists and is reachable
- [ ] Website returns 200 (use the verification script)
- [ ] At least one contact channel is reachable (email, phone, or
      Instagram DM)
- [ ] Address is real — quick Google Maps check

### 3. Fit for wellness creators
- [ ] Floor surface suitable for at least one common modality (mat
      yoga / pilates / sound bath / meditation / breathwork)
- [ ] Capacity in the 10–200 range we serve
- [ ] Not an obvious mismatch (e.g., a sports bar with no quiet room)

### 4. The submitter is credible
- [ ] "Why it belongs" answer is specific, not boilerplate
- [ ] Submitter email looks real (not throwaway / spam pattern)
- [ ] If submitter claims they've booked there, the venue's existence
      checks out

### 5. Pricing realism
- [ ] Rate given (or "Inquire") is in a plausible NYC range, not
      obviously fabricated (e.g., not "$5/hr" for a Manhattan venue)

---

## The verification script

Run `python3 supabase/verify-venue.py <URL>` to auto-check:

- Website returns 200
- Whether the URL redirects somewhere unexpected (brand collision risk
  like the thewellnyc.com → cityWell incident)
- Whether Yelp lists a permanently-closed business at that domain
- Whether the domain matches known franchise patterns

Use this as a first-pass filter before doing manual checks. See the
script's `--help` for usage.

---

## Once a submission is approved

1. **Mark in Supabase**: Set `status = 'approved'`. Add notes in
   `review_notes` (e.g., "verified rentals page; $85/hr; @venueig").
2. **Add to `venues.js`**: Copy an existing entry of similar type as
   the template, fill in the venue's fields. Don't forget:
   - Score bars (Audience / Aesthetic / Value / Accessibility) —
     judgment call, use neighboring venues as reference
   - Modalities array
   - Pre-drafted outreach email
   - Contact info from the submission (`contact_email`, `contact_ig`,
     phone if you tracked it down)
3. **Email the submitter** (manual for now): "Your suggestion for
   [Venue] is now in the directory at app.auricmovement.com/listings.html."
   Their email is in `submitter_email`.
4. **Upload `venues.js`** to GitHub. Done.

---

## Statuses cheat sheet

| Status | When to use |
|---|---|
| `pending` | Default. Hasn't been reviewed yet. |
| `approved` | Passed verification AND added to venues.js. |
| `rejected` | Failed a hard rule (franchise, closed, etc.). Note the rule in `review_notes`. |
| `duplicate` | Already in venues.js under a different name. Note which existing venue in `review_notes`. |
| `needs-info` | The submission is plausible but the "why" or contact details are too thin. Email the submitter and ask for more. Use `review_notes` to track what you asked for. |

---

## When to relax the rules

The rules above are the default. There are real exceptions:

- A franchise studio that has documented evidence of renting to outside
  instructors (signed contracts, listed on Peerspace, named in a
  creator's existing program) — case-by-case approval, note the
  evidence in `review_notes`.
- A members-only club that has a documented public events team
  (NeueHouse, Casa Cipriani, Norwood) — already-tested venues are in
  the directory; new ones get same treatment.
- A venue currently closed but reopening on a known date within 3
  months — case-by-case, mark `needs-info` until the reopen date
  passes, then re-review.

**When in doubt: ask the Concierge.** Open Concierge, paste the
venue's details, ask "would this fit Auric's listing criteria?" It
knows the rules and will flag concerns.

---

## Spam / abuse handling

If you start seeing junk submissions:

1. **Check the Submitter email pattern** — disposable/throwaway domains
   (mailinator, guerrillamail, etc.) → bulk reject.
2. **Same fingerprint, multiple submissions** — the `fingerprint`
   column hashes venue_name + neighborhood. Repeated identical
   fingerprints mean a single venue being spam-submitted.
3. **Quality-of-prose pattern** — generic "venue is great, please add"
   without specifics → reject as low-effort.
4. **If volume is high**, add Cloudflare Turnstile (free, no-code) to
   the form for a captcha. The Supabase README covers how.
