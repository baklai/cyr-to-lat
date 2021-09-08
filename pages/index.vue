<template>
  <v-container fill-height fluid class="pa-3">
    <v-row align="center" justify="space-around">
      <v-col cols="10" xl="5" lg="5" md="5" sm="8">
        <v-img
          contain
          :src="require('~/assets/img/home.svg')"
          class="d-block ml-auto mr-auto"
        />
      </v-col>

      <v-col cols="10" xl="3" lg="4" md="5" sm="8">
        <h1 class="font-weight-light display-1">
          <strong> {{ $t('home.caption') }} </strong>
        </h1>
        <h3 class="subtitle-2 my-2">
          {{ $t('home.comment') }}
        </h3>
        <v-text-field
          filled
          rounded
          clearable
          persistent-placeholder
          :placeholder="$t('home.placeholder')"
          color="blue darken-1"
          :type="showeye ? 'text' : 'password'"
          :append-icon="showeye ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          :rules="cyrRules"
          v-model.trim="cyrInput"
          @click:append="showeye = !showeye"
          @keypress.down="showeye = true"
          @keypress.enter="convert()"
          @click="showeye = false"
          class="my-5"
        />
        <v-row>
          <v-col cols="12">
            <v-btn depressed rounded outlined @click="convert()">
              {{ $t('home.button') }}
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
      title: this.$i18n.t('home.title')
    };
  },

  data() {
    return {
      showeye: true,
      cyrInput: null,
      cyrRules: [
        v => !!v || this.$i18n.t('msg.pass_required'),
        v => this.cyrstr.test(v) || this.$i18n.t('msg.pass_example')
      ]
    };
  },

  computed: {
    cyrstr() {
      return this.$store.state.cyrstr;
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
      const lat = [
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
          return a == a.toLowerCase() ? lat[i] : lat[i].toUpperCase();
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
          this.showeye = false;
          this.$toast.success(this.$i18n.t('msg.pass_clipboard'));
        } catch (err) {
          this.$toast.error(this.$i18n.t('msg.pass_clipboard_error'));
        }
      } else {
        this.$toast.error(this.$i18n.t('msg.pass_undefined'));
      }
    }
  }
};
</script>
