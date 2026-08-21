import { useEffect } from 'react';

type Seo = {
  title: string;
  description?: string;
  canonical?: string;
  /** Structured data injected as an application/ld+json script for this route. */
  jsonLd?: unknown;
};

/** Point a <meta> tag at a value, creating it if the document lacks one. */
function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Per-route document metadata.
 *
 * index.html carries the home route's tags, so without this every client-side
 * route would keep the home title. Each value is restored on unmount, which
 * matters in an SPA: navigating away otherwise leaves the previous page's
 * title and canonical behind.
 */
export function useSeo({ title, description, canonical, jsonLd }: Seo) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const descEl = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = descEl?.getAttribute('content') ?? null;
    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    }
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);

    const canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute('href') ?? null;
    if (canonical && canonicalEl) canonicalEl.setAttribute('href', canonical);
    if (canonical) setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) setMeta('meta[name="description"]', 'name', 'description', prevDesc);
      if (prevCanonical !== null && canonicalEl) canonicalEl.setAttribute('href', prevCanonical);
      script?.remove();
    };
  }, [title, description, canonical, jsonLd]);
}
