const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  screenshotsFolder: './screenshots',
  videosFolder: './videos',
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com/todos/",
    setupNodeEvents(on, config) {
      
  }
}
})
    
