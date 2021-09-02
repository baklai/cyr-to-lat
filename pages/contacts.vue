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
        <h1 class="font-weight-light display-1">
          <strong>Contacts</strong>
        </h1>

        <h1 class="font-weight-light display-1">
          <strong>Follow us on Facebook</strong>
        </h1>
        <h3 class="subtitle-2 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          tempore vero ut incidunt. Facere ea explicabo error incidunt ut at
          illo ipsum nemo necessitatibus aperiam nobis magni, molestiae
          exercitationem quas.
        </h3>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <!-- social: {
    facebook: {
      title: 'Facebook',
      icon: 'mdi-facebook',
      href: pkg.config.social.facebook
    },
    github: {
      title: 'Github',
      icon: 'mdi-github',
      href: pkg.config.social.github
    },
    linkedin: {
      title: 'Linkedin',
      icon: 'mdi-linkedin',
      href: pkg.config.social.linkedin
    }
  } -->

          <v-card-text>
            <v-btn class="mx-4 white--text" icon>
              <v-icon size="24px">
                {{ social.facebook.icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>

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
  },
  computed: {
    social() {
      return this.$store.state.social;
    }
  }
};
</script>
