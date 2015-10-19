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
}])
// ShopingController
.controller("ShopingController", ["$scope", function($scope){
  $scope.items = [
    {title: "ペイントポット", quantity: 8, price: 3.95},
    {title: "ポルカドット", quantity: 17, price: 12.95},
    {title: "ペブル", quantity: 5, price: 6.95}
  ];
  $scope.remove = function(index) {
    $scope.items.splice(index, 1);
  };
}])
// StartUpController
.controller("StartUpController", ["$scope", function($scope){
  $scope.startingEstimate = 0;
  $scope.needed = 0;

  $scope.computeNeeded = function() {
    $scope.needed = $scope.startingEstimate * 10;
  };
  $scope.requestFunding = function() {
    window.alert("もっと顧客を増やしてからにしてください");
  };
  $scope.reset = function() {
    $scope.startingEstimate = 0;
    $scope.needed = 0;
  }
}]);