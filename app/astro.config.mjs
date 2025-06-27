import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://dxo-ono.github.io/portal-site', // Your site name
  base: '/portal-site/',
  build: {
    outDir: 'docs',
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
