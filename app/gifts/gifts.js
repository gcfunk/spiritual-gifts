'use strict';

angular.module('myApp.gifts', [])

.controller('GiftsCtrl', ['quizData', function(quizData) {
  var self = this;
  self.quizData = quizData;

  self.allExpanded = true;

  self.toggleExpandAll = function() {
    self.allExpanded = !self.allExpanded;
    self.allExpanded ? $('.collapse').collapse('show') : $('.collapse').collapse('hide');
  };

}])

.directive('gifts', function() {
    return {
        controller: 'GiftsCtrl',
        templateUrl: '/gifts/gifts.html'
    };
});
