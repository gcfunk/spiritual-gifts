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

  self.allExpanded = true;

  self.toggleExpandAll = function() {
    self.allExpanded = !self.allExpanded;
    self.allExpanded ? $('.collapse').collapse('show') : $('.collapse').collapse('hide');
  };

}]);
