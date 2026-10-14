import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://mastertronics.com.br',
  trailingSlash: 'ignore',
  // Pages stay static; only /api/admin/* runs as a Vercel function (text editing at /admin).
  adapter: vercel(),
  env: {
    schema: {
      ADMIN_PASSWORD: envField.string({ context: 'server', access: 'secret', optional: true }),
      GITHUB_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      GITHUB_REPO: envField.string({ context: 'server', access: 'secret', default: 'PedroTurik/site-master' }),
      GITHUB_BRANCH: envField.string({ context: 'server', access: 'secret', default: 'main' }),
    },
  },
  // Legacy URLs from the previous (Framer) site
  redirects: {
    '/chinahub': '/china-hub/',
    '/en/chinahub': '/en/china-hub/',
    '/en/renovaveis': '/en/renewables/',
    '/representadas': '/fabricantes/',
    ...Object.fromEntries(
      ['memsic', 'ct-micro', 'crrc-times-transducer', 'phison', 'dynex', 'crrc-times-semiconductor', 'goford', 'esmt', 'jenson-display', 'rcl-display', 'siward', 'ee-magnetic']
        .map((s) => [`/representadas/${s}`, `/fabricantes/${s}/`]),
    ),
  },
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en' } },
    }),
  ],
});
