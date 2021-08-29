<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="space-around">
      <v-col cols="10" xl="5" lg="5" md="5" sm="6">
        <v-img
          contain
          width="600"
          :src="require('~/assets/img/about.svg')"
          class="d-block ml-auto mr-auto"
        />
      </v-col>
      <v-col cols="10" xl="4" lg="4" md="5" sm="10">
        <h1 class="font-weight-light display-1">
          <strong>Contacts</strong>
        </h1>
        <h3 class="subtitle-2 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          tempore vero ut incidunt. Facere ea explicabo error incidunt ut at
          illo ipsum nemo necessitatibus aperiam nobis magni, molestiae
          exercitationem quas.
        </h3>
        <v-row>
          <v-col cols="12">
            <v-btn rounded outlined class="mt-5" to="/">
              TAKE ME BACK HOME
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$i18n.t('about.title')
    };
  },
  data() {
    return {};
  }
};
</script>
