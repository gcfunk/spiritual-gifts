'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp').
factory('quizData', function(){
  var quizData = {};

  quizData.questions = [
    { question: 'I work well under pressure and get to the heart of a matter and take decisive action' },
    { question: 'Other people seem to have confidence in my ability to tell when something or someone is right or wrong' },
    { question: 'I would rather deal with someone having problems personally instead of sending them to someone else' },
    { question: 'I receive great satisfaction in sharing Christ freely and effectively with unbelieving persons' },
    { question: 'I have known God\'s will with certainty in a specific situation even when concrete evidence was missing' }
  ];
  quizData.currentQuestion = 0;

  return quizData;
});
