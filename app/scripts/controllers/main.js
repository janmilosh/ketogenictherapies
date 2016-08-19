'use strict';

angular.module('ketoApp')

.controller('MainController', function($scope, $location, $window) {
  
})
.controller('DateController', function($scope) {
  $scope.date = new Date().getFullYear();
})
.controller('ContactFormController', function($scope, $http, $log) {

  $scope.result = {};
  $scope.success = false;
  $scope.submitted = false;
  $scope.failure = false;

  $scope.submit = function() {
    var data = {
      name: $scope.contact.name,
      email: $scope.contact.email,
      message: $scope.contact.message
    };

    $scope.submitted = true;

    $log.info('Contact form inputs: ', data);

    $http.post('contact.php', data)
    .success(function(status, data) {
      $scope.success = true;
      $log.info(status, data);
    })
    .error(function(status, data) {
      $scope.failure = true;
      $log.info(status, data);
    });
  };
});