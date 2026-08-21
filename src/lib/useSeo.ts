import { useEffect } from 'react';

type Seo = {
  title: string;
  description?: string;
  canonical?: string;
  /** Structured data injected as an application/ld+json script for this route. */
  jsonLd?: unknown;
};

/** Point a <meta> tag at a value, creating it if the document lacks one. */
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const readMeta = (attr: 'name' | 'property', key: string) =>
  document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)?.getAttribute('content') ?? null;

/**
 * Per-route document metadata.
 *
 * index.html carries the home route's tags, so without this every client-side
 * route would keep the home title. Everything this hook touches is snapshotted
 * first and put back on unmount — in an SPA there is no page load to reset it,
 * so a tag that is set but not restored silently leaks onto the next route.
 */
export function useSeo({ title, description, canonical, jsonLd }: Seo) {
  useEffect(() => {
    // --- snapshot every tag we are about to touch ---
    const prev = {
      title: document.title,
      description: readMeta('name', 'description'),
      ogTitle: readMeta('property', 'og:title'),
      ogDescription: readMeta('property', 'og:description'),
      ogUrl: readMeta('property', 'og:url'),
    };
    const canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute('href') ?? null;

    // --- apply ---
    document.title = title;
    setMeta('property', 'og:title', title);
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
    }
    if (canonical) {
      canonicalEl?.setAttribute('href', canonical);
      setMeta('property', 'og:url', canonical);
    }

    /* index.html ships the home route's structured data. Leaving it in place on
       another route would have two graphs describing different pages as if both
       were this one, so it is parked while this route is mounted. */
    const homeGraph = document.head.querySelector<HTMLScriptElement>('#seo-head-jsonld');
    const homeGraphType = homeGraph?.getAttribute('type') ?? null;
    if (homeGraph) homeGraph.setAttribute('type', 'application/ld+json-disabled');

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // --- restore ---
    return () => {
      document.title = prev.title;
      if (prev.description !== null) setMeta('name', 'description', prev.description);
      if (prev.ogTitle !== null) setMeta('property', 'og:title', prev.ogTitle);
      if (prev.ogDescription !== null) setMeta('property', 'og:description', prev.ogDescription);
      if (prev.ogUrl !== null) setMeta('property', 'og:url', prev.ogUrl);
      if (prevCanonical !== null) canonicalEl?.setAttribute('href', prevCanonical);
      script?.remove();
      if (homeGraph && homeGraphType) homeGraph.setAttribute('type', homeGraphType);
    };
  }, [title, description, canonical, jsonLd]);
}
