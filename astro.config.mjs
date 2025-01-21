// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output:'server',
  adapter: node({
    mode: 'standalone',
  }),
  image: {
    service: passthroughImageService()
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: `@use "/src/styles/main.scss" as *;`
        },
      },
    },
  },

});