// Auric reviews — fetches published reviews from Supabase and exposes
// per-venue aggregates (avg rating, count) to whichever page consumes it.
//
// Pages that include this script can call:
//   AuricReviews.byVenue(name)   -> { count, avg, recent: [...] } or null
//   AuricReviews.ready()         -> Promise that resolves when fetch finishes
//   AuricReviews.all()           -> array of all published review rows
//
// If Supabase isn't configured (placeholders still in supabase-config.js),
// the module no-ops cleanly. byVenue() returns null and ready() resolves
// immediately. Pages can therefore call AuricReviews.byVenue() without
// worrying about whether the backend is wired.

(function () {
  let reviews = [];
  let byVenueIndex = {};
  let readyResolve;
  const readyPromise = new Promise(r => { readyResolve = r; });

  function indexReviews(rows) {
    const idx = {};
    rows.forEach(r => {
      if (!r.venue_name) return;
      if (!idx[r.venue_name]) idx[r.venue_name] = { count: 0, sum: 0, recent: [] };
      idx[r.venue_name].count += 1;
      idx[r.venue_name].sum += Number(r.rating) || 0;
      idx[r.venue_name].recent.push(r);
    });
    // Compute averages, sort recents by date desc
    Object.values(idx).forEach(v => {
      v.avg = v.count > 0 ? v.sum / v.count : 0;
      v.recent.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    });
    return idx;
  }

  async function load() {
    if (typeof window.AURIC_SUPABASE_READY !== 'function' || !window.AURIC_SUPABASE_READY()) {
      // Supabase not configured — leave reviews empty (no UI shows)
      readyResolve();
      return;
    }
    try {
      const cfg = window.AURIC_SUPABASE;
      const url = cfg.url + "/rest/v1/venue_reviews?status=eq.published&select=*&order=created_at.desc";
      const resp = await fetch(url, {
        headers: {
          'apikey': cfg.anonKey,
          'Authorization': 'Bearer ' + cfg.anonKey,
        },
      });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      reviews = await resp.json();
      byVenueIndex = indexReviews(reviews);
    } catch (e) {
      console.warn('AuricReviews: could not load reviews', e);
      reviews = [];
      byVenueIndex = {};
    }
    readyResolve();
  }

  window.AuricReviews = {
    ready() { return readyPromise; },
    byVenue(name) { return byVenueIndex[name] || null; },
    all() { return reviews.slice(); },
    count() { return reviews.length; },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
