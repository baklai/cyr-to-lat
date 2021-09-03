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
          <strong> {{ $t('homepage.input_title') }} </strong>
        </h1>
        <h3 class="subtitle-2 my-2">
          {{ $t('homepage.input_description') }}
        </h3>

        <v-text-field
          filled
          rounded
          clearable
          persistent-placeholder
          :placeholder="$t('homepage.input_placeholder')"
          name="password"
          color="blue darken-1"
          :type="showeye ? 'text' : 'password'"
          :append-icon="showeye ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          :rules="cyrRules"
          v-model.trim="cyrInput"
          @click:append="showeye = !showeye"
          @keypress.enter="convert()"
          @click="showeye = false"
          class="my-5"
        />
        <v-row>
          <v-col cols="12">
            <v-btn depressed rounded outlined @click="convert()">
              {{ $t('homepage.input_btn') }}
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
      title: this.$i18n.t('homepage.title')
    };
  },

  data() {
    return {
      showeye: true,
      cyrInput: null,

      cyrRules: [
        v => !!v || 'Password is required',
        v => this.cyrstr.test(v) || 'Examples: а-яА-ЯёЁ0-9'
      ]
    };
  },

  computed: {
    cyrstr() {
      return this.$store.state.regex.cyrstr;
    }
  },

  methods: {
    autoKeyboardLang: function(str) {
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
        str = str.replace(reg, function(a) {
          return a == a.toLowerCase() ? en[i] : en[i].toUpperCase();
        });
      }
      return str;
    },

    convert: function() {
      if (this.cyrInput) {
        let doubles = this.cyrInput
          .split('')
          .map(letter => {
            return this.autoKeyboardLang(letter);
          })
          .join('');

        try {
          this.$clipboard(doubles);
          this.cyrInput = null;

          this.$toast.success(`Текст скопирован в буфер обмена!`);
        } catch (err) {
          this.$toast.error('Could not copy text!');
          console.error('Could not copy text: ', err);
        }
      } else {
        this.$toast.error('Введите текст для перевода!');
      }
    }
  }
};
</script>
