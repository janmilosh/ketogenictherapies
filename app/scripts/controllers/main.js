'use strict';

angular.module('ketoApp')

.controller('MainController', function() {
  
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
    .success(function(data, status) {
      $scope.success = true;
      $log.info(data, status);
      if(data.status !== 200) {
        $scope.status = false;
      }
    })
    .error(function(data, status) {
      $scope.failure = true;
      $log.info(data, status);
    });
  };
});