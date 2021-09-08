<template>
  <v-container fill-height fluid class="pa-3">
    <v-row align="center" justify="space-around">
      <v-col cols="10" xl="4" lg="4" md="5" sm="8">
        <v-card flat tile>
          <h1 class="font-weight-light display-1 my-10">
            <strong> {{ $t('about.caption') }} </strong>
          </h1>
          <h4
            class="font-weight-light my-2 text-justify"
            style="white-space: pre-line;"
          >
            {{ $t('about.comment') }}
          </h4>
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" xl="5" lg="5" md="5" sm="8">
        <v-img
          contain
          width="800"
          :src="require('~/assets/img/about.svg')"
          class="d-block ml-auto mr-auto"
        />
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
