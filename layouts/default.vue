<template>
  <v-app>
    <v-navigation-drawer
      app
      mini-variant
      touchless
      v-model="drawer"
      class="pt-4"
    >
      <template v-slot:prepend>
        <v-avatar size="42px" class="d-block text-center mx-auto mb-6">
          <img :src="require('~/static/icon.png')" alt="app-logo" />
        </v-avatar>
      </template>

      <v-layout column fill-height>
        <v-spacer />
        <v-list flat>
          <v-list-item link to="/" class="mb-2">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-home-outline</v-icon>
                </v-list-item-icon>
              </template>
              <span>Home</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link class="my-2" to="/about">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-information-outline</v-icon>
                </v-list-item-icon>
              </template>
              <span>About</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link class="my-2" to="/help">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-help-circle-outline</v-icon>
                </v-list-item-icon>
              </template>
              <span>Help</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link class="my-2" to="/contacts">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-account-circle-outline</v-icon>
                </v-list-item-icon>
              </template>
              <span>Contacts</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>Contacts</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer />
      </v-layout>

      <template v-slot:append>
        <v-list dense flat>
          <v-menu top offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item link class="my-2" v-bind="attrs" v-on="on">
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item-icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-translate</v-icon>
                    </v-list-item-icon>
                  </template>
                  <span>Lang</span>
                </v-tooltip>
                <v-list-item-content>
                  <v-list-item-title>Lang</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list>
              <v-list-item
                v-for="locale in showLocales"
                :key="locale.code"
                @click.prevent.stop="$i18n.setLocale(locale.code)"
              >
                <v-list-item-title>{{ locale.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-list-item link class="my-2" @click.prevent="toggle_dark_mode">
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
      <!-- {{ $t('home') }} -->

      <nuxt />
    </v-main>

    <!-- <v-footer tile padless class="mx-auto" color="transparent">
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
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    };
  },
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      );
    },
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
    }
  },
  methods: {
    exit: function () {
      // this.$store.commit("appSignout");
      // document.getElementsByTagName("html")[0].remove();
    },

    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('theme.dark', this.$vuetify.theme.dark.toString());
    }
  }
};
</script>
