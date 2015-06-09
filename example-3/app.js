var myapp = angular.module('myapp', []);

myapp.directive('harmlessDirective', function () {
  var directiveDefinitionObject = {
    template: '<div>Hello, {{ name }}</div>',
    controller: function ($scope) {
      $scope.name = 'Lebron James';
    }
  };

  return directiveDefinitionObject;
});
