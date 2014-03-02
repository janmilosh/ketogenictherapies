'use strict';

angular.module('ketoApp', [
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('!').html5Mode(false);
  
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/program', {
      templateUrl: 'views/program.html',
      controller: 'MainController'
    })
    .when('/research', {
      templateUrl: 'views/research.html',
      controller: 'MainController'
    })
    .when('/kit', {
      templateUrl: 'views/kit.html',
      controller: 'MainController'
    })
    .when('/diet', {
      templateUrl: 'views/diet.html',
      controller: 'MainController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactFormController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
