module.exports = function( config ) {
  config.set({
    basePath: '..',

    browsers: [ 'PhantomJS' ],

    files: [
      // Dependencies
      'bower_components/jquery/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/select2/select2.js',
      
      // Source Code
      'src/select2.js',

      // Test Specs
      'test/*Spec.js'
    ],

    frameworks: [ 'jasmine' ],

    singleRun: true,

    reporters: [ 'dots' ]
  });
};