# Health Disclosure Privacy — Deployment Guide

What you're setting up:
1. **48-hour auto-delete** of health disclosures from your database
2. **Daily 8 AM email digest** with new signups + their disclosures (safety net)
3. **Updated Privacy Policy** on the site reflecting the new 48-hour window

---

## STEP 1 — Deploy the updated Privacy Policy (5 min)

1. Open Finder → `auricwaiver` folder → grab `index.html`
2. Upload to GitHub → Add file → Upload files → Commit
3. Wait 1–2 min for GitHub Pages
4. Verify on `book.auricmovement.com` → click Privacy Policy in footer → should say *"Health disclosure data is permanently deleted within 48 hours of registration"*

---

## STEP 2 — Run the auto-deletion SQL (10 min)

1. Go to your Supabase dashboard → **SQL Editor**
2. Click **New query**
3. Open `AUTO_DELETE_HEALTH_DISCLOSURES.sql` from your `auricwaiver` folder
4. Copy the entire contents, paste into the SQL editor
5. Click **Run** (bottom-right green button)
6. You should see "Success" and 1–2 rows returned

That's it. Every hour from now on, Supabase will automatically wipe the `notes` column from any registration row older than 48 hours.

### To verify it's working a day later:
Run this in the SQL editor:
```sql
select jobname, schedule, active
from cron.job
where jobname = 'wipe-old-health-disclosures';
```
You should see one row with `active = true`.

---

## STEP 3 — Set up the daily 8 AM email digest (20 min)

This is more involved because you need to create an EmailJS template first.

### 3A. Create the EmailJS template

1. Log in to EmailJS dashboard (where you already have your other templates)
2. **Email Templates** → **Create New Template**
3. Template settings:
   - **Template name**: `Daily Digest`
   - **Subject**: `✦ Auric Daily — {{digest_date}}`
   - **To email**: `{{to_email}}`
   - **From name**: `Auric Movement`
   - **From email**: your sending email
4. In the email **content body**, paste just this:
   ```
   {{{digest_html}}}
   ```
   (Triple braces — this allows HTML to render. Double braces will just show text.)
5. Save the template
6. Copy the **Template ID** (looks like `template_xxxxxxx`) — you'll need it in Step 3B

### 3B. Fill in your EmailJS credentials in the digest SQL

1. Open `DAILY_DIGEST_SETUP.sql` from your `auricwaiver` folder in any text editor
2. Find these three placeholders and replace with your real values:
   - `<YOUR_EMAILJS_SERVICE_ID>` → your service ID (already in `index.html`, search for `EMAILJS_SERVICE_ID`)
   - `<YOUR_EMAILJS_TEMPLATE_ID>` → the new "Daily Digest" template ID from Step 3A
   - `<YOUR_EMAILJS_PUBLIC_KEY>` → your public key (in `index.html`, search for `EMAILJS_PUBLIC_KEY` or `emailjs.init`)
3. Save the file

### 3C. Run it in Supabase SQL Editor

1. Open Supabase dashboard → SQL Editor → New query
2. Paste the entire (now-filled-in) contents of `DAILY_DIGEST_SETUP.sql`
3. Click **Run**

### 3D. Test it right now (don't wait until 8 AM)

In the same SQL Editor, run:
```sql
select public.send_daily_digest();
```

Within a minute, you should receive an email at auricmovement@outlook.com. If not, see Troubleshooting below.

---

## Daylight Saving Time note

The cron schedule is set to `0 12 * * *` UTC, which is **8 AM EDT** (March–November).
During EST (November–March), this becomes **7 AM ET**. If you want it to always be 8 AM Eastern, you can:

- Manually change the schedule to `0 13 * * *` UTC each November
- OR change back to `0 12 * * *` each March

Run this to update:
```sql
select cron.unschedule('daily-health-digest-8am');
select cron.schedule('daily-health-digest-8am', '0 13 * * *',
  $$ select public.send_daily_digest(); $$);
```

(Or accept that it shifts by one hour twice a year and don't worry about it.)

---

## Troubleshooting

**Daily digest doesn't send when I run `send_daily_digest()` manually:**
- Check Supabase → Logs → check for errors
- Common issue: pg_net extension not enabled (the SQL file enables it, but if you skipped that line, run `create extension if not exists pg_net;`)
- Verify your EmailJS template has `{{to_email}}` in the "To Email" field

**No digest arrives at 8 AM but manual run works:**
- Run `select jobname, schedule, active from cron.job;` to verify the schedule is registered
- Check Supabase → Database → Cron Jobs panel

**Digest arrives but has no rows:**
- Means no new signups in last 24 hours. Working as intended — the function returns early if zero signups.

---

## What to do once everything is live

Once both SQL files have been run and you've confirmed the digest works:
- You can **delete** these `.sql` files from your local folder if you want (they're not needed by the website)
- OR keep them for reference / backup
- The setup is fully automated from now on
