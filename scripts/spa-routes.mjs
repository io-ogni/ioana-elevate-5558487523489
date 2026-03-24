// Copy index.html to each SPA route so GitHub Pages serves 200 instead of 404
import { cpSync, mkdirSync } from 'fs';

const routes = ['articles', 'privacy-policy', 'impressum'];
const dist = 'dist';

for (const route of routes) {
  mkdirSync(`${dist}/${route}`, { recursive: true });
  cpSync(`${dist}/index.html`, `${dist}/${route}/index.html`);
}

console.log(`Created static routes: ${routes.join(', ')}`);
