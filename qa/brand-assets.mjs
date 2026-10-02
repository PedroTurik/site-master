// Renders favicon.png, apple-touch-icon.png and og.png from the vector logo.
import { chromium } from 'playwright';
import { readFileSync } from 'fs';
const parts = JSON.parse(readFileSync('src/components/logo-parts.json', 'utf8'));
const font = (f) => `url(data:font/woff2;base64,${readFileSync(f).toString('base64')}) format('woff2')`;
const inter = font('node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2');
const mono = font('node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2');
const css = `@font-face{font-family:IT;src:${inter};font-weight:100 900}@font-face{font-family:JM;src:${mono};font-weight:100 900}
*{margin:0;box-sizing:border-box}body{background:transparent}
.logo-grey,.logo-word{fill:#fff}.logo-lime{fill:#dedd3a}.logo-tag{fill:rgba(255,255,255,.6)}`;
const mark = (bg, pad, grey) => `<div style="width:100%;height:100%;display:grid;place-items:center;background:${bg};padding:${pad}">
  <svg viewBox="4 4 514 186" style="width:100%"><style>.logo-grey{fill:${grey}!important}</style>${parts.mark}</svg></div>`;
const og = (tagline, sub) => `<div style="width:1200px;height:630px;background:#141619;position:relative;overflow:hidden;font-family:IT;color:#fff;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between">
  <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:60px 60px"></div>
  <div style="position:absolute;inset:0;background:radial-gradient(60% 70% at 85% 60%,rgba(222,221,58,.12),transparent 70%)"></div>
  <svg viewBox="4 4 800 244" style="width:300px;position:relative">${parts.mark}${parts.word}</svg>
  <div style="position:relative">
    <div style="font-family:JM;font-size:18px;letter-spacing:.08em;text-transform:uppercase;color:#a3a7ad;display:flex;gap:12px;align-items:center;margin-bottom:22px"><span style="width:10px;height:10px;background:#dedd3a;display:inline-block"></span>${sub}</div>
    <div style="font-size:84px;font-weight:600;letter-spacing:-.045em;line-height:.98">${tagline}</div>
  </div>
  <svg viewBox="0 0 1440 76" preserveAspectRatio="none" style="position:absolute;left:0;right:0;bottom:10px;width:100%;height:40px"><path d="M0 60 H760 L800 16 H900 L940 60 H1440" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2"/><path d="M800 16 H900" stroke="#dedd3a" stroke-width="3"/></svg>
</div>`;
const b = await chromium.launch();
const shot = async (html, w, h, out, transparent = false) => {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.setContent(`<style>${css} html,body{width:${w}px;height:${h}px}</style>${html}`);
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: out, omitBackground: transparent });
  await p.close();
};
await shot(mark('transparent', '4px', '#7b7c7e'), 64, 64, 'public/favicon.png', true);
await shot(mark('#141619', '34px 26px', '#ffffff'), 180, 180, 'public/apple-touch-icon.png');
await shot(og('Desenvolvendo soluções<br>eletrônicas juntos.', 'Representação · China HUB · Renováveis — desde 1991'), 1200, 630, 'public/og.png');
await shot(og('Developing electronics<br>together.', 'Representation · China HUB · Renewables — since 1991'), 1200, 630, 'public/og-en.png');
await b.close();
console.log('ok');
