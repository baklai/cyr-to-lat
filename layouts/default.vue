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

      <v-btn icon :ripple="false" @click.prevent="toggleDarkMode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-app-bar-nav-icon
        :ripple="false"
        @click="sheet = !sheet"
      ></v-app-bar-nav-icon>

      <v-bottom-sheet v-model="sheet" fullscreen>
        <v-sheet height="100%">
          <v-toolbar dense flat outlined>
            <v-avatar size="32px" class="d-block text-center mx-auto mr-2">
              <img :src="require('~/static/icon.png')" alt="app-logo" />
            </v-avatar>

            <v-toolbar-title>Cyr To Lat</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon :ripple="false" @click="sheet = !sheet">
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

            <v-list-item link @click="toggleExit()">
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
    <v-navigation-drawer
      app
      touchless
      floating
      mini-variant-width="72"
      mini-variant
      v-model="drawer"
      class="pt-4"
    >
      <template v-slot:prepend>
        <router-link to="/">
          <v-avatar size="42px" class="d-block text-center mx-auto mb-6">
            <img :src="require('~/static/icon.png')" />
          </v-avatar>
        </router-link>
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
              <span>{{ $t('menu.home') }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menu.home') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/about" class="my-2">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-information-outline</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ $t('menu.about') }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menu.about') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/contacts" class="my-2">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-account-circle-outline</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ $t('menu.contacts') }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menu.contacts') }}</v-list-item-title>
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
              @click.prevent.stop="toggleLang(locale.code)"
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
                <span>{{ $t(`locale.${locale.name}`) }}</span>
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
              <span>{{ $t('menu.translations') }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t('menu.translations') }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link class="my-2" @click.prevent="toggleDarkMode">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-theme-light-dark</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ $t('menu.theme') }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menu.theme') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mx-6" />
          <v-list-item link @click="toggleExit()">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-logout-variant</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ $t('menu.exit') }}</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menu.exit') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <v-bottom-navigation app fixed height="42" v-if="!drawer">
      <v-btn :ripple="false" to="/about">
        <span> {{ $t('menu.about') }} </span>
        <v-icon dense>mdi-information-outline</v-icon>
      </v-btn>
      <v-btn :ripple="false" to="/">
        <span> {{ $t('menu.home') }} </span>
        <v-icon dense>mdi-home-outline</v-icon>
      </v-btn>
      <v-btn :ripple="false" to="/contacts">
        <span> {{ $t('menu.contacts') }} </span>
        <v-icon dense>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
      drawer: null,
      sheet: false,
      langs: false
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
    },

    toggleExit: function() {
      this.$store.commit('appSignout');
    }
  }
};
</script>

<style scoped>
.v-bottom-navigation {
  box-shadow: none !important;
}
.v-btn::before {
  background-color: transparent !important;
}
</style>
