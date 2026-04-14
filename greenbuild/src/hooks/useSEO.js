import { useEffect } from 'react';

const BASE_URL  = 'https://www.greenbuild.com';
const SITE_NAME = 'GreenBuild Construction';
const DEFAULT_IMG = `${BASE_URL}/og-image.jpg`;

/**
 * useSEO — call at the top of every Page component.
 * Updates <title>, <meta name="description">, Open Graph, Twitter Card,
 * canonical link, and JSON-LD structured data on every page change.
 *
 * @param {object} opts
 * @param {string} opts.title        - Page title (without site name suffix)
 * @param {string} opts.description  - Meta description (120–160 chars ideal)
 * @param {string} [opts.path]       - Canonical path e.g. '/services'
 * @param {string} [opts.image]      - OG image URL
 * @param {'website'|'article'} [opts.type] - OG type
 * @param {object} [opts.jsonLd]     - Optional JSON-LD structured data object
 */
export function useSEO({ title, description, path = '/', image = DEFAULT_IMG, type = 'website', jsonLd }) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonical = `${BASE_URL}${path}`;

    // ── Title ──────────────────────────────────────
    document.title = fullTitle;

    // ── Helper: upsert a <meta> tag ─────────────────
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('="');
        el.setAttribute(attrName, attrVal.replace('"', ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Helper: upsert a <link> tag ─────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard meta ───────────────────────────────
    setMeta('meta[name="description"]',        'content', description);
    setMeta('meta[name="robots"]',             'content', 'index, follow, max-snippet:-1, max-image-preview:large');
    setMeta('meta[name="theme-color"]',        'content', '#1a4231');

    // ── Canonical ───────────────────────────────────
    setLink('canonical', canonical);

    // ── Open Graph ──────────────────────────────────
    setMeta('meta[property="og:title"]',       'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]',         'content', canonical);
    setMeta('meta[property="og:type"]',        'content', type);
    setMeta('meta[property="og:image"]',       'content', image);
    setMeta('meta[property="og:image:width"]', 'content', '1200');
    setMeta('meta[property="og:image:height"]','content', '630');
    setMeta('meta[property="og:site_name"]',   'content', SITE_NAME);
    setMeta('meta[property="og:locale"]',      'content', 'en_US');

    // ── Twitter Card ────────────────────────────────
    setMeta('meta[name="twitter:card"]',        'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]',       'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]',       'content', image);

    // ── JSON-LD Structured Data ──────────────────────
    const existingScript = document.getElementById('json-ld');
    if (existingScript) existingScript.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.id   = 'json-ld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // ── Cleanup on unmount ───────────────────────────
    return () => {
      const s = document.getElementById('json-ld');
      if (s) s.remove();
    };
  }, [title, description, path, image, type, jsonLd]);
}
