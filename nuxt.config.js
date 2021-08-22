import colors from 'vuetify/es5/util/colors';

const HOST = 'https://baklai.github.io';

/// https://isometric.online/

export default {
  telemetry: false,

  ssr: false,

  target: 'static',

  cli: {
    badgeMessages: [
      `Application: ${process.env.npm_package_name.toUpperCase()} v${
        process.env.npm_package_version
      }`
    ]
  },

  router: {
    base: `/${process.env.npm_package_name}/`,
    prefetchLinks: false
  },

  head: {
    titleTemplate: `%s • ${process.env.npm_package_author_name}`,
    title: 'Cyr To Lat',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/${process.env.npm_package_name}/favicon.ico`
      }
    ]
  },

  loading: { color: '#2196f3' },

  css: ['@mdi/font/css/materialdesignicons.min.css', '~/assets/variables.css'],

  plugins: [
    { src: '~/plugins/themeMode', mode: 'client' },
    { src: '~/plugins/clipboard.js', mode: 'client' }
  ],

  components: true,

  buildModules: ['@nuxtjs/vuetify'],

  modules: ['@nuxtjs/pwa', '@nuxtjs/meta', '@nuxtjs/toast'],

  pwa: {
    icon: false,
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
      favicon: true,
      name: 'Converter Cyrillic To Latin',
      author: process.env.npm_package_author_name,
      description: process.env.npm_package_description,
      theme_color: '#fff',
      lang: 'ru',
      ogType: 'website',
      ogHost: HOST,
      ogImage: {
        path: `/${process.env.npm_package_name}/icon.png`,
        width: '50',
        height: '50',
        type: 'image/png'
      }
    },
    manifest: {
      name: 'Converter Cyrillic To Latin',
      short_name: 'Cyr To Lat',
      description: process.env.npm_package_description,
      lang: 'ru',
      display: 'standalone',
      background_color: '#fff',
      start_url: `/${process.env.npm_package_name}/`,
      useWebmanifestExtension: false
    }
  },

  toast: {
    type: 'default',
    theme: 'toasted-primary',
    position: 'bottom-right',
    icon: 'alert-circle-outline',
    duration: 1000,
    iconPack: 'mdi',
    register: [
      {
        name: 'errorDefault',
        message: 'Oops... Something went wrong',
        options: {
          type: 'error',
          duration: 2000
        }
      }
    ]
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    icons: {
      iconfont: 'mdi'
    },
    theme: {
      options: {
        customProperties: true
      },
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
        },
        light: {}
      }
    }
  },

  workbox: {
    cacheAssets: false,
    offline: false
  },

  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
};
