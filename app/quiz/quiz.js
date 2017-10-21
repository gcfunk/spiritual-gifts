'use strict';

angular.module('myApp.quiz', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quiz', {
    templateUrl: 'quiz/quiz.html',
    controller: 'QuizCtrl'
  });
}])

.controller('QuizCtrl', ['quizData', '$location', function(quizData, $location) {
  var self = this;
  self.quizData = quizData;

  self.nextQuestion = function(answer) {
    self.quizData.questions[self.quizData.currentQuestion].userAnswer = answer;
    self.quizData.currentQuestion += 1;
  };

  self.isDone = function() {
    return self.quizData.currentQuestion >= self.quizData.questions.length;
  };
}]);
