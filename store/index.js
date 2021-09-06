import pkg from '~/package.json';

export const state = () => ({
  author: pkg.author,
  copyright: `Copyright &copy; ${new Date().getFullYear()} ${pkg.author.name}`,
  social: {
    facebook: {
      title: 'Facebook',
      icon: 'mdi-facebook',
      href: pkg.config.social.facebook
    },
    github: {
      title: 'Github',
      icon: 'mdi-github',
      href: pkg.config.social.github
    },
    linkedin: {
      title: 'Linkedin',
      icon: 'mdi-linkedin',
      href: pkg.config.social.linkedin
    }
  },
  cyrstr: /^[~`!№_()#@$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?а-яА-ЯёЁїЇєЄіІ0-9]+$/
});

export const actions = {};

export const mutations = {
  appSignout() {
    if (navigator.app) {
      navigator.app.exitApp();
    } else if (navigator.device) {
      navigator.device.exitApp();
    } else {
      window.close();
    }
  }
};

export const getters = {};
