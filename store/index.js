import { author, config } from '~/package.json';

export const state = () => ({
  author: author,
  copyright: `Copyright &copy; ${new Date().getFullYear()} ${author.name}`,
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
    if (navigator.app) {
      this.$router.go(-(history.length - 1));
      navigator.app.exitApp();
    } else if (navigator.device) {
      this.$router.go(-(history.length - 1));
      navigator.device.exitApp();
    } else {
      this.$router.go(-(history.length - 1));
    }
  }
};

export const getters = {};
