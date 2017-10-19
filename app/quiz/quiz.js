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

  console.log(quizData);

  self.quizData = quizData;
}]);
