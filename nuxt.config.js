require('dotenv').config()
export default {
  render: {
    csp: true
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    baseURLMedia: process.env.BASE_URL_MEDIA,
    secretKey: process.env.SECRET_KEY,
    flavor: process.env.FLAVOR,
  },
  productionSourceMap: true,
  head: {
    title: 'KCPI',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/bootstrap/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/fontawesome/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/animate-css/animate.css',
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/slick/slick.css',
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/slick/slick-theme.css',
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/colorbox/colorbox.css',
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/style.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css',
      },
    ],
    script: [
      { src: '/assets/plugins/jQuery/jquery.min.js' },
      { src: '/assets/plugins/bootstrap/bootstrap.min.js' },
      { src: '/assets/plugins/slick/slick.min.js' },
      { src: '/assets/plugins/slick/slick-animation.min.js' },
      { src: '/assets/plugins/colorbox/jquery.colorbox.js' },
      { src: '/assets/plugins/shuffle/shuffle.min.js' },
      { src: '/assets/js/script.js' },
      {
        src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
      },
      {
        src: 'https://static.elfsight.com/platform/platform.js',
        defer: true,
      }

    ],
  },

  loading: '~/components/shared/LoadingBar.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/decrypt.js', '~/plugins/aos.js',],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-helmet'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true,
    credentials: false,
  },

  helmet: {
    // frameguard: true,
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
}
