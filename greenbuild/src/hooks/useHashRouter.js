import { useState, useEffect } from 'react';

/**
 * Hash-based router — maps window.location.hash to a page key
 *
 * #/              → 'home'
 * #/about         → 'about'
 * #/services      → 'services'
 * #/projects      → 'projects'
 * #/properties    → 'properties'
 * #/testimonials  → 'testimonials'
 * #/contact       → 'contact'
 */
export function useHashRouter() {
  const getPage = () => {
    const hash = window.location.hash
      .replace('#/', '')
      .split('?')[0]
      .split('#')[0]
      .trim();

    const routes = {
      'about':        'about',
      'services':     'services',
      'projects':     'projects',
      'properties':   'properties',
      'testimonials': 'testimonials',
      'contact':      'contact',
    };
    return routes[hash] ?? 'home';
  };

  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const handler = () => setPage(getPage());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return page;
}
