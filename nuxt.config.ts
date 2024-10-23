// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify',],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Ensure you're using the modern Sass compiler API
          // api: 'modern-compiler', // Correct option is 'modern' (modern API), as the 'modern-compiler' may be incorrect
          // silenceDeprecationWarning: true, // Disable deprecation warnings
        },
      },
    },
  },
  css: [
    'vuetify/lib/styles/main.sass', // Vuetify's styles
    '@/assets/styles/main.scss', // Add your main SCSS file here
  ],
  modules: ['@nuxt/image'],
  image: {
    inject: true // Enable image injection for all components
  },
})