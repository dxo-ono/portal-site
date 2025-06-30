import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // site: 'https://example.com', // Your site name 設定前(htmlのみ反映)
  site: 'https://dxo-ono.github.io/portal-site',
  base: '/portal-site/', // 追記 設定前(htmlのみ反映)は記述なし
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
