angular.module("Directives", [])
// ngbkFocus
.directive("ngbkFocus", function(){
  return {
    link: function(scope, element, attrs, controller) {
      console.log('OK');
      element[0].focus();
    }
  };
})
// addTodo
.directive("addTodo", function(){
  return {
    restrict : "A",
    replace : true,
    scope : { todos : "=todos" },
    templateUrl : "/partials/todoLocalStorageButton.html",
    link : function(scope, element) {
      var button = angular.element(element.children()[1]);
      button.bind("click", function(){
        scope.todos.push({text : scope.text, done : false});
        scope.text = "";
        scope.$apply();
      });
    }
  };
});