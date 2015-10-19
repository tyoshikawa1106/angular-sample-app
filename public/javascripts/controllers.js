angular.module("Controllers", ["Services"])
// HomeController
.controller("HomeController", ["$scope", function($scope){

}])
// HelloController
.controller("HelloController", ["$scope", function($scope){
  $scope.hello = "Hello World";
}])
// BindingController
.controller("BindingController", ["$scope", function($scope){
  $scope.greeting = { text: "Hello" };
}]);