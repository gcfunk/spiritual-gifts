'use strict';

angular.module('myApp.gifts', [])

.controller('GiftsCtrl', ['quizData', '$scope', function(quizData, $scope) {
  var self = this;
  self.quizData = quizData;

  // these values are passed in as strings, because javascript is dumb
  self.allExpanded = ($scope.expanded === 'true');
  self.showScore = ($scope.score === 'true');
  self.sort = $scope.sort;
  self.reverse = ($scope.reverse === 'true');

  // for expanding or collapsing the panels on load
  self.initialExpandAll = self.allExpanded;

  self.toggleExpandAll = function() {
    self.allExpanded = !self.allExpanded;
    self.allExpanded ? $('.collapse').collapse('show') : $('.collapse').collapse('hide');
  };

}])

.directive('gifts', function() {
  return {
    scope: {
      expanded: '@',
      score: '@',
      sort: '@',
      reverse: '@'
    },
    link: function ($scope, element, attributes) {
      $scope.expanded = attributes.expanded;
      $scope.score = attributes.score;
      $scope.sort = attributes.sort;
      $scope.reverse = attributes.reverse;
    },

    controller: 'GiftsCtrl',
    controllerAs: 'gifts',
    templateUrl: '/gifts/gifts.html'
  };
});
