<template>
  <v-app>
    <v-app-bar app top fixed dense flat v-if="!drawer">
      <router-link to="/">
        <v-avatar size="32px" class="d-block text-center mx-auto mr-2">
          <img :src="require('~/static/icon.png')" alt="app-logo" />
        </v-avatar>
      </router-link>

      <v-toolbar-title>Cyr To Lat</v-toolbar-title>

      <v-spacer />

      <v-btn icon @click.prevent="toggleDarkMode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click="sheet = !sheet"></v-app-bar-nav-icon>

      <v-bottom-sheet v-model="sheet" fullscreen>
        <v-sheet height="100%">
          <v-toolbar dense flat outlined>
            <v-avatar size="32px" class="d-block text-center mx-auto mr-2">
              <img :src="require('~/static/icon.png')" alt="app-logo" />
            </v-avatar>

            <v-toolbar-title>Cyr To Lat</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="sheet = !sheet">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list flat>
            <v-list-item link to="/" class="mb-2" @click="sheet = !sheet">
              <v-list-item-icon>
                <v-icon>mdi-home-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('menu.home') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/about" class="my-2" @click="sheet = !sheet">
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('menu.about') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              link
              to="/contacts"
              class="my-2"
              @click="sheet = !sheet"
            >
              <v-list-item-icon>
                <v-icon>mdi-account-circle-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('menu.contacts') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset />

            <v-list-group no-action prepend-icon="mdi-translate">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ $t('menu.translations') }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="locale in locales"
                :key="locale.code"
                @click.prevent.stop="toggleLang(locale.code)"
              >
                <v-list-item-icon>
                  <v-icon>mdi-web</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  {{ $t(`locale.${locale.name}`) }}
                </v-list-item-title>
              </v-list-item>
            </v-list-group>

            <v-list-item link class="my-2" @click.prevent="toggleDarkMode">
              <v-list-item-icon>
                <v-icon>mdi-theme-light-dark</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('menu.theme') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset />

            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('menu.exit') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-bottom-sheet>
    </v-app-bar>
    <!-- <ApplicationBar :drawer="drawer" :locales="locales" /> -->
    <NavigationDrawer :drawer.sync="drawer" :locales="locales" />
    <v-main>
      <nuxt />
    </v-main>
    <!-- <BottomNavigation :drawer="drawer" /> -->
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.$vuetify.theme.dark ? '#1a202c' : '#FFFFFF'
        }
      ]
    };
  },
  data() {
    return {
      drawer: null
    };
  },
  computed: {
    locales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      );
    }
  },
  methods: {
    toggleDarkMode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('theme.dark', this.$vuetify.theme.dark.toString());
    },

    toggleLang: function(code) {
      this.langs = false;
      this.$i18n.setLocale(code);
      localStorage.setItem('lang.code', code);
    }
  }
};
</script>

<style scoped>
.v-bottom-navigation {
  box-shadow: none !important;
}

/* .v-btn::before {
  background-color: transparent !important;
}

.v-btn--active.no-active::before {
  background-color: transparent !important;
  opacity: 0 !important;
} */
</style>
