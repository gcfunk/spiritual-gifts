'use strict';

angular.module('myApp.instructions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/instructions', {
    templateUrl: 'instructions/instructions.html'
  });
}])

.controller('InstructionsCtrl', ['quizData', function(quizData) {
  var self = this;
  self.quizData = quizData;
}]);
