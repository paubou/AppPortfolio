export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Paul Bouigue',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio de Paul Bouigue — Dans l’atelier, les murs étaient noirs et leurs mains aussi ; l’encre grasse avait tâché les poteaux jusqu’au plafond et les tabliers bleus.'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@blokwise/dynamic'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  pwa: {
    meta: {
      theme_color: '#808000',
      name: 'Paul Bouigue',
      author: 'Paul Bouigue'
    },
    manifest: {
      lang: 'fr',
      name: 'Paul Bouigue Portfolio'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // fix to work with swiperjs 8 - need to run with standalone:true. That can make some troubles.
    standalone: true,
    extend (config, ctx) {
      // fix to work with swiperjs 8 add needed deps. you can get them from error when doing nuxt generate
      config.externals = [
        {
          encoding: 'encoding'
        }
      ]
    }
  }
}
