import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rikicm.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
