const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://devfinance-agilizei.netlify.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
