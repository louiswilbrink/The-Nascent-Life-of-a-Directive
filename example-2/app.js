var myapp = angular.module('myapp', []);

myapp.directive('harmlessDirective', function () {
  var directiveDefinitionObject = {
    template: '<div>It will be alright</div>'
  };

  return directiveDefinitionObject;
});
