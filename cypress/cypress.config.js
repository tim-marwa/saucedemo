const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  requestTimeout: 10000,
  responseTimeout: 40000,
  defaultCommandTimeout: 20000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
    testIsolation: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
