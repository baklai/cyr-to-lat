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
        <router-link to="/">
          <v-avatar size="42px" class="d-block text-center mx-auto mb-6">
            <img :src="require('~/static/icon.png')" alt="logo" />
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

          <v-divider class="mx-4" />

          <v-list-item link>
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

    <v-app-bar app bottom fixed dense flat v-if="!drawer">
      <router-link to="/">
        <v-avatar size="32px" class="d-block text-center mx-auto">
          <img :src="require('~/static/icon.png')" alt="app-logo" />
        </v-avatar>
      </router-link>

      <v-tabs
        link
        centered
        icons-and-text
        :mobile-breakpoint="0"
        :slider-size="1"
        :show-arrows="true"
      >
        <v-tab to="/about">
          <span> {{ $t('menu.about') }} </span>
          <v-icon dense>mdi-information-outline</v-icon>
        </v-tab>
        <v-tab to="/">
          <span> {{ $t('menu.home') }} </span>
          <v-icon dense>mdi-home-outline</v-icon>
        </v-tab>
        <v-tab to="/contacts">
          <span> {{ $t('menu.contacts') }} </span>
          <v-icon dense>mdi-account-circle-outline</v-icon>
        </v-tab>
      </v-tabs>

      <v-bottom-sheet v-model="sheet">
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
        </template>

        <v-list flat>
          <v-list-item link to="/" class="mb-2">
            <v-list-item-icon>
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menu.home') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/about" class="my-2">
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menu.about') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/contacts" class="my-2">
            <v-list-item-icon>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menu.contacts') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset />

          <v-list-group no-action :value="true" prepend-icon="mdi-translate">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('menu.translations') }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              link
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
      </v-bottom-sheet>
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

      active: null
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
.v-tab {
  font-size: 0.575rem;
  font-weight: 600;
  min-width: 0px;
  padding: 0 10px;
  text-transform: none;
}

.v-tab .v-icon {
  padding: 0%;
}

.v-slide-group__next,
.v-slide-group__prev {
  align-items: center;
  display: flex;
  flex: 0 1 52px;
  justify-content: center;
  min-width: 12px !important;
}
</style>
