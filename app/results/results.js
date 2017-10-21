'use strict';

angular.module('myApp.results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results', {
    templateUrl: 'results/results.html',
    controller: 'ResultsCtrl'
  });
}])

.controller('ResultsCtrl', ['quizData', function(quizData) {
  var self = this;
  self.quizData = quizData;

  // loop through each gift
  angular.forEach(self.quizData.gifts, function (gift) {
    // find all questions attached to the gift
    var questions = self.quizData.questions.filter(function(question) {
      return question.giftId === gift.id;
    });

    // the score is the sum of the user's answers
    gift.score = 0;
    angular.forEach(questions, function(question) {
      gift.score += question.userAnswer ? question.userAnswer : 0;
    });
  });
}]);
