import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), vue()],
  server: {
    port: 8080
  },
  site: 'https://demos.learnvue.co/vue',
  trailingSlash: 'ignore',
  outDir: './dist/vue',
  build: {
    format: 'file'
  },
  base: '/vue'
})
