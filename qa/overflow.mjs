import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 800 } });
await p.goto('http://localhost:4321' + (process.argv[2] || '/'), { waitUntil: 'networkidle' });
const r = await p.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => { const r = e.getBoundingClientRect(); if (r.right <= 391) return false; for (let a = e.parentElement; a; a = a.parentElement) if (getComputedStyle(a).overflowX !== 'visible') return false; return true; }).slice(0, 12).map((e) => `${e.tagName}.${[...e.classList].join('.')} right=${Math.round(e.getBoundingClientRect().right)}`));
console.log(r.join('\n')); await b.close();
