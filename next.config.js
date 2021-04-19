module.exports = {
  exportPathMap: () => {
    return {
      "/": { page: "/", query: { locale: "en" } },
      "/ru": { page: "/", query: { locale: "ru" } },
    };
  },
};
