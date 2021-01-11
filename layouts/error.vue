<template>
  <v-layout align-center>
    <v-flex>
      <v-card
        dark
        max-width="500"
        class="mx-auto"
        color="transparent"
        elevation="0"
      >
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="text-center">
                <h1 v-if="error.statusCode === 404">
                  {{ pageNotFound }}
                </h1>
                <h1 v-else>
                  {{ otherError }}
                </h1>
                <NuxtLink to="/">
                  {{ appName }}
                </NuxtLink>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: "default",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  computed: {
    appName() {
      return this.$store.state.appName;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
