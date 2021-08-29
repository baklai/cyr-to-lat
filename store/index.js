import pkg from '~/package.json';

export const state = () => ({
  author: pkg.author,
  copyright: `Copyright &copy; ${new Date().getFullYear()} ${pkg.author.name}`,
  pages: {
    home: {
      title: 'Home',
      icon: 'mdi-home-outline',
      href: '/'
    },
    about: {
      title: 'About',
      icon: 'mdi-information-outline',
      href: '/about'
    },
    contacts: {
      title: 'Contacts',
      icon: 'mdi-account-circle-outline',
      href: '/contacts'
    }
  },
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
  }
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
