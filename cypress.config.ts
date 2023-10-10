import { defineConfig } from 'cypress';

export default defineConfig({
    viewportWidth: 1366,
    viewportHeight: 768,
    requestTimeout: 10000,
    responseTimeout: 40000,
    defaultCommandTimeout: 20000,
    videoUploadOnPasses: false,
    projectId: 'CypressTests',
    reporter: 'junit',
    reporterOptions: {
        mochaFile: 'cypress/results/[hash].test-results.xml',
        toConsole: false,
    },
    chromeWebSecurity: false,
    retries: {
        openMode: 0,
        runMode: 0,
    },
    e2e: {
        supportFile: false,
        specPattern: 'cypresstests/cypress/integration/*.spec.{js,jsx,ts,tsx}',
    },
});
