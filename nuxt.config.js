
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  ssr: true,

  server: {
    port: 3000, // default: 3000
    // host: '10.10.19.95', // default: localhost,
    host: 'localhost', // default: localhost,
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  },


  head: {
    titleTemplate: '%s - student_adviser',
    title: 'student_adviser',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/stylesheets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/index.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    [
      'nuxt-i18n',
      {
        strategy: 'no_prefix',
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true, // recommended
        },
        locales: [
          {
            name: 'TM',
            code: 'tm',
            file: 'tm.js',
          },
          {
          	name: 'EN',
          	code: 'en',
          	file: 'en.js',
          },
          // {
          //   name: 'Русский',
          //   code: 'ru',
          //   file: 'ru.js',
          // },
        ],
      },
    ],

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
