<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="space-around">
      <v-col cols="10" xl="5" lg="5" md="5" sm="6">
        <v-img
          contain
          width="400"
          :src="require('~/assets/img/contacts.svg')"
          class="d-block ml-auto mr-auto"
        />
      </v-col>
      <v-col cols="10" xl="4" lg="4" md="5" sm="10">
        <v-card flat tile class="text-center">
          <h2 class="font-weight-light">
            {{ $t('contacts.caption') }}
          </h2>
          <h1 class="font-weight-light display-1 my-5">
            <strong>{{ $t('contacts.author') }}</strong>
          </h1>
          <h4 class="font-weight-light my-2">
            {{ $t('contacts.comment') }}
          </h4>

          <v-card-text>
            <v-btn
              icon
              class="mx-4"
              target="_blank"
              :href="social.facebook.href"
            >
              <v-icon size="24px">
                {{ social.facebook.icon }}
              </v-icon>
            </v-btn>
            <v-btn icon class="mx-4" target="_blank" :href="social.github.href">
              <v-icon size="24px">
                {{ social.github.icon }}
              </v-icon>
            </v-btn>
            <v-btn
              icon
              class="mx-4"
              target="_blank"
              :href="social.linkedin.href"
            >
              <v-icon size="24px">
                {{ social.linkedin.icon }}
              </v-icon>
            </v-btn>
            <br class="my-5" />
            <span>{{ copyright }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$i18n.t('contacts.title')
    };
  },
  data() {
    return {};
  },
  computed: {
    social() {
      return this.$store.state.social;
    },
    copyright() {
      return this.$store.state.copyright;
    }
  }
};
</script>
