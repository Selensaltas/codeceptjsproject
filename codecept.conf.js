const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

require('dotenv').config({path: 'login.env'});

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.linkedin.com/',
      show: true,
      //waitForNavigation: "networkidle0",
      stopOnFail: true,
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptjsproject'

}