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
            Hello & Welcome
          </h2>
          <h1 class="font-weight-light display-1 my-5">
            <strong>I Am Dmitrii Baklai</strong>
          </h1>
          <h4 class="font-weight-light my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            tempore vero ut incidunt. Facere ea explicabo error incidunt ut at
            illo ipsum nemo necessitatibus aperiam nobis magni, molestiae
            exercitationem quas.
          </h4>
          <v-card-text>
            <v-btn class="mx-4 " icon>
              <v-icon size="24px">
                {{ social.facebook.icon }}
              </v-icon>
            </v-btn>
            <v-btn class="mx-4 " icon>
              <v-icon size="24px">
                {{ social.github.icon }}
              </v-icon>
            </v-btn>
            <v-btn class="mx-4 " icon>
              <v-icon size="24px">
                {{ social.linkedin.icon }}
              </v-icon>
            </v-btn>
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
      title: this.$i18n.t('about.title')
    };
  },
  data() {
    return {};
  },
  computed: {
    social() {
      return this.$store.state.social;
    }
  }
};
</script>
