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
              <v-col cols="12">
                <v-img max-height="150" max-width="100%" :src="banner"></v-img>

                <v-text-field
                  :type="show ? 'text' : 'password'"
                  placeholder="введите текст для перевода"
                  class="my-4 mx-2 input-group--focused centered-input"
                  @click:append="show = !show"
                  v-model="valueInput"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-container fluid class="pa-0">
                  <div class="text-center">
                    <v-btn class="mx-2" fab dark small @click="show = !show">
                      <v-icon dark>
                        {{ show ? "mdi-eye" : "mdi-eye-off" }}
                      </v-icon>
                    </v-btn>

                    <v-btn class="mx-4" fab dark @click="convert()">
                      <v-icon dark> mdi-cached </v-icon>
                    </v-btn>

                    <v-btn class="mx-2" fab dark small @click="exit()">
                      <v-icon dark> mdi-exit-to-app </v-icon>
                    </v-btn>
                  </div>
                </v-container>
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
  data: () => ({
    show: false,
    valueInput: null,
    banner: require("@/assets/img/banner.png"),
  }),
  methods: {
    autoKeyboardLang: function (str) {
      const cyr = [
        "й",
        "ц",
        "у",
        "к",
        "е",
        "н",
        "г",
        "ш",
        "щ",
        "з",
        "х",
        "ъ",
        "ф",
        "ы",
        "в",
        "а",
        "п",
        "р",
        "о",
        "л",
        "д",
        "ж",
        "э",
        "я",
        "ч",
        "с",
        "м",
        "и",
        "т",
        "ь",
        "б",
        "ю",
        "ї",
        "і",
        "є",
      ];
      const en = [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "\\[",
        "\\]",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        "\\.",
        "\\]",
        "s",
        "'",
      ];
      for (let i = 0; i < cyr.length; i++) {
        const reg = new RegExp(cyr[i], "mig");
        str = str.replace(reg, function (a) {
          return a == a.toLowerCase() ? en[i] : en[i].toUpperCase();
        });
      }
      return str;
    },

    convert: function () {
      if (this.valueInput) {
        let doubles = this.valueInput
          .split("")
          .map((letter) => {
            return this.autoKeyboardLang(letter);
          })
          .join("");

        try {
          this.$clipboard(doubles);
          this.valueInput = null;
          this.$toasted.show("Текст скопирован в буфер обмена", {
            position: "top-center",
            icon: "information",
            type: "success",
            duration: 3000,
            action: {
              icon: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
          });
        } catch (err) {
          console.error("Could not copy text: ", err);
        }
      } else {
        this.$toasted.show("Введите текст для перевода!", {
          position: "top-center",
          icon: "information",
          type: "error",
          duration: 3000,
          action: {
            icon: "close",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        });
      }
    },

    exit: function () {
      this.$store.commit("appSignout");
    },
  },
};
</script>

<style>
.centered-input input {
  text-align: center !important;
}
</style>
