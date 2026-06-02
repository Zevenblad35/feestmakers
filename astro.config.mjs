import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://defeestmakers.nl',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
