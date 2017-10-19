'use strict';

angular.module('myApp.quiz', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quiz', {
    templateUrl: 'quiz/quiz.html',
    controller: 'QuizCtrl'
  });
}])

.controller('QuizCtrl', ['quizData', function(quizData) {
  var self = this;
  self.quizData = quizData;

  self.nextQuestion = function() {
    self.quizData.currentQuestion += 1;
  };
}]);
