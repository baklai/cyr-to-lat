import colors from "vuetify/es5/util/colors";

export default {
  ssr: process.env.GH_PAGES ? false : true,
  target: process.env.GH_PAGES ? "static" : "server",

  router: {
    base: process.env.GH_PAGES ? `/${process.env.npm_package_name}/` : "/",
  },

  head: {
    title: "Cyr To Lat",
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: process.env.GH_PAGES
          ? `/${process.env.npm_package_name}/favicon.ico`
          : "/favicon.ico",
      },
    ],
  },

  loading: { color: "#fff" },

  css: [],

  plugins: [
    { src: "~/plugins/clipboard.js", mode: "client" },
    { src: "~/plugins/toasted.js", mode: "client" },
  ],

  components: true,

  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/pwa"],

  modules: ["@nuxtjs/meta"],

  pwa: {
    meta: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: "black",
      favicon: true,
      name: "Converter Cyrillic To Latin",
      author: process.env.npm_package_author_name,
      description: process.env.npm_package_description,
      theme_color: "#000",
      lang: "ru",
      ogType: "website",
      ogHost: "baklai.github.io",
      ogImage: {
        path: `/${process.env.npm_package_name}/icon.png`,
        width: "50",
        height: "50",
        type: "image/png",
      },
    },
    manifest: {
      name: "Converter Cyrillic To Latin",
      short_name: "Cyr To Lat",
      description: process.env.npm_package_description,
      lang: "ru",
      display: "standalone",
      background_color: "#000",
    },
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    icons: {
      iconfont: "mdi",
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
};
