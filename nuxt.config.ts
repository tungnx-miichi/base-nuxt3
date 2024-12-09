// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: false,
  app: {
    layoutTransition: false,
  },
  components: true,
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || 'https://api.example.com',
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['vuetify/styles', '@/assets/css/tailwind.css', '@/assets/scss/main.scss', '@mdi/font/css/materialdesignicons.css'],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [
      vuetify({
        autoImport: true,
      }),
    ],
  },
})
