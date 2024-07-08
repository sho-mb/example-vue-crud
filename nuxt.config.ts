// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  runtimeConfig: {
    public: {
      API_URI: process.env.API_URI,
      API_PORT: process.env.API_PORT,
    },
  },
})
