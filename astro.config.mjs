import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react(), sitemap()],
  site: 'https://www.taufiq.co.id'
});