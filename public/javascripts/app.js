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
  when("/startup", {
    controller : "StartUpController",
    templateUrl : "/partials/startup.html"
  }).
  when("/students", {
    controller : "StudentListController",
    templateUrl : "/partials/students.html"
  }).
  when("/students/view/:id", {
    controller : "StudentDetailController",
    templateUrl : "/partials/student.html"
  }).
  when("/albumList", {
    controller : "AlbumListController",
    templateUrl : "/partials/albumList.html"
  }).
  when("/deathRayMenu", {
    controller : "DeathrayMenuController",
    templateUrl : "/partials/deathRayMenu.html"
  }).
  when("/validationState", {
    controller : "ValidationStateController",
    templateUrl : "/partials/validationState.html"
  }).
  when("/selectedRow", {
    controller : "SelectedRowController",
    templateUrl : "/partials/selectedRow.html"
  }).
  when("/imageView", {
    controller : "ImageViewController",
    templateUrl : "/partials/imageView.html"
  }).
  when("/orderDiscountWatch", {
    controller : "OrderDiscountWatchController",
    templateUrl : "/partials/orderDiscountWatch.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);