/**
 * Post-build script: copies index.html into each SPA route subdirectory
 * so GitHub Pages serves 200 (not 404) for direct URL access.
 * Each copy gets route-specific meta tags for SEO.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');
const indexHtml = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

const routes = [
  {
    path: 'articles',
    title: 'Articles | Ioana Ognibeni',
    description: 'Thoughts on product management, strategy, AI, and building teams that own their work.',
    canonical: 'https://ioana-ognibeni.eu/articles/',
  },
  {
    path: 'impressum',
    title: 'Impressum | Ioana Ognibeni',
    description: 'Legal disclosure (Impressum) for ioana-ognibeni.eu.',
    canonical: 'https://ioana-ognibeni.eu/impressum/',
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | Ioana Ognibeni',
    description: 'Privacy policy for ioana-ognibeni.eu. No tracking, no analytics, just a static website.',
    canonical: 'https://ioana-ognibeni.eu/privacy-policy/',
  },
];

for (const route of routes) {
  let html = indexHtml;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${route.description}">`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${route.canonical}"`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${route.canonical}"`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${route.title}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${route.description}">`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${route.title}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${route.description}">`
  );

  const outDir = resolve(distDir, route.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), html);
  console.log(`  ✓ ${route.path}/index.html`);
}

console.log(`\nGenerated ${routes.length} static route pages.`);
