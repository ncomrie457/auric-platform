/* =============================================================================
 * Auric OS — auth.js
 * Magic-link authentication via Supabase Auth (no client library — bare fetch).
 *
 * Exposes window.AuricAuth:
 *   requestMagicLink(email)       → POSTs /auth/v1/otp, returns {ok, error?}
 *   consumeFragmentSession()      → parses #access_token=… hash, stores session
 *   getSession()                  → returns {access_token, user, expires_at}|null
 *   signOut()                     → POSTs /auth/v1/logout, clears localStorage
 *   isSignedIn()                  → boolean
 *   onChange(fn)                  → subscribe to session changes
 *
 * Session is kept in localStorage under SESSION_KEY. The access_token is a JWT;
 * we decode the payload locally to extract { sub, email } for the UI — we never
 * trust this for authorization, that is enforced server-side by Supabase RLS.
 * =============================================================================
 */
(function () {
  'use strict';

  var SESSION_KEY = 'auric_session_v1';
  var CHANGE_EVENT = 'auric:auth-changed';

  function cfg() {
    return window.AURIC_SUPABASE || null;
  }
  function url(path) {
    var c = cfg();
    if (!c) return null;
    return c.url.replace(/\/+$/, '') + path;
  }
  function headers(extra) {
    var c = cfg();
    var h = { 'Content-Type': 'application/json', 'apikey': c.anonKey };
    if (extra) for (var k in extra) h[k] = extra[k];
    return h;
  }

  // -------- session storage ---------------------------------------------------
  function readSession() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (!s || !s.access_token) return null;
      // Expired? Treat as null. (We don't auto-refresh on read; refresh happens
      // explicitly on next API call that 401s — keeps this code simple.)
      if (s.expires_at && Date.now() / 1000 > s.expires_at) return null;
      return s;
    } catch (e) {
      return null;
    }
  }
  function writeSession(s) {
    if (s) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
    try { window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: { session: s } })); } catch (e) {}
  }

  // -------- JWT payload decode (UI only — never trust for authz) -------------
  function decodeJwt(token) {
    try {
      var parts = token.split('.');
      if (parts.length < 2) return null;
      // base64url → base64
      var b64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      // pad
      while (b64.length % 4) b64 += '=';
      var json = atob(b64);
      // handle utf-8
      try { json = decodeURIComponent(escape(json)); } catch (e) {}
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  }

  function buildSession(access_token, refresh_token, expires_in, expires_at) {
    var payload = decodeJwt(access_token) || {};
    var exp = expires_at;
    if (!exp && expires_in) exp = Math.floor(Date.now() / 1000) + parseInt(expires_in, 10);
    if (!exp && payload.exp) exp = payload.exp;
    return {
      access_token: access_token,
      refresh_token: refresh_token || null,
      expires_at: exp || null,
      user: {
        id: payload.sub || null,
        email: payload.email || null,
      },
    };
  }

  // -------- public API -------------------------------------------------------

  // POST /auth/v1/otp — sends a magic link email.
  async function requestMagicLink(email) {
    var c = cfg();
    if (!c) return { ok: false, error: 'Auth not configured.' };
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false, error: 'Please enter a valid email address.' };
    }
    try {
      var redirectTo = window.location.origin + '/auth.html';
      // GoTrue (Supabase Auth) reads the redirect target from the
      // ?redirect_to=… query param on /auth/v1/otp, NOT from the body. The
      // supabase-js SDK does this transparently; we have to do it ourselves.
      var endpoint = url('/auth/v1/otp') + '?redirect_to=' + encodeURIComponent(redirectTo);
      var res = await fetch(endpoint, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          create_user: true,
        }),
      });
      if (res.ok) return { ok: true };
      var body = null;
      try { body = await res.json(); } catch (e) {}
      var msg = (body && (body.msg || body.error_description || body.error || body.message))
        || ('Request failed (' + res.status + ').');
      // Rate-limit hint
      if (res.status === 429) {
        msg = "We've sent a few links already. Wait about a minute, then try again.";
      }
      return { ok: false, error: msg };
    } catch (e) {
      return { ok: false, error: 'Network error. Check your connection and try again.' };
    }
  }

  // Parse the URL fragment Supabase appends on magic-link return.
  // Returns true on success, false if no token / parse failed.
  async function consumeFragmentSession() {
    var hash = window.location.hash || '';
    if (!hash || hash.indexOf('access_token') === -1) return false;

    var params = {};
    hash.replace(/^#/, '').split('&').forEach(function (kv) {
      var pair = kv.split('=');
      if (pair.length === 2) params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    if (!params.access_token) return false;

    var session = buildSession(
      params.access_token,
      params.refresh_token,
      params.expires_in,
      params.expires_at ? parseInt(params.expires_at, 10) : null
    );
    if (!session.user || !session.user.id) return false;

    writeSession(session);

    // Scrub the token out of the URL so it isn't in browser history.
    try {
      var clean = window.location.pathname + window.location.search;
      window.history.replaceState({}, document.title, clean);
    } catch (e) {}

    return true;
  }

  function getSession() {
    return readSession();
  }

  function isSignedIn() {
    var s = readSession();
    return !!(s && s.user && s.user.id);
  }

  async function signOut() {
    var s = readSession();
    if (s && s.access_token) {
      try {
        await fetch(url('/auth/v1/logout'), {
          method: 'POST',
          headers: headers({ Authorization: 'Bearer ' + s.access_token }),
        });
      } catch (e) { /* swallow — we clear locally regardless */ }
    }
    writeSession(null);
  }

  // Subscribe to session changes. Returns an unsubscribe function.
  function onChange(fn) {
    function handler(e) { try { fn(e.detail && e.detail.session); } catch (err) {} }
    window.addEventListener(CHANGE_EVENT, handler);
    return function () { window.removeEventListener(CHANGE_EVENT, handler); };
  }

  // Return an authed fetch wrapper for the bookmarks API.
  // Adds Authorization + apikey headers automatically.
  function authedFetch(path, init) {
    var s = readSession();
    if (!s) return Promise.resolve(new Response(null, { status: 401 }));
    init = init || {};
    var h = headers({ Authorization: 'Bearer ' + s.access_token });
    if (init.headers) for (var k in init.headers) h[k] = init.headers[k];
    init.headers = h;
    return fetch(url(path), init);
  }

  window.AuricAuth = {
    requestMagicLink: requestMagicLink,
    consumeFragmentSession: consumeFragmentSession,
    getSession: getSession,
    isSignedIn: isSignedIn,
    signOut: signOut,
    onChange: onChange,
    authedFetch: authedFetch,
    SESSION_KEY: SESSION_KEY,
    CHANGE_EVENT: CHANGE_EVENT,
  };
})();
