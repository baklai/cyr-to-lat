import colors from 'vuetify/es5/util/colors';

import pkg from './package.json';

export default {
  telemetry: false,

  ssr: false,
  target: 'static',

  cli: {
    badgeMessages: [`Application: ${pkg.name.toUpperCase()} v${pkg.version}`]
  },

  router: {
    base: `/${pkg.name}/`,
    prefetchLinks: true
  },

  head: {
    titleTemplate: `${pkg.config.title} • %s`,
    title: pkg.config.title_description,
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description || pkg.config.title_description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/${pkg.name}/favicon.ico`
      }
    ]
  },

  loading: { color: '#0d47a1' },

  css: ['~/assets/variables.css'],

  plugins: [
    { src: '~/plugins/theme', mode: 'client' },
    { src: '~/plugins/language', mode: 'client' },
    { src: '~/plugins/clipboard', mode: 'client' }
  ],

  buildModules: ['@nuxtjs/vuetify'],

  modules: ['@nuxtjs/pwa', '@nuxtjs/meta', '@nuxtjs/i18n', '@nuxtjs/toast'],

  components: true,

  pwa: {
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      favicon: true,
      name: pkg.config.title_description,
      author: pkg.author.name,
      description: pkg.description,
      theme_color: '#1a202c',
      lang: 'ru',
      ogType: 'website',
      ogHost: pkg.config.host,
      ogImage: {
        path: `/${pkg.name}/icon.png`,
        width: '50',
        height: '50',
        type: 'image/png'
      }
    },
    manifest: {
      name: pkg.config.title_description,
      short_name: pkg.config.title,
      description: pkg.description || pkg.config.title_description,
      lang: 'ru',
      display: 'standalone',
      background_color: '#1a202c',
      start_url: `/${pkg.name}/?standalone=true`,
      useWebmanifestExtension: false
    }
  },

  i18n: {
    lazy: true,
    langDir: 'lang/',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js',
        name: 'Russia'
      },
      {
        code: 'ua',
        iso: 'ua-UA',
        file: 'ua-UA.js',
        name: 'Ukraine'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  toast: {
    type: 'default',
    theme: 'toasted-primary',
    position: 'top-center',
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
    defaultAssets: {
      font: {
        family: 'Marmelad'
      }
    },
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
