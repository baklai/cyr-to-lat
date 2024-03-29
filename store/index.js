import { author, config } from '~/package.json';

export const state = () => ({
  author: author,
  copyright: `Copyright \u00A9 ${new Date().getFullYear()} ${author.name}`,
  social: {
    facebook: {
      title: 'Facebook',
      icon: 'mdi-facebook',
      href: config.social.facebook
    },
    github: {
      title: 'Github',
      icon: 'mdi-github',
      href: config.social.github
    },
    linkedin: {
      title: 'Linkedin',
      icon: 'mdi-linkedin',
      href: config.social.linkedin
    }
  },
  cyrstr: /^[~`!№_()#@$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?а-яА-ЯёЁїЇєЄіІ0-9]+$/
});

export const actions = {};

export const mutations = {
  appSignout() {
    this.$router.go(-(history.length - 1));
    if (navigator.app) {
      navigator.app.exitApp();
      this.$router.go(-1);
    } else if (navigator.device) {
      navigator.device.exitApp();
      this.$router.go(-1);
    } else {
      this.$router.go(-(history.length - 1));
    }
  }
};

export const getters = {};
