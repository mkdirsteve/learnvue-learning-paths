import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    mdx(),
    vue()
  ],
  server: {
    port: 8080
  },
  site: 'https://demos.learnvue.co',
  outDir: './dist/vue',
  trailingSlash: 'ignore',
  base: '/vue'
})
