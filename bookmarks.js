/* =============================================================================
 * Auric bookmarks — dual-mode (localStorage + Supabase cloud sync)
 * Used by listings.html, saved.html, and the nav badge on every page.
 *
 * Why an in-memory cache:
 *   The existing UI calls AuricBookmarks.has/add/remove SYNCHRONOUSLY from
 *   inline onclick handlers. We keep that API by keeping a hot in-memory Set
 *   that is the source of truth for the current tab. Mutations write through
 *   to localStorage immediately and to Supabase in the background (fire and
 *   forget — failures don't block the UI; they get reconciled on next load).
 *
 * Modes:
 *   Signed out → localStorage only (single device, key auric_bookmarks_v1)
 *   Signed in  → Supabase (user_bookmarks table) + localStorage as offline cache
 *
 * Sign-in merge:
 *   When a user signs in, any local bookmarks are inserted into the cloud
 *   (deduped server-side by the unique constraint), then we replace local with
 *   the cloud set. This lets people try the site, save a few venues, then sign
 *   in and find them still there.
 *
 * Disclaimer (matches Terms §11): cloud sync is provided as-is; we don't
 * guarantee bookmarks won't be lost from sync failures, account deletion,
 * Supabase outages, or our shutting the platform down. Caveat saver.
 * =============================================================================
 */
