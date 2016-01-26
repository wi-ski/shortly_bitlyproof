module.exports = function (config) {
  config.set({

    basePath: './',


    frameworks: ['jasmine'],


    files: [
      'client/lib/angular/angular.js',
      'client/lib/angular-route/angular-route.js',
      'client/lib/angular-mocks/angular-mocks.js',

      'client/app/**/*.js',

      'node_modules/expect.js/index.js',
      'specs/client/**/*.js'
    ],


    exclude: [
      'karma.conf.js'
    ],


    preprocessors: {

    },


    reporters: ['nyan'],


    port: 9876,


    colors: true,


    logLevel: config.LOG_INFO,


    autoWatch: false,


    browsers: ['Chrome', 'PhantomJS'],

    singleRun: true
  });
};
