angular.module("Directives", [])
// ngbkFocus
.directive("ngbkFocus", function(){
  return {
    link: function(scope, element, attrs, controller) {
      console.log('OK');
      element[0].focus();
    }
  };
});