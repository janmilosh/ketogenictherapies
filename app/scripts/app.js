'use strict';

angular.module('ketoApp', [
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('!').html5Mode(false);
  
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/program', {
      templateUrl: 'views/program.html'
    })
    .when('/research', {
      templateUrl: 'views/research.html'
    })
    .when('/kit', {
      templateUrl: 'views/kit.html'
    })
    .when('/diet', {
      templateUrl: 'views/diet.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
