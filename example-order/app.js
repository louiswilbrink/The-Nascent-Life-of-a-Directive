var myapp = angular.module('myapp', []);

myapp.directive('harmlessDirective', function () {
  var directiveDefinitionObject = {
    scope: {},
    template: '<div>Hello, {{ name }}</div>',
    controller: function ($scope) {
      console.log('controller');
      console.log('controller:$scope', $scope);
      $scope.name = 'Louis';
    },
    link: function (scope) {
      console.log('link');
      console.log('link:scope', scope);
    }
  };

  return directiveDefinitionObject;
});






