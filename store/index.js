export const state = () => ({
  drawer: null,
  appName: process.env.appName,
  author: "Dmitrii Baklai",
  copyright: "@Krápka}{ub Dev.",
  links: [
    {
      title: "Facebook",
      icon: "mdi-facebook",
      href: "https://www.facebook.com/dmitrii.baklai/",
    },
    {
      title: "Github",
      icon: "mdi-github",
      href: "https://github.com/baklai",
    },
    {
      title: "Linkedin",
      icon: "mdi-linkedin",
      href: "https://www.linkedin.com/in/dmitrii-baklai-1370a3170/",
    },
  ],
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
  },
};

export const getters = {};
