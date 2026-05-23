// Auric bookmarks — localStorage-backed venue saving
// Used by listings.html and saved.html
//
// API:
//   AuricBookmarks.list()           -> array of venue names currently saved
//   AuricBookmarks.has(name)        -> bool
//   AuricBookmarks.add(name)        -> array of saved names (after add)
//   AuricBookmarks.remove(name)     -> array of saved names (after remove)
//   AuricBookmarks.toggle(name)     -> bool (true if now saved, false if now removed)
//   AuricBookmarks.count()          -> number of saved venues
//
// Plus three convenience globals: isSaved(name), toggleBookmark(buttonEl, name), updateBookmarkBadges()

(function () {
  const KEY = 'auric_bookmarks_v1';

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function write(arr) {
    try {
      localStorage.setItem(KEY, JSON.stringify(arr));
    } catch (e) {
      // localStorage might be full or disabled
      console.warn('AuricBookmarks: could not persist', e);
    }
  }

  const AuricBookmarks = {
    list() { return read(); },
    has(name) { return read().includes(name); },
    count() { return read().length; },
    add(name) {
      const arr = read();
      if (!arr.includes(name)) {
        arr.push(name);
        write(arr);
      }
      return arr;
    },
    remove(name) {
      const arr = read().filter(n => n !== name);
      write(arr);
      return arr;
    },
    toggle(name) {
      if (this.has(name)) { this.remove(name); return false; }
      this.add(name);
      return true;
    },
  };

  window.AuricBookmarks = AuricBookmarks;

  // Convenience globals used inline by listings/saved pages.
  window.isSaved = function (name) { return AuricBookmarks.has(name); };

  window.toggleBookmark = function (btnEl, name) {
    const nowSaved = AuricBookmarks.toggle(name);
    if (btnEl) btnEl.classList.toggle('saved', nowSaved);
    if (typeof window.updateBookmarkBadges === 'function') window.updateBookmarkBadges();
    // Let pages react to changes (e.g. saved.html re-renders to drop a removed card)
    document.dispatchEvent(new CustomEvent('auric:bookmark-changed', { detail: { name, saved: nowSaved } }));
  };

  window.updateBookmarkBadges = function () {
    const count = AuricBookmarks.count();
    document.querySelectorAll('[data-bookmark-count]').forEach(el => {
      el.textContent = count > 0 ? count : '';
      el.style.display = count > 0 ? '' : 'none';
    });
  };

  // Update nav badge as soon as the script loads (once DOM is ready)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.updateBookmarkBadges);
  } else {
    window.updateBookmarkBadges();
  }
})();
