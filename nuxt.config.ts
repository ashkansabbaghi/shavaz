// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'vuetify/lib/styles/main.sass', // Vuetify's styles
    '@/assets/styles/main.scss', // Add your main SCSS file here
  ],
  build: {
    transpile: ['vuetify' , ],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: ['@nuxt/image'],
  image: {
    inject: true // Enable image injection for all components
  },
})