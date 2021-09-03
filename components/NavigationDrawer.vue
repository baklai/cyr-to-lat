<template>
  <v-navigation-drawer app touchless mini-variant v-model="drawer" class="pt-4">
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
                <v-list-item-title v-bind="attrs" v-on="on" class="text-center">
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
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    locales: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      langs: false
    };
  }
};
</script>
