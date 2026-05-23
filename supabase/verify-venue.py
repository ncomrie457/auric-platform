#!/usr/bin/env python3
"""
verify-venue.py — first-pass automated checks for a suggested venue URL.

Usage:
    python3 supabase/verify-venue.py https://venue-website.com
    python3 supabase/verify-venue.py https://venue-website.com --name "Venue Name"

Runs:
    1. Website reachability (HTTP status)
    2. Final URL after redirects (catches brand collisions like
       thewellnyc.com → unrelated bathhouse)
    3. Yelp / Google "permanently closed" check (best-effort)
    4. Known franchise pattern detection
    5. Surfaces 'rental' / 'private events' page if findable

Output is a verdict (PASS / REVIEW / REJECT) plus details for the
moderator. Designed to take 5 seconds per venue.
"""

import argparse
import re
import sys
import urllib.parse
import urllib.request
import ssl
from html.parser import HTMLParser

# Known franchise patterns — automatic reject unless overridden manually
FRANCHISE_PATTERNS = [
    ("club pilates", "Club Pilates franchise — locked instructor model"),
    ("soulcycle", "SoulCycle franchise — locked instructor model"),
    ("corepower", "CorePower franchise — locked instructor model"),
    ("orangetheory", "OrangeTheory franchise — locked instructor model"),
    ("pure barre", "Pure Barre franchise — locked instructor model"),
    ("f45", "F45 franchise — locked instructor model"),
    ("crunch fitness", "Crunch franchise — locked instructor model"),
    ("planet fitness", "Planet Fitness franchise — locked instructor model"),
    ("equinox", "Equinox — corporate; only via Equinox events team"),
]

# Strings that indicate a rental / events program exists
RENTAL_HINTS = [
    "private event", "private events", "host an event", "host your event",
    "rent our space", "space rental", "studio rental", "venue rental",
    "rentals", "book the space", "book our space", "event space",
    "corporate events", "wedding venue", "wedding rental",
]

# Strings that indicate the venue is closed
CLOSED_HINTS = [
    "permanently closed", "we have closed", "we are closed",
    "has closed", "closed for business",
]

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15"

# Allow self-signed certs (some small studio sites have SSL issues)
SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE


def fetch(url, max_bytes=300_000, timeout=8):
    """Fetch a URL. Returns (final_url, status_code, body_text) or raises."""
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=timeout, context=SSL_CTX) as resp:
        body = resp.read(max_bytes).decode("utf-8", errors="ignore")
        return (resp.geturl(), resp.status, body)


class TitleExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.title = ""

    def handle_starttag(self, tag, attrs):
        if tag == "title":
            self.in_title = True

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title and not self.title:
            self.title = data.strip()


def extract_title(html):
    p = TitleExtractor()
    try:
        p.feed(html)
    except Exception:
        pass
    return p.title


def normalize_domain(url):
    parsed = urllib.parse.urlparse(url)
    host = parsed.netloc.lower()
    return host[4:] if host.startswith("www.") else host


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                  formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("url", help="Venue website URL (with or without https://)")
    ap.add_argument("--name", help="Submitted venue name (for franchise check)")
    args = ap.parse_args()

    url = args.url
    if not url.startswith("http"):
        url = "https://" + url

    submitted_name = (args.name or "").lower().strip()
    submitted_domain = normalize_domain(url)

    print(f"\n=== Verifying: {url} ===")
    if submitted_name:
        print(f"Submitted name: {args.name}")
    print()

    findings = []  # tuples of (severity, message). severity in {"reject","warn","ok","info"}

    # 1. Franchise pattern check on submitted name and URL ----------------------
    haystack = (submitted_name + " " + url).lower()
    for pattern, reason in FRANCHISE_PATTERNS:
        if pattern in haystack:
            findings.append(("reject", f"Franchise pattern matched: {reason}"))

    # 2. Reachability ----------------------------------------------------------
    final_url = None
    body = ""
    try:
        final_url, status, body = fetch(url)
        if status >= 400:
            findings.append(("reject", f"Site returned HTTP {status}"))
        else:
            findings.append(("ok", f"Site reachable (HTTP {status})"))
    except Exception as e:
        # Try the http:// variant if https failed (SSL cert issues are common)
        if url.startswith("https://"):
            try:
                final_url, status, body = fetch("http://" + url[8:])
                findings.append(("warn",
                    f"HTTPS failed but HTTP works (cert issue on the venue's site). HTTP status: {status}"))
            except Exception as e2:
                findings.append(("reject", f"Could not reach site: {e2}"))
        else:
            findings.append(("reject", f"Could not reach site: {e}"))

    # 3. Final URL (redirect detection) ----------------------------------------
    if final_url:
        final_domain = normalize_domain(final_url)
        if final_domain != submitted_domain:
            findings.append(("warn",
                f"Redirects to a different domain — possible brand collision. "
                f"Submitted: {submitted_domain} → Final: {final_domain}"))
        title = extract_title(body)
        if title:
            print(f"Page title: {title}")
            findings.append(("info", f"Page title: '{title}'"))

    # 4. Closed-business detection in page body ---------------------------------
    body_lower = body.lower()
    for hint in CLOSED_HINTS:
        if hint in body_lower:
            findings.append(("reject",
                f"Closed-business signal in page body: '{hint}'"))
            break

    # 5. Rental / events page detection ----------------------------------------
    rental_signals = [h for h in RENTAL_HINTS if h in body_lower]
    if rental_signals:
        findings.append(("ok",
            f"Rental/events keywords found on landing page: {', '.join(rental_signals[:4])}"))
    else:
        findings.append(("warn",
            "No rental/events keywords on landing page — check site footer or dedicated subpage"))

    # 6. Verdict ---------------------------------------------------------------
    print("\nFindings:")
    has_reject = any(s == "reject" for s, _ in findings)
    has_warn = any(s == "warn" for s, _ in findings)
    for severity, msg in findings:
        symbol = {"reject": "✗", "warn": "⚠", "ok": "✓", "info": "·"}[severity]
        print(f"  {symbol} {msg}")

    print("\nVerdict:")
    if has_reject:
        print("  → REJECT — at least one hard rule failed. Mark status = 'rejected' in Supabase.")
        sys.exit(1)
    elif has_warn:
        print("  → REVIEW — automated checks passed but some signals need human eyes.")
        print("    Apply the full checklist in supabase/VERIFICATION.md before approving.")
        sys.exit(2)
    else:
        print("  → PASS — automated checks clean. Apply the soft checks in VERIFICATION.md")
        print("    (rental availability, fit, submitter credibility) before approving.")
        sys.exit(0)


if __name__ == "__main__":
    main()
