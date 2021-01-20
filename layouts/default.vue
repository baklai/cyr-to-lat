<template>
  <v-app>
    <app-banner />

    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list>
        <v-list-item two-line class="px-2">
          <v-list-item-avatar tile>
            <img src="@/static/icon.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Converter CyrToLat</v-list-item-title>
            <v-list-item-subtitle>from {{ author }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :href="item.href"
          target="_blank"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link @click="info()">
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>О сервисе</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn tile block>
            <v-icon left>mdi-exit-to-app</v-icon> Выход
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app clipped-left flat class="mx-auto" max-width="500">
      <v-toolbar-title class="d-inline">
        <v-avatar left tile size="32">
          <img src="@/static/icon.svg" alt="logo" />
        </v-avatar>
        <p class="d-inline">Cyt</p>
        <p class="d-inline">To</p>
        <p class="d-inline">Lat</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main max-width="500">
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer tile padless class="mx-auto" color="transparent" max-width="500">
      <v-card flat tile class="text-center" color="transparent">
        <v-card-text>
          <v-btn
            v-for="item in links"
            :key="item.icon"
            :href="item.href"
            class="mx-4"
            target="_blank"
            icon
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="caption pt-0">
          Данный онлайн сервис разработан специально для перевода строки текста
          из русской раскладки в английскую.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          Copyright &copy; {{ new Date().getFullYear() }} {{ copyright }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import AppBanner from "@/components/Banner";

export default {
  components: {
    AppBanner,
  },
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  computed: {
    appName() {
      return this.$store.state.appName;
    },
    links() {
      return this.$store.state.links;
    },
    copyright() {
      return this.$store.state.copyright;
    },
    author() {
      return this.$store.state.author;
    },
  },
  methods: {
    info: function() {
      this.$router.push(`/about`);
    },

    exit: function() {
      this.$store.commit("appSignout");
    },

    toggle_dark_mode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