(function () {
  'use strict';

  var LOCAL_KEY = 'auric_bookmarks_v1';
  var CHANGE_EVENT = 'auric:bookmark-changed';
  var SYNC_EVENT = 'auric:bookmark-synced';

  // In-memory truth for THIS tab.
  var cache = new Set();
  var hydrated = false;
  var cloudMode = false;

  // -------- helpers ----------------------------------------------------------
  function readLocal() {
    try {
      var raw = localStorage.getItem(LOCAL_KEY);
      if (!raw) return [];
      var arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr.filter(function (x) { return typeof x === 'string'; }) : [];
    } catch (e) { return []; }
  }
  function writeLocal(arr) {
    try { localStorage.setItem(LOCAL_KEY, JSON.stringify(arr)); }
    catch (e) { /* quota or disabled — soldier on */ }
  }
  function emit(name, saved) {
    try {
      document.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: { name: name, saved: saved } }));
    } catch (e) {}
  }
  function snapshot() {
    var out = [];
    cache.forEach(function (n) { out.push(n); });
    return out;
  }

  function auth() { return window.AuricAuth || null; }
  function supa() { return window.AURIC_SUPABASE || null; }

  function bookmarksUrl(qs) {
    var c = supa();
    if (!c) return null;
    var base = c.url.replace(/\/+$/, '') + '/rest/v1/user_bookmarks';
    return qs ? (base + '?' + qs) : base;
  }
  function restHeaders(extra) {
    var c = supa();
    var a = auth();
    var s = a && a.getSession();
    var h = {
      'Content-Type': 'application/json',
      'apikey': c.anonKey,
      'Authorization': 'Bearer ' + (s ? s.access_token : c.anonKey),
    };
    if (extra) for (var k in extra) h[k] = extra[k];
    return h;
  }

  // -------- cloud ops (background, non-blocking) -----------------------------
  async function cloudList() {
    var res = await fetch(bookmarksUrl('select=venue_name'), { headers: restHeaders() });
    if (!res.ok) throw new Error('cloud list ' + res.status);
    var rows = await res.json();
    return rows.map(function (r) { return r.venue_name; });
  }
  async function cloudAdd(name) {
    var s = auth().getSession();
    if (!s || !s.user || !s.user.id) return;
    await fetch(bookmarksUrl(), {
      method: 'POST',
      headers: restHeaders({ Prefer: 'resolution=ignore-duplicates,return=minimal' }),
      body: JSON.stringify({ user_id: s.user.id, venue_name: name }),
    });
  }
  async function cloudRemove(name) {
    var s = auth().getSession();
    if (!s || !s.user || !s.user.id) return;
    var qs = 'user_id=eq.' + encodeURIComponent(s.user.id)
           + '&venue_name=eq.' + encodeURIComponent(name);
    await fetch(bookmarksUrl(qs), {
      method: 'DELETE',
      headers: restHeaders({ Prefer: 'return=minimal' }),
    });
  }

  // -------- hydration / mode switching --------------------------------------
  async function hydrate() {
    var a = auth();
    var signedIn = !!(a && a.isSignedIn && a.isSignedIn());
    cloudMode = signedIn;

    // Always start with whatever local has.
    var local = readLocal();
    cache = new Set(local);

    if (signedIn) {
      try {
        // First-time merge: push any local-only names into cloud, then take
        // the cloud list as the new truth.
        if (local.length) {
          await Promise.all(local.map(function (n) {
            return cloudAdd(n).catch(function () {});
          }));
        }
        var remote = await cloudList();
        cache = new Set(remote);
        writeLocal(snapshot());
      } catch (e) {
        // Cloud unreachable — fall back to local-only behavior for this session.
        cloudMode = false;
      }
    }

    hydrated = true;
    updateAllBadges();
    refreshAllHearts();
    try { document.dispatchEvent(new CustomEvent(SYNC_EVENT)); } catch (e) {}
  }

  // Re-paint heart buttons + saved chips after a hydration / mode change.
  // Matches either data-bookmark-for="<name>" or data-venue="<name>" (the
  // attribute listings.html already uses on its bookmark-btn elements).
  function refreshAllHearts() {
    document.querySelectorAll('[data-bookmark-for],[data-venue]').forEach(function (btn) {
      var name = btn.getAttribute('data-bookmark-for') || btn.getAttribute('data-venue');
      if (!name) return;
      btn.classList.toggle('saved', cache.has(name));
    });
  }

  // -------- public API (synchronous, matches old surface) -------------------
  var AuricBookmarks = {
    list: function () { return snapshot(); },
    has: function (name) { return cache.has(name); },
    count: function () { return cache.size; },

    add: function (name) {
      if (!cache.has(name)) {
        cache.add(name);
        writeLocal(snapshot());
        if (cloudMode) { cloudAdd(name).catch(function () {}); }
        emit(name, true);
      }
      return snapshot();
    },
    remove: function (name) {
      if (cache.has(name)) {
        cache.delete(name);
        writeLocal(snapshot());
        if (cloudMode) { cloudRemove(name).catch(function () {}); }
        emit(name, false);
      }
      return snapshot();
    },
    toggle: function (name) {
      if (cache.has(name)) { this.remove(name); return false; }
      this.add(name); return true;
    },

    // For pages that want to await a fresh cloud sync.
    refresh: function () { return hydrate(); },
    isCloudMode: function () { return cloudMode; },
    isHydrated: function () { return hydrated; },
  };
  window.AuricBookmarks = AuricBookmarks;

  // -------- convenience globals (used inline by pages) ----------------------
  window.isSaved = function (name) { return AuricBookmarks.has(name); };

  window.toggleBookmark = function (btnEl, name) {
    var nowSaved = AuricBookmarks.toggle(name);
    if (btnEl) btnEl.classList.toggle('saved', nowSaved);
    if (typeof window.updateBookmarkBadges === 'function') window.updateBookmarkBadges();
  };

  function updateAllBadges() {
    var count = AuricBookmarks.count();
    document.querySelectorAll('[data-bookmark-count]').forEach(function (el) {
      el.textContent = count > 0 ? count : '';
      el.style.display = count > 0 ? '' : 'none';
    });
  }
  window.updateBookmarkBadges = updateAllBadges;

  // Keep badges fresh on every change.
  document.addEventListener(CHANGE_EVENT, updateAllBadges);

  // Re-hydrate when the user signs in or signs out in this tab.
  function bindAuthChanges() {
    var a = auth();
    if (a && a.onChange) {
      a.onChange(function () { hydrate(); });
    }
  }

  // Cross-tab sync: if another tab updates local bookmarks, mirror it here.
  window.addEventListener('storage', function (e) {
    if (e.key === LOCAL_KEY) {
      cache = new Set(readLocal());
      updateAllBadges();
      refreshAllHearts();
    }
    if (auth() && e.key === auth().SESSION_KEY) {
      hydrate();
    }
  });

  // -------- boot -------------------------------------------------------------
  function boot() {
    bindAuthChanges();
    hydrate();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
