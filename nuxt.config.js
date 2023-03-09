export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Slag för hjältar',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  //https://nuxtjs.org/docs/configuration-glossary/configuration-generate/#routes
  generate: {
    routes: [
      '/event/1',
      '/event/2',
      '/event/3',
      '/event/PG3QsPREucP6nyd3g',
      '/events/7mCgCNM29XbCkWzur',
      '/events/Kq47HJ9acDTfZ45mS',
      '/events/EA9jJ6kunYSanBF2W',
    ],
  },
  publicRuntimeConfig: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.AXIOS_BASE_URL
        : process.env.AXIOS_BASE_URL,
    cloudinary_preset: process.env.CLOUDINARY_PRESET,
    cloudinary_upload_url: process.env.CLOUDINARY_UPLOAD_URL,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~layouts/global.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/fontawesome/fontawesome.js', mode: 'client' }],

  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  //enable proxy to prevent cors errors in dev.  https://accidental.dev/avoid-api-communication-headaches-by-using-a-proxy/
  axios: {
    proxy: false,
  },
  /*   proxy: {
    '/api/': {
      target: 'http://localhost:7001/',
      pathRewrite: { '^/api/': '' },
    },
  }, */

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: '#cf5c9b',
    throttle: 0,
    continuous: true,
  },
  css: ['@/assets/css/helper-classes.css', '~layouts/global.css'],
}
