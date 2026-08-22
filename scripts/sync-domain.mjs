#!/usr/bin/env node
/**
 * Rewrite the absolute URLs that live in static files.
 *
 *   node scripts/sync-domain.mjs https://www.example.com
 *
 * Most of the site reads its origin from src/lib/site.ts at runtime, but three
 * files cannot: index.html is served before React boots (and crawlers read it
 * first), and robots.txt / sitemap.xml are plain static assets that require
 * absolute URLs by specification.
 *
 * The current origin is detected from the canonical tag in index.html, so this
 * stays correct however many times the domain changes.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const targets = ['index.html', 'public/robots.txt', 'public/sitemap.xml'];

const next = process.argv[2]?.replace(/\/$/, '');
if (!next || !/^https?:\/\//.test(next)) {
  console.error('Usage: node scripts/sync-domain.mjs https://www.example.com');
  process.exit(1);
}

const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const current = html.match(/<link rel="canonical" href="(https?:\/\/[^/"]+)/)?.[1];
if (!current) {
  console.error('Could not find a canonical tag in index.html to detect the current origin.');
  process.exit(1);
}
if (current === next) {
  console.log(`Already ${next} — nothing to do.`);
  process.exit(0);
}

let total = 0;
for (const rel of targets) {
  const path = resolve(root, rel);
  const before = readFileSync(path, 'utf8');
  const after = before.split(current).join(next);
  const hits = before.split(current).length - 1;
  if (hits) {
    writeFileSync(path, after);
    total += hits;
    console.log(`  ${rel}: ${hits} replaced`);
  }
}

console.log(`\n${current} -> ${next}  (${total} occurrences)`);
console.log('Also update VITE_SITE_URL / VITE_APP_URL in Vercel, then redeploy.');
