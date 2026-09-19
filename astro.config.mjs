// @ts-check
import process from 'node:process';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://andrlupi.github.io',
  base: process.env.BASE_PATH || '/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
