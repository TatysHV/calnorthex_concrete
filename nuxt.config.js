import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Calnorthex Concrete',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600&display=swap'}
    ]
  },

  /* STATIC HOSTING
  Statically render your Nuxt.js application and get all of the benefits of a universal app without a server. 
  The nuxt generate command will generate a static version of your website. It will generate HTML for every one 
  of your routes and put it inside of its own file in the dist/ directory. This improves performance as well
  as SEO and better offline support.
  */
  mode: 'spa',
  target: 'static',

  //******** SRC DIR FOR FIREBASE DEPLOY ***********/
  srcDir: 'src',
  buildDir: 'functions/.nuxt',
  /************************************************/

  build: {
    extractCSS: true, //Setting for firebase deploy
    babel: {
      presets({ envName }) {
        const envTargets = {
          loose: true
        }
        return [
          [ "@nuxt/babel-preset-app", { targets: envTargets[envName]}]
        ]
      }
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.sass'
  ],

  styleResources: {
    sass: ['./assets/styles/*.sass']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.sass'],
    treeShake: false, // Fix build problem of SassError: Expected tabs.
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
