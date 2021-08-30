<template>
  <v-app>
    <v-navigation-drawer
      app
      touchless
      mini-variant
      v-model="drawer"
      class="pt-4"
    >
      <template v-slot:prepend>
        <router-link :to="pages.home.href">
          <v-avatar size="42px" class="d-block text-center mx-auto mb-6">
            <img :src="require('~/static/icon.png')" alt="logo" />
          </v-avatar>
        </router-link>
      </template>

      <v-layout column fill-height>
        <v-spacer />
        <v-list flat>
          <v-list-item link :to="pages.home.href" class="mb-2">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>{{ pages.home.icon }}</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ pages.home.title }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ pages.home.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link :to="pages.about.href" class="my-2">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>{{ pages.about.icon }}</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ pages.about.title }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ pages.about.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link :to="pages.contacts.href" class="my-2">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>{{ pages.contacts.icon }}</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ pages.contacts.title }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ pages.contacts.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer />
      </v-layout>

      <template v-slot:append>
        <v-expand-transition>
          <v-list dense flat v-if="langs">
            <v-list-item
              link
              class="my-2"
              v-for="locale in locales"
              :key="locale.code"
              @click.prevent.stop="toggleLangMode(locale.code)"
            >
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title
                    v-bind="attrs"
                    v-on="on"
                    class="text-center"
                  >
                    {{ locale.code.toUpperCase() }}
                  </v-list-item-title>
                </template>
                <span>{{ locale.name }}</span>
              </v-tooltip>
            </v-list-item>
          </v-list>
        </v-expand-transition>

        <v-list dense flat>
          <v-list-item link class="my-2" @click.prevent="langs = !langs">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-translate</v-icon>
                </v-list-item-icon>
              </template>
              <span>Translations</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>Translations</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link class="my-2" @click.prevent="toggleDarkMode">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-theme-light-dark</v-icon>
                </v-list-item-icon>
              </template>
              <span>Theme light/dark</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>Theme light/dark</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="mx-4"></v-divider>

          <v-list-item link @click="exit()">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-logout-variant</v-icon>
                </v-list-item-icon>
              </template>
              <span>Exit</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>Exit</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar app bottom fixed flat v-if="!drawer">
      <v-toolbar-title>
        <v-avatar size="32px" class="d-block text-center mx-auto">
          <img :src="require('~/static/icon.png')" alt="app-logo" />
        </v-avatar>
      </v-toolbar-title>
      <v-spacer />

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" to="/">
            <v-icon>mdi-home-outline</v-icon>
          </v-btn>
        </template>
        <span>Home</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" to="/about">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </template>
        <span>About</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" to="/help">
            <v-icon>mdi-help-circle-outline</v-icon>
          </v-btn>
        </template>
        <span>Help</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" to="/contacts">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>
        <span>Contacts</span>
      </v-tooltip>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      langs: false,

      handler: null
    };
  },
  created() {
    window.addEventListener('beforeunload', this.handler);
  },
  computed: {
    locales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      );
    },
    pages() {
      return this.$store.state.pages;
    }
  },
  methods: {
    exit: function() {
      // let routeData = this.$router.push('/about');
      window.close('/about');

      // this.$store.commit('appClose');

      //close();
      // this.$store.commit("appSignout");
      // document.getElementsByTagName("html")[0].remove();
    },

    toggleDarkMode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('theme.dark', this.$vuetify.theme.dark.toString());
    },

    toggleLangMode: function(code) {
      this.langs = false;
      this.$i18n.setLocale(code);
      localStorage.setItem('lang.code', code);
    }
  }
};
</script>
