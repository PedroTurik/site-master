import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 800 } });
await p.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
for (const sel of ['.hero', '.mq', '.areas', '.about', '.mfr', '.dsec', '.hub', '.energy', '.contact', '.ftr', '.hdr']) {
  const w = await p.evaluate((s) => { const e = document.querySelector(s); if (!e) return 'none'; const o = e.style.display; e.style.display = 'none'; const sw = document.documentElement.scrollWidth; e.style.display = o; return sw; }, sel);
  console.log(sel, w);
}
await b.close();
