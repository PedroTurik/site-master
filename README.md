# Mastertronics — website

Static site built with [Astro](https://astro.build). Portuguese (default, `/`) and English (`/en/`).

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # serve dist/
```

`dist/` is plain HTML/CSS/JS and can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, or uploaded to any web server / cPanel).

## Before going live

1. **Contact form** — create a free access key at [web3forms.com](https://web3forms.com) for `contato@mastertronics.com.br` and paste it in `src/data/company.ts` → `form.accessKey`. Until then, submitting the form opens the visitor's e-mail client with the message pre-filled (nothing is lost).
2. Confirm the contact e-mail (`contato@` — the old EN site showed `contact@`).
3. Old URLs `/chinahub`, `/en/chinahub`, `/en/renovaveis`, `/representadas/*` and `/distribuidores` (`/en/distributors`) already redirect to the new pages (`public/_redirects`).

## Editing content

| What | Where |
|---|---|
| Company info, e-mail, address, CNPJ, LinkedIn, form key | `src/data/company.ts` |
| Manufacturers (texts, logos, categories, product lines, markets, facts) | `src/data/manufacturers.ts` |
| Distribution partners (logos, descriptions — shown on `/fabricantes/#distribuicao`) | `src/data/manufacturers.ts` → `distributors` |
| Photos | `src/assets/photos/<name>.jpg`, used via `<Photo name="…">` — credits in `PHOTO-CREDITS.md` (Unsplash/Pexels licenses, no attribution required) |
| Page copy (PT + EN side by side) | `src/views/*.astro` (top of each file) |
| Navigation / shared labels | `src/i18n/ui.ts` |
| URLs per language | `src/i18n/routes.ts` |

**Add a manufacturer:** drop its logo (transparent PNG or SVG) in `public/logos/`, optional product images in `src/assets/products/`, then add an entry to `manufacturers` in `src/data/manufacturers.ts` (and its slug to `order`). Its page (`/fabricantes/<slug>/` and `/en/manufacturers/<slug>/`), home tile, logo marquee, portfolio index and counters are generated automatically.

## Structure

```
src/
  components/   Header, Footer, Logo (inline vector), WorldMap, Trace, ContactSection, …
  data/         company.ts, manufacturers.ts, world-dots.json (generated)
  i18n/         routes + UI strings
  layouts/      Base.astro (SEO, hreflang, JSON-LD)
  views/        one file per page, shared by PT and EN routes
  pages/        thin route files (PT at root, EN under /en)
public/         logos, favicon, OG images
scripts/        build-map.mjs — regenerates the dot-matrix world map
qa/             screenshot + brand-asset scripts (Playwright, dev only)
```

## Design system

- **Colors** — graphite ink `#141619`, paper `#f5f5f1`, logo grey `#7b7c7e`, logo lime `#dedd3a`. Lime is used as a *signal* (markers, focus, active states, small highlights on dark), never as a large surface.
- **Type** — Inter Tight (display), Inter (text), JetBrains Mono (datasheet-style labels).
- **Motif** — the "trace": a line following the logo's ribbon (flat → rise → plateau → fall), used as section dividers and in the China HUB flow.
