var myapp = angular.module('myapp', []);

myapp.directive('harmlessDirective', function () {
  var directiveDefinitionObject = {
    scope: {},    
    template: '<div>Hello, {{ name }}</div>',
    controller: function ($scope) {
      $scope.name = 'Lebron James';
    },
    link: function (scope, element, attrs) {
      element.css('background-color', 'pink');
    }
  };

  return directiveDefinitionObject;
});
