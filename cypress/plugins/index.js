/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // process.env.NODE_ENV = 'development';
  // process.env.DEBUG='cypress:webpack';
  require('@cypress/code-coverage/task')(on, config);

  const webpackOptions = require('../webpack.config');
  
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: webpackOptions,
    watchOptions: {},
  }

  on('file:preprocessor', webpackPreprocessor(options))
  return config;
}
