'use strict';

angular.module('ketoApp')

.directive('slideToggle', function() {
  return {
    link: function (scope, ele) {    
      ele.click(function () {
        ele.next().slideToggle(1000);
      });
    }
  };
})
.directive('slideClosed', function() {
  return {
    link: function (scope, ele) {
      ele.click(function () {
        ele.slideToggle(1000);
      });
    }
  }
})
.directive('toTop', function() {
  return {
    link: function(scope, ele) {
      ele.click(function() {
        $('html, body').animate({
          scrollTop: $("#header").offset().top
        }, 500);
      });
    }
  };
});
