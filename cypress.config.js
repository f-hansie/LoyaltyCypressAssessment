const { defineConfig } = require("cypress");

module.exports = defineConfig({

  pageLoadTimeout: 180000,
  viewportHeight: 1000,
  viewportWidth: 1500,
  defaultCommandTimeout: 8000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
  },
});


