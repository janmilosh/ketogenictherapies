'use strict';

angular.module('ketoApp', [
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('!').html5Mode(false);
  
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
