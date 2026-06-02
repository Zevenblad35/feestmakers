import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://defeestmakers.nl',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
