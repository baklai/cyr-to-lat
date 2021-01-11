import colors from "vuetify/es5/util/colors";

export default {
  ssr: true,

  head: {
    title: "Cyr To Lat",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-touch-fullscreen", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  loading: { color: "#fff" },

  css: [],

  plugins: [
    { src: "~/plugins/clipboard.js", mode: "client" },
    { src: "~/plugins/toasted.js", mode: "client" },
  ],

  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/pwa"],

  pwa: {
    meta: {
      charset: "utf-8",
      title: "Cyr To Lat",
      author: "Dmitrii Baklai",
    },
    manifest: {
      name: "Converter Cyrillic To Latin",
      short_name: "Cyr To Lat",
      description: "Converter Cyrillic To Latin",
      lang: "en",
      start_url: "/",
      display: "standalone",
      theme_color: "#000",
      background_color: "#000",
      orientation: "portrait",
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

  env: {
    appName: "Cyr To Lat",
  },

  build: {},
};
