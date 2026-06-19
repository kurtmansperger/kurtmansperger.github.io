import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kurtmansperger.com',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
