import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await p.click('.hdr-burger'); await p.waitForTimeout(900);
await p.screenshot({ path: 'qa/out/menu.png' });
await p.keyboard.press('Escape'); await p.waitForTimeout(500);
console.log('open after Esc:', await p.evaluate(() => document.querySelector('.hdr').classList.contains('is-open')));
await b.close();
