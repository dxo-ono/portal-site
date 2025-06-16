import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Your site name
  build: {
    assets: 'static/',
    inlineStylesheets: 'never',
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/style.scss";`,
        },
      },
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        page !== 'https://hyper-text.org/err/403/' &&
        page !== 'https://hyper-text.org/err/404/' &&
        page !== 'https://hyper-text.org/err/500/',
    }),
  ],
})
