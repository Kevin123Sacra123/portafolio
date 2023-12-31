import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/Kevin123Sacra123.github.io',
  base: '/portafolio',
  integrations: [tailwind(), react(), alpinejs()]
});