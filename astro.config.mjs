import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mastertronics.com.br',
  trailingSlash: 'ignore',
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
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en' } },
    }),
  ],
});
