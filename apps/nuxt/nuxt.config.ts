import { defineNuxtConfig } from 'nuxt/config'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.PUBLIC_URL
    }
  },

  // })
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    [
      '@storyblok/nuxt',
      {
        bridge: true,
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: { region: 'us' },
        useApiClient: true
      }
    ]
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'en-gb',
        name: 'English (UK)'
      }
    ],
    strategy: 'prefix_except_default'
  },

  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a-us.storyblok.com'
    }
  },
  css: ['@/assets/main.css'],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      preload: ['vue']
    }
  },
  experimental: {
    componentIslands: true
  }
})
