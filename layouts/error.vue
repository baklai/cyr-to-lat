<template>
  <v-container fill-height fluid>
    <AppSidebar />
    <v-row align="center" justify="center">
      <v-col cols="12" align="center">
        <v-img
          contain
          width="300"
          :src="
            error.statusCode === 404
              ? require('~/assets/img/404.svg')
              : require('~/assets/img/404.svg')
          "
          class="d-block ml-auto mr-auto"
        />
        <h1 class="text-center">
          {{ error.statusCode === 404 ? pageNotFound : otherError }}
        </h1>
        <v-btn rounded outlined class="mt-5" to="/"> TAKE ME BACK HOME </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: 'Oops! That page can’t be found.',
      otherError: 'Oops! Internal Server Error.'
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
