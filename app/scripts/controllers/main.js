'use strict';

angular.module('ketoApp')

.controller('MainController', function($scope) {
  
})
.controller('DateController', function($scope) {
  $scope.date = new Date().getFullYear();
})
.controller('ContactFormController', function($scope, $http, $log, $timeout) {

  // $scope.blurInput = function (event, field) {
  //   if (event.target.validity.valueMissing) {
  //     switch (field) {
  //     case 'name':
  //       $scope.nameEmpty = true;
  //       break;
  //     case 'email':
  //       $scope.emailEmpty = true;
  //       break;
  //     case 'message':
  //       $scope.messageEmpty = true;
  //       break;
  //     }
  //   }
  // };

  // $scope.focusInput = function (event, field) {
  //   switch (field) {
  //   case 'name':
  //     $scope.nameEmpty = false;
  //     break;
  //   case 'email':
  //     $scope.emailEmpty = false;
  //     break;
  //   case 'message':
  //     $scope.messageEmpty = false;
  //     break;
  //   }
  // };

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