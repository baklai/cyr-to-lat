<template>
  <v-banner
    app
    dark
    sticky
    v-model="deferredPrompt"
    color="indigo"
    elevation="3"
    class="text-left"
    icon="mdi-alert-circle"
  >
    Установите наше бесплатное приложение. Оно не займет много места на вашем
    устройстве и сможет работать без сети!
    <template v-slot:actions>
      <v-btn text @click="dismiss">Отклонить</v-btn>
      <v-btn text @click="install">Установить</v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  data() {
    return {
      deferredPrompt: null,
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", function(event) {
      event.preventDefault();
      // if (event) {
      this.deferredPrompt = true;
      window.promptEvent = event;
      // }
    });
  },
  methods: {
    dismiss() {
      this.deferredPrompt = null;
    },
    install() {
      window.promptEvent.prompt();
      this.deferredPrompt = null;
      window.promptEvent.userChoice.then(function(choiceResult) {
        if (choiceResult.outcome === "accepted") {
          console.info("mm User accepted the A2HS prompt");
        } else {
          console.info("mm User dismissed the A2HS prompt");
        }
        window.promptEvent = null;
      });
    },
  },
};
</script>
