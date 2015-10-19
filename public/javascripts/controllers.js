angular.module("Controllers", ["Services"])
// HomeController
.controller("HomeController", ["$scope", function($scope){
  $scope.hello = "Hello World";
}]);