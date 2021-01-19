<template>
  <v-app dark>
    <app-banner />

    <v-navigation-drawer v-model="drawer" app dark absolute temporary>
      <v-list dark class="grey darken-4">
        <v-list-item two-line class="px-2">
          <v-list-item-avatar tile>
            <img src="@/static/icon.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ appName }}</v-list-item-title>
            <v-list-item-subtitle>from {{ author }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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

    <v-app-bar app clipped-left dense flat dark class="mx-auto">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> {{ appName }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list class="grey darken-4">
          <v-list-item nuxt to="/">
            <v-list-item-title>Конвертер</v-list-item-title>
          </v-list-item>
          <v-list-item nuxt to="/about">
            <v-list-item-title>О Сервисе</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="exit()">
            <v-list-item-title>Выход</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer tile padless class="mx-auto" color="transparent">
      <v-card flat tile class="text-center" color="transparent">
        <v-card-text>
          <v-btn
            v-for="item in links"
            :key="item.icon"
            :href="item.href"
            class="mx-4 white--text"
            target="_blank"
            icon
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="caption white--text pt-0">
          Данный онлайн сервис разработан специально для перевода строки текста
          из русской раскладки в английскую.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
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
  },
};
</script>
