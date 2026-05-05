// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  devtools: { enabled: true },
  title: 'RollSpawn',
  css: ["~/assets/css/main.css"],
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    }
  },
  app: {
    pageTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
  },
});
