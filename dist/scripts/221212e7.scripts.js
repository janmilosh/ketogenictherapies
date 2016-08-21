"use strict";angular.module("ketoApp",["ngSanitize","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"views/home.html"}).when("/program",{templateUrl:"views/program.html"}).when("/research",{templateUrl:"views/research.html"}).when("/kit",{templateUrl:"views/kit.html"}).when("/diet",{templateUrl:"views/diet.html"}).when("/faq",{templateUrl:"views/faq.html"}).when("/contact",{templateUrl:"views/contact.html"}).otherwise({redirectTo:"/"})}]),angular.module("ketoApp").controller("MainController",["$scope","$location","$window",function(a,b,c){}]).controller("DateController",["$scope",function(a){a.date=(new Date).getFullYear()}]).controller("ContactFormController",["$scope","$http","$log",function(a,b,c){a.result={},a.success=!1,a.submitted=!1,a.failure=!1,a.submit=function(){var d={name:a.contact.name,email:a.contact.email,message:a.contact.message};a.submitted=!0,c.info("Contact form inputs: ",d),b.post("contact.php",d).success(function(b,d){a.success=!0,c.info(b,d),200!==b.status&&(a.status=!1)}).error(function(b,d){a.failure=!0,c.info(b,d)})}}]),angular.module("ketoApp").directive("slideToggle",function(){return{link:function(a,b){b.click(function(){b.next().slideToggle(1e3)})}}}).directive("slideClosed",function(){return{link:function(a,b){b.click(function(){b.slideToggle(1e3)})}}}).directive("toTop",function(){return{link:function(a,b){b.click(function(){$("body, html").animate({scrollTop:$("#header").offset().top},500)})}}}).directive("toContact",function(){return{link:function(a,b){b.click(function(){$("body, html").animate({scrollTop:$("#contact").offset().top},500)})}}}).directive("toVideo",["$timeout",function(a){return{link:function(b,c){c.click(function(){a(function(){$("body, html").animate({scrollTop:$("#video").offset().top},500)},400)})}}}]).directive("ngFocus",[function(){var a="ng-focused";return{restrict:"A",require:"ngModel",link:function(b,c,d,e){e.$focused=!1,c.bind("focus",function(){c.addClass(a),b.$apply(function(){e.$focused=!0})}).bind("blur",function(){c.removeClass(a),b.$apply(function(){e.$focused=!1})})}}}]);