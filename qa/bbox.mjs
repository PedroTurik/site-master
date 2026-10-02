import { chromium } from 'playwright';
import { readFileSync } from 'fs';
const svg = readFileSync(process.argv[2],'utf8');
const b = await chromium.launch(); const p = await b.newPage();
await p.setContent(svg);
const r = await p.evaluate(()=>[...document.querySelectorAll('path')].filter(e=>!e.closest('clipPath')).map((e,i)=>{const bb=e.getBoundingClientRect();return [i,e.style.fill,Math.round(bb.x),Math.round(bb.y),Math.round(bb.width),Math.round(bb.height)]}));
console.log(JSON.stringify(r)); await b.close();
