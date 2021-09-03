<template>
  <v-bottom-navigation app fixed height="42" v-if="!drawer">
    <v-btn to="/about">
      <span> {{ $t('menu.about') }} </span>
      <v-icon dense>mdi-information-outline</v-icon>
    </v-btn>
    <v-btn to="/">
      <span> {{ $t('menu.home') }} </span>
      <v-icon dense>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn to="/contacts">
      <span> {{ $t('menu.contacts') }} </span>
      <v-icon dense>mdi-account-circle-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  }
};
</script>
