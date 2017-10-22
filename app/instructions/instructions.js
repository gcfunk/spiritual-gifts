'use strict';

angular.module('myApp.instructions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/instructions', {
    templateUrl: 'instructions/instructions.html'
  });
}]);
