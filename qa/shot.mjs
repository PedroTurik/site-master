import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
// usage: node qa/shot.mjs <path> <name> [width] [sliceHeight]
const [path, name, w = '1440', slice = '1800'] = process.argv.slice(2);
mkdirSync('qa/out', { recursive: true });
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: 900 }, deviceScaleFactor: 1 });
const errs = [];
p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
p.on('pageerror', (e) => errs.push(String(e)));
await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
await p.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important} .hdr{position:absolute!important}' });
await p.evaluate(() => Promise.all([...document.images].map((i) => { i.loading = 'eager'; return i.complete ? 1 : new Promise((r) => { i.onload = i.onerror = r; }); })));
await p.waitForTimeout(700);
const h = await p.evaluate(() => document.documentElement.scrollHeight);
const sw = await p.evaluate(() => document.documentElement.scrollWidth);
for (let y = 0, i = 0; y < h; y += +slice, i++) {
  await p.screenshot({ path: `qa/out/${name}-${i}.png`, clip: { x: 0, y, width: +w, height: Math.min(+slice, h - y) }, fullPage: true });
}
console.log(name, 'height', h, 'scrollWidth', sw, errs.length ? 'ERRORS: ' + errs.join(' | ') : 'no errors');
await b.close();
