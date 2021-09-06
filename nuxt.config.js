import colors from 'vuetify/es5/util/colors';
import { name, version, description, author, config } from './package.json';

export default {
  telemetry: false,

  ssr: false,

  target: 'static',

  cli: {
    badgeMessages: [`Application: ${name.toUpperCase()} v${version}`]
  },

  router: {
    base: `/${name}/`
  },

  head: {
    titleTemplate: `${config.app.short_name} • %s`,
    title: config.app.name,
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: description || config.app.name
      },
      {
        hid: 'permissions-policy',
        name: 'permissions-policy',
        content: 'interest-cohort=()'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/${name}/favicon.ico`
      }
    ]
  },

  loading: false,

  css: ['~/assets/variables.css'],

  plugins: [
    { src: '~/plugins/theme', mode: 'client' },
    { src: '~/plugins/language', mode: 'client' },
    { src: '~/plugins/clipboard', mode: 'client' }
  ],

  buildModules: ['@nuxtjs/vuetify'],

  modules: ['@nuxtjs/pwa', '@nuxtjs/meta', '@nuxtjs/i18n', '@nuxtjs/toast'],

  pwa: {
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      name: config.app.name,
      author: author.name,
      description: description,
      theme_color: '#ffffff',
      lang: 'en',
      ogHost: config.host,
      ogImage: {
        path: `/${name}/icon.png`,
        width: '50',
        height: '50',
        type: 'image/png'
      },
      ogUrl: `${config.host}/${name}`,
      nativeUI: true
    },
    manifest: {
      name: config.app.name,
      short_name: config.app.short_name,
      description: description || config.app.name,
      lang: 'en',
      display: 'standalone',
      background_color: '#ffffff',
      start_url: `/${name}/?standalone=true`,
      orientation: 'portrait'
    }
  },

  i18n: {
    lazy: false,
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
    publicPath: 'app/',
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
};
