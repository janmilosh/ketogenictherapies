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
  };
})
.directive('toTop', function() {
  return {
    link: function(scope, ele) {
      ele.click(function() {
        $('body, html').animate({
          scrollTop: $('#header').offset().top
        }, 500);
      });
    }
  };
})
.directive('toVideo', function($timeout) {
  return {
    link: function(scope, ele) {
      ele.click(function() {
        $timeout(function(next, current) {
          $('body, html').animate({
            scrollTop: $('#video').offset().top
          }, 500);
        }, 400);
      });
    }
  };
});
