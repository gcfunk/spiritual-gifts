'use strict';

angular.module('myApp.gifts', [])

.controller('GiftsCtrl', ['quizData', '$scope', function(quizData, $scope) {
  var self = this;
  self.quizData = quizData;

  // these values are passed in as strings, because javascript is dumb
  self.allExpanded = ($scope.expanded === 'true');
  self.showScore = ($scope.score === 'true');

  self.toggleExpandAll = function() {
    self.allExpanded = !self.allExpanded;
    self.allExpanded ? $('.collapse').collapse('show') : $('.collapse').collapse('hide');
  };

}])

.directive('gifts', function() {
  return {
    scope: {
      expanded: '@',
      score: '@'
    },
    link: function ($scope, element, attributes) {
      $scope.expanded = attributes.expanded;
      $scope.score = attributes.score;
    },

    controller: 'GiftsCtrl',
    controllerAs: 'gifts',
    templateUrl: '/gifts/gifts.html'
  };
});
