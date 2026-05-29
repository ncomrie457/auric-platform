// =============================================================================
// Auric OS — Paywall / Creator Pro gate (drop-in, no build step)
// =============================================================================
//
// What this does
//   - Shows a "last updated" freshness stamp (the anti-piracy mechanic: a
//     shared copy goes stale, the live one stays current).
//   - For non-Pro visitors, blurs + fades out any element marked
//     `data-pro-gate` and drops an "Unlock Creator Pro" card beneath the teaser.
//   - For Pro visitors, reveals everything and shows a small Pro badge.
//
// How to use on a page
//   1. <script defer src="paywall.js"></script>
//   2. Put a stamp anywhere:   <div class="auric-stamp" data-updated="May 2026"></div>
//      (or just <div class="auric-stamp">Updated May 2026</div>)
//   3. Wrap the premium content: <div data-pro-gate> ... </div>
//      Everything before that div stays free (your teaser).
//
// Entitlement seam
//   isPro() / startCheckout() / signOut() below are the ONLY places that know
//   how membership works. Today they use a local flag so the gate UX is fully
//   demonstrable before payments exist. When Stripe + Supabase auth land,
//   replace the bodies of these three functions — nothing else needs to change.
// =============================================================================

(function () {
  'use strict';

  // ---- Entitlement seam (swap these 3 bodies for real Stripe/Supabase) ------

  // TODO(stripe/supabase): verify the signed-in user's active subscription.
  function isPro() {
    try { return localStorage.getItem('auric_pro') === 'true'; }
    catch (e) { return false; }
  }

  // CURRENT PUBLIC ACTION: pre-launch waitlist. Stripe isn't live yet (blocked
  // on legal review), so the unlock button collects interest via the Auric inbox
  // — no payment, no stored data. Swap the card's button back to startCheckout()
  // once payments go live.
  function joinWaitlist() {
    var subject = encodeURIComponent('Auric Creator Pro — waitlist');
    var body = encodeURIComponent(
      "I'd like to know when Auric Creator Pro launches.\n\n" +
      'Page: ' + location.href
    );
    window.location.href =
      'mailto:auricmovement@outlook.com?subject=' + subject + '&body=' + body;
  }

  // TODO(stripe): redirect to Stripe Checkout for Creator Pro ($15/mo), then
  // grant access on the success return. Not wired to the UI yet — kept as the
  // entitlement seam for launch. (Also usable from the console to preview the
  // unlocked state: auricPaywall.startCheckout())
  function startCheckout() {
    try { localStorage.setItem('auric_pro', 'true'); } catch (e) {}
    location.reload();
  }

  // TODO(supabase): sign the user out of their session.
  function signOut() {
    try { localStorage.removeItem('auric_pro'); } catch (e) {}
    location.reload();
  }

  window.auricPaywall = {
    isPro: isPro, joinWaitlist: joinWaitlist, startCheckout: startCheckout, signOut: signOut
  };

  // ---- Styles (injected so the page only needs one extra file) --------------

  var css = '' +
    '.auric-stamp{display:inline-flex;align-items:center;gap:7px;font-size:12px;' +
    'font-weight:500;letter-spacing:.02em;color:var(--gold-d,#7A5C14);' +
    'background:var(--gold-l,#FBF5E6);border:0.5px solid var(--gold,#C9A84C);' +
    'border-radius:999px;padding:5px 12px;margin-bottom:26px;}' +
    '.auric-stamp::before{content:"";width:7px;height:7px;border-radius:50%;' +
    'background:var(--sage,#7B9E87);box-shadow:0 0 0 3px rgba(123,158,135,.22);}' +

    '.auric-locked{position:relative;max-height:300px;overflow:hidden;' +
    'pointer-events:none;user-select:none;filter:blur(4px);opacity:.65;' +
    '-webkit-mask-image:linear-gradient(180deg,#000 35%,transparent 100%);' +
    'mask-image:linear-gradient(180deg,#000 35%,transparent 100%);}' +

    '.auric-unlock{max-width:560px;margin:8px auto 8px;background:#fff;' +
    'border:0.5px solid var(--stone,#EDE9E0);border-radius:16px;' +
    'box-shadow:0 14px 40px -18px rgba(44,36,24,.28);padding:30px 30px 28px;' +
    'text-align:center;}' +
    '.auric-unlock .lock{width:38px;height:38px;border-radius:50%;' +
    'display:flex;align-items:center;justify-content:center;margin:0 auto 14px;' +
    'background:var(--gold-l,#FBF5E6);border:0.5px solid var(--gold,#C9A84C);}' +
    '.auric-unlock .lock svg{width:18px;height:18px;stroke:var(--gold-d,#7A5C14);' +
    'fill:none;stroke-width:1.8;}' +
    '.auric-unlock h3{font-family:"Cormorant Garamond",serif;font-size:26px;' +
    'font-weight:500;margin:0 0 8px;color:var(--ink,#2C2418);}' +
    '.auric-unlock .sub{font-size:14px;color:var(--earth,#7A6A52);' +
    'line-height:1.6;margin:0 auto 18px;max-width:420px;}' +
    '.auric-unlock ul{list-style:none;padding:0;margin:0 auto 20px;' +
    'max-width:340px;text-align:left;}' +
    '.auric-unlock li{font-size:13.5px;color:var(--ink,#2C2418);' +
    'padding:7px 0 7px 26px;position:relative;line-height:1.5;' +
    'border-bottom:0.5px solid var(--cream,#FAF8F4);}' +
    '.auric-unlock li:last-child{border-bottom:0;}' +
    '.auric-unlock li::before{content:"";position:absolute;left:2px;top:11px;' +
    'width:13px;height:13px;border-radius:50%;background:var(--sage-l,#EDF3EF);' +
    'border:1px solid var(--sage,#7B9E87);}' +
    '.auric-unlock li::after{content:"";position:absolute;left:6px;top:14px;' +
    'width:4px;height:7px;border:solid var(--sage-d,#2A5A36);' +
    'border-width:0 1.6px 1.6px 0;transform:rotate(42deg);}' +
    '.auric-unlock .price{font-size:14px;color:var(--earth,#7A6A52);' +
    'margin-bottom:14px;}' +
    '.auric-unlock .price b{font-family:"Cormorant Garamond",serif;' +
    'font-size:30px;font-weight:600;color:var(--ink,#2C2418);}' +
    '.auric-unlock button{font-family:inherit;font-size:14px;font-weight:500;' +
    'color:#fff;background:var(--ink,#2C2418);border:0;border-radius:999px;' +
    'padding:13px 30px;cursor:pointer;transition:transform .12s,background .12s;}' +
    '.auric-unlock button:hover{background:#000;transform:translateY(-1px);}' +
    '.auric-unlock .note{display:block;margin-top:14px;font-size:12.5px;' +
    'color:var(--earth,#7A6A52);}' +

    '.auric-pro-badge{position:fixed;right:16px;bottom:16px;z-index:200;' +
    'display:inline-flex;align-items:center;gap:8px;font-size:12px;' +
    'font-weight:500;color:var(--gold-d,#7A5C14);background:var(--gold-l,#FBF5E6);' +
    'border:0.5px solid var(--gold,#C9A84C);border-radius:999px;' +
    'padding:7px 12px;box-shadow:0 8px 24px -12px rgba(44,36,24,.35);}' +
    '.auric-pro-badge .exit{background:none;border:0;cursor:pointer;font-size:11px;' +
    'color:var(--earth,#7A6A52);text-decoration:underline;padding:0;}' +
    '@media (max-width:600px){.auric-unlock{padding:24px 18px;}' +
    '.auric-unlock h3{font-size:23px;}}';

  function injectStyles() {
    var s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);
  }

  // ---- Rendering ------------------------------------------------------------

  function renderStamp() {
    var stamps = document.querySelectorAll('.auric-stamp');
    for (var i = 0; i < stamps.length; i++) {
      var el = stamps[i];
      if (el.textContent.trim()) continue; // page supplied its own label
      var when = el.getAttribute('data-updated') || '';
      el.textContent = when ? ('Updated ' + when + ' · kept current for Creator Pro')
                            : 'Kept current for Creator Pro';
    }
  }

  function buildUnlockCard() {
    var card = document.createElement('div');
    card.className = 'auric-unlock';
    card.innerHTML =
      '<div class="lock"><svg viewBox="0 0 24 24">' +
      '<rect x="5" y="11" width="14" height="9" rx="2"></rect>' +
      '<path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg></div>' +
      '<h3>The rest of this guide is Creator&nbsp;Pro</h3>' +
      '<p class="sub">Permit fees, agency contacts, and approval timelines change. ' +
      'Pro keeps you on the current version — a copied PDF goes stale, this doesn’t.</p>' +
      '<ul>' +
      '<li>Full Permit &amp; Certification guides, kept current</li>' +
      '<li>Direct venue contacts — email, phone, booking</li>' +
      '<li>Unlimited Auric Concierge</li>' +
      '<li>Unlimited saved venues</li>' +
      '</ul>' +
      '<div class="price">Launching soon · <b>$15</b> / month</div>' +
      '<button type="button" data-auric-waitlist>Join the waitlist</button>' +
      '<span class="note">We’ll email you the moment it opens.</span>';
    card.querySelector('[data-auric-waitlist]').addEventListener('click', joinWaitlist);
    return card;
  }

  function renderProBadge() {
    var badge = document.createElement('div');
    badge.className = 'auric-pro-badge';
    badge.innerHTML = 'Auric Pro ✓ <button class="exit" type="button">exit preview</button>';
    badge.querySelector('.exit').addEventListener('click', signOut);
    document.body.appendChild(badge);
  }

  function applyGate() {
    var gates = document.querySelectorAll('[data-pro-gate]');
    if (!gates.length) return;
    if (isPro()) { renderProBadge(); return; }
    for (var i = 0; i < gates.length; i++) {
      var gate = gates[i];
      gate.classList.add('auric-locked');
      gate.setAttribute('aria-hidden', 'true');
      // one unlock card, placed after the first gated block
      if (i === 0) gate.parentNode.insertBefore(buildUnlockCard(), gate.nextSibling);
    }
  }

  function init() {
    injectStyles();
    renderStamp();
    applyGate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
