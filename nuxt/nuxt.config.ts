import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  css: ['@/assets/main.css'],
  app: {
    baseURL: '/nuxt',
    cdnURL: 'https://lv-nuxt.vercel.app/nuxt'
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      preload: ['vue']
    }
  }
})
