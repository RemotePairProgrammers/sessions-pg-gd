exports.config = {
  framework: 'jasmine',
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumServerJar: './node_modules/selenium-standalone/.selenium/selenium-server/2.50.1-server.jar',
  specs: ['specs/*.spec.js'],
  capabilities: {
    'browserName': 'phantomjs'
  }
}