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

  self.expandAll = function() {
    self.allExpanded = true;
    $('.collapse').collapse('show');
  };

  self.collapseAll = function() {
    self.allExpanded = false;
    $('.collapse').collapse('hide');
  };

}]);
