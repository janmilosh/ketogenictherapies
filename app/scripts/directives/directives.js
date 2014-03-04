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
        $timeout(function() {
          $('body, html').animate({
            scrollTop: $('#video').offset().top
          }, 500);
        }, 400);
      });
    }
  };
})
.directive('ngFocus',[function() {
  var FOCUS_CLASS = 'ng-focused';
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
      ctrl.$focused = false;
      element.bind('focus', function() {
        element.addClass(FOCUS_CLASS);
        scope.$apply(function() {
          ctrl.$focused = true;
        });
      }).bind('blur', function() {
        element.removeClass(FOCUS_CLASS);
        scope.$apply(function() {
          ctrl.$focused = false;
        });
      });
    }
  };
}]);


