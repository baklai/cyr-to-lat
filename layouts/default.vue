<template>
  <v-app>
    <!-- <ApplicationBar :drawer="drawer" :locales="locales" /> -->
    <NavigationDrawer :drawer="drawer" :locales="locales" />
    <v-main>
      <nuxt />
    </v-main>
    <!-- <BottomNavigation :drawer="drawer" /> -->
  </v-app>
</template>

<script>
export default {
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
