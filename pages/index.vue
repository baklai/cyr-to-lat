<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" class="mx-10">
        <h1 class="font-weight-light display-1">
          <strong>Converter CyrToLat</strong>
        </h1>
        <h3 class="subtitle-2 my-2">
          Сервис разработан специально для перевода строки текста из русской
          раскладки в английскую.
        </h3>
        <v-row>
          <v-col cols="12" class="d-flex align-center">
            <!-- prepend-inner-icon="mdi-lock-outline" -->
            <v-text-field
              filled
              rounded
              dense
              placeholder="Введите пароль для перевода"
              name="password"
              color="blue darken-1"
              :type="showeye ? 'text' : 'password'"
              :append-icon="showeye ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              class="my-4 mx-2 input-group--focused"
              :counter="21"
              v-model.trim="valueInput"
              @click:append="showeye = !showeye"
              v-disabled-icon-focus
              @keypress.enter="convert()"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-container fluid class="pa-0">
              <v-btn depressed color="primary"> Primary </v-btn>
            </v-container>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" class="d-none d-md-flex">
        <v-img
          contain
          :src="require(`~/assets/img/bg-app.svg`)"
          class="d-block ml-auto mr-auto"
        />
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-flex>
      <v-card max-width="500" class="mx-auto" color="transparent" elevation="0">
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-img
                  max-height="150"
                  max-width="100%"
                  :src="$vuetify.theme.dark ? bannerDark : banner"
                ></v-img>
                <v-text-field
                  :type="show ? 'text' : 'password'"
                  placeholder="введите текст для перевода"
                  class="my-4 mx-2 input-group--focused centered-input"
                  @click:append="show = !show"
                  v-model="valueInput"
                  filled
                  rounded
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-container fluid class="pa-0">
                  <div class="text-center">
                    <v-btn class="mx-2" fab small @click="show = !show">
                      <v-icon>
                        {{ show ? "mdi-eye" : "mdi-eye-off" }}
                      </v-icon>
                    </v-btn>

                    <v-btn class="mx-4" fab @click="convert()">
                      <v-icon> mdi-cached </v-icon>
                    </v-btn>

                    <v-btn class="mx-2" fab small @click="exit()">
                      <v-icon> mdi-exit-to-app </v-icon>
                    </v-btn>
                  </div>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex> -->
</template>

<script>
export default {
  layout: "default",
  data: () => ({
    show: false,
    showeye: false,
    valueInput: null,
    banner: require("@/assets/img/banner.png"),
    bannerDark: require("@/assets/img/banner-dark.png"),
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
  },
};
</script>

<style>
.centered-input input {
  text-align: center !important;
}
</style>
