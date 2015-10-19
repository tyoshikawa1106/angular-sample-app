angular.module("SampleApp", ["Controllers", "ngRoute"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "HomeController",
    templateUrl : "/partials/home.html"
  }).
  when("/hello", {
    controller : "HelloController",
    templateUrl : "/partials/hello.html"
  }).
  when("/binding", {
    controller : "BindingController",
    templateUrl : "/partials/binding.html"
  }).
  when("/shoping", {
    controller : "ShopingController",
    templateUrl : "/partials/shoping.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);