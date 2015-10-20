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
}])
// StudentListController
.controller("StudentListController", ["$scope", function($scope){
  $scope.students = [
    {name: "メアリー・コントラリー", id:"1"},
    {name: "ジャック・スプラット", id:"2"},
    {name: "ジル・ヒル", id:"3"}
  ];

  $scope.insertTom = function() {
    $scope.students.splice(1, 0, {name: "トム・サム", id:"4"});
  };
}])
// StudentDetailController
.controller("StudentDetailController", ["$scope", "$routeParams", function($scope, $routeParams){
  $scope.studentId = $routeParams.id;
}])
// AlbumListController
.controller("AlbumListController", ["$scope", function($scope){
  $scope.album = [
    {name: "サウスウェスト・セレナーデ", duration: "2:34"},
    {name: "ノーザン・ライト・ワルツ", duration: "3:21"},
    {name: "イースタン・タンゴ", duration: "17:45"}
  ];
}])
// DeathrayMenuController
.controller("DeathrayMenuController", ["$scope", function($scope){
  $scope.menuState = {show: false};
  $scope.toggleMenu = function() {
    $scope.menuState.show = !$scope.menuState.show;
  };
  $scope.stun = function() {
    $scope.isDisabled = true;
  }
}])
// ValidationStateController
.controller("ValidationStateController", ["$scope", function($scope){
  $scope.email = {isError: false};
  $scope.emailBtnClick = function() {
    $scope.email.isError = !$scope.email.isError;
  };
  $scope.password = {isError: false};
  $scope.passwordBtnClick = function() {
    $scope.password.isError = !$scope.password.isError;
  };
}])
// SelectedRowController
.controller("SelectedRowController", ["$scope", function($scope){
  $scope.directory = [
    {name: "ハンサム・ヘファー", cuisine: "BBQ"},
    {name: "グリーンズ・グリーン・グリーンズ", cuisine: "サラダ"},
    {name: "ハウス・オブ・ファイン・フィッシュ", cuisine: "シーフード"}
  ];

  $scope.selectRestaurant = function(row) {
    $scope.selectedRow = row;
  }
}])
// ImageViewController
.controller("ImageViewController", ["$scope", function($scope){
  $scope.selectImage = "Saasy.jpg";
  $scope.url = "http://www.salesforce.com/";

  $scope.clickSaasy = function() {
    $scope.selectImage = "Saasy.jpg";
    $scope.url = "http://www.salesforce.com/";
  };
  $scope.clickChatty = function() {
    $scope.selectImage = "Chatty.jpg";
    $scope.url = "http://www.salesforce.com/jp";
  };
}]);