'use strict';

angular.module('ketoApp')

.directive('slideToggle', function() {
  return {
    link: function (scope, ele) {      
      ele.click(function () {
        $('.slideout').slideToggle(1000);
      });
    }
  };
});

