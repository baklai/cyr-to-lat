<template>
  <v-app>
    <v-navigation-drawer app permanent mini-variant class="pt-4">
      <template v-slot:prepend>
        <v-avatar size="36px" class="d-block text-center mx-auto mb-6">
          <img src="@/static/icon.svg" alt="app-logo" />
        </v-avatar>
      </template>

      <v-list flat dense height="70vh">
        <v-list-item class="px-0 align-center justify-center fill-height">
          <v-list-item-content>
            <v-list-item link to="/" class="mb-2">
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-home-outline</v-icon>
                  </v-list-item-icon>
                </template>
                <span>Home</span>
              </v-tooltip>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link class="my-2" to="/about">
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-information-outline</v-icon>
                  </v-list-item-icon>
                </template>
                <span>About</span>
              </v-tooltip>
              <v-list-item-content>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link class="my-2" to="/help">
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-help-circle-outline</v-icon>
                  </v-list-item-icon>
                </template>
                <span>Help</span>
              </v-tooltip>
              <v-list-item-content>
                <v-list-item-title>Help</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link class="my-2" to="/contacts">
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-account-circle-outline</v-icon>
                  </v-list-item-icon>
                </template>
                <span>Contacts</span>
              </v-tooltip>
              <v-list-item-content>
                <v-list-item-title>Contacts</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list dense flat>
          <v-list-item link class="my-2" @click.prevent="toggle_dark_mode">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-theme-light-dark</v-icon>
                </v-list-item-icon>
              </template>
              <span>Theme light/dark</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>Theme light/dark</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mx-4"></v-divider>
          <v-list-item link @click="exit()">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-logout-variant</v-icon>
                </v-list-item-icon>
              </template>
              <span>Exit</span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>Exit</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <!-- <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list>
        <v-list-item two-line class="px-2">
          <v-list-item-avatar tile>
            <img src="@/static/icon.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Converter CyrToLat</v-list-item-title>
            <v-list-item-subtitle>from {{ author }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :href="item.href"
          target="_blank"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link @click="info()">
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>О сервисе</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn tile block @click="exit()">
            <v-icon left>mdi-exit-to-app</v-icon> Выход
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer> -->

    <!-- <v-app-bar app clipped-left flat class="mx-auto px-15">
      <v-toolbar-title class="d-inline">
        <v-avatar left tile size="32">
          <img src="@/static/icon.svg" alt="logo" />
        </v-avatar>
        <p class="d-inline">Cyr</p>
        <p class="d-inline">To</p>
        <p class="d-inline">Lat</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar> -->

    <v-main>
      <nuxt />
    </v-main>

    <!-- <v-footer tile padless class="mx-auto" color="transparent">
      <v-card flat tile class="text-center" color="transparent">
        <v-card-text>
          <v-btn
            v-for="item in links"
            :key="item.icon"
            :href="item.href"
            class="mx-4"
            target="_blank"
            icon
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="caption pt-0">
          Данный онлайн сервис разработан специально для перевода строки текста
          из русской раскладки в английскую.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          Copyright &copy; {{ new Date().getFullYear() }} {{ copyright }}
        </v-card-text>
      </v-card>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    };
  },
  mounted() {
    const theme = localStorage.getItem('dark_theme');
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());
    }
  },
  computed: {
    appName() {
      return this.$store.state.appName;
    },
    links() {
      return this.$store.state.links;
    },
    copyright() {
      return this.$store.state.copyright;
    },
    author() {
      return this.$store.state.author;
    }
  },
  methods: {
    info: function () {
      this.$router.push(`/about`);
    },

    exit: function () {
      // this.$store.commit("appSignout");
      // document.getElementsByTagName("html")[0].remove();
    },

    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('theme.dark', this.$vuetify.theme.dark.toString());
    }
  }
};
</script>
