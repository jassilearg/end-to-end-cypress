// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: "https://buger-eats.vercel.app/",
    viewportWidth: 1440, // Largura padrão
    viewportHeight: 900, // Altura padrão
    screenshotOnRunFailure: true, // padrão é true

  },
});
