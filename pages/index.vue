<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="space-around">
      <v-col cols="10" xl="5" lg="5" md="5" sm="6">
        <v-img
          contain
          :src="require('~/assets/img/home.svg')"
          class="d-block ml-auto mr-auto"
        />
      </v-col>

      <v-col cols="10" xl="4" lg="4" md="5" sm="10">
        <h1 class="font-weight-light display-1">
          <strong> Password converter </strong>
        </h1>
        <h3 class="subtitle-2 my-2">
          Сервис для перевода строки текста из русской раскладки в английскую.
        </h3>

        <v-text-field
          filled
          rounded
          clearable
          persistent-placeholder
          placeholder="Введите пароль для перевода"
          name="password"
          color="blue darken-1"
          :type="showeye ? 'text' : 'password'"
          :append-icon="showeye ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          v-model.trim="valueInput"
          @click:append="showeye = !showeye"
          @keypress.enter="convert()"
          @click="showeye = false"
          class="my-5"
        />
        <v-row>
          <v-col cols="12">
            <v-btn color="primary" @click="convert()"> Convert password </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showeye: true,
      valueInput: null
    };
  },

  methods: {
    autoKeyboardLang: function (str) {
      const cyr = [
        'й',
        'ц',
        'у',
        'к',
        'е',
        'н',
        'г',
        'ш',
        'щ',
        'з',
        'х',
        'ъ',
        'ф',
        'ы',
        'в',
        'а',
        'п',
        'р',
        'о',
        'л',
        'д',
        'ж',
        'э',
        'я',
        'ч',
        'с',
        'м',
        'и',
        'т',
        'ь',
        'б',
        'ю',
        'ї',
        'і',
        'є'
      ];
      const en = [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        '\\[',
        '\\]',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        "'",
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        ',',
        '\\.',
        '\\]',
        's',
        "'"
      ];
      for (let i = 0; i < cyr.length; i++) {
        const reg = new RegExp(cyr[i], 'mig');
        str = str.replace(reg, function (a) {
          return a == a.toLowerCase() ? en[i] : en[i].toUpperCase();
        });
      }
      return str;
    },

    convert: function () {
      if (this.valueInput) {
        let doubles = this.valueInput
          .split('')
          .map((letter) => {
            return this.autoKeyboardLang(letter);
          })
          .join('');

        try {
          this.$clipboard(doubles);
          this.valueInput = null;
          this.$toasted.show('Текст скопирован в буфер обмена', {
            position: 'top-center',
            icon: 'information',
            type: 'success',
            duration: 3000,
            action: {
              icon: 'close',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            }
          });
        } catch (err) {
          console.error('Could not copy text: ', err);
        }
      } else {
        this.$toasted.show('Введите текст для перевода!', {
          position: 'top-center',
          icon: 'information',
          type: 'error',
          duration: 3000,
          action: {
            icon: 'close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
      }
    }
  }
};
</script>
