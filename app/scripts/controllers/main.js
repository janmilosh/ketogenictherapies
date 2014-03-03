'use strict';

angular.module('ketoApp')

.controller('MainController', function($scope) {
  
})
.controller('DateController', function($scope) {
  $scope.date = new Date().getFullYear();
})
.controller('ContactFormController', function($scope, $http, $log, $timeout) {

  $scope.result = {};
  $scope.success = false;
  $scope.processing = false;

  $scope.submit = function() {
    $scope.processing = true;
    var data = {
      name: $scope.contact.name,
      email: $scope.contact.email,
      message: $scope.contact.message
    };

    $log.info('Here is the data: ', data);

    $http.post('contact.php', data)
    .success(function(status, data) {
      $scope.success = true;
      $log.info(status, data);
    })
    .error(function(status, data) {
      $scope.success = false;
      $log.info(status, data);

      $timeout(function(){
        $scope.success = false;
        $scope.processing = false;
      }, 2000);
    });
  };
});