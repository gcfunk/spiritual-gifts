'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp').
factory('quizData', function(){
  var quizData = {};

  quizData.currentQuestion = 0;

  quizData.highestScore = 18; // 3 per question, 6 questions per gift

  quizData.questions = [
    {
      question: 'I work well under pressure and get to the heart of a matter and take decisive action',
      giftId: 1
    },
    {
      question: 'Other people seem to have confidence in my ability to tell when something or someone is right or wrong',
      giftId: 2
    },
    {
      question: 'I would rather deal with someone having problems personally instead of sending them to someone else',
      giftId: 3
    },
    {
      question: 'I receive great satisfaction in sharing Christ freely and effectively with unbelieving persons',
      giftId: 4
    },
    {
      question: 'I have known God\'s will with certainty in a specific situation even when concrete evidence was missing',
      giftId: 5
    }
  ];

  quizData.gifts = [
    {
      id: 1,
      name: 'Administration',
      description: 'The ability to guide human activities in such a way that Christ\'s program is carried out (1 Corinthians 12:28)'
    },
    {
      id: 2,
      name: 'Discernment',
      description: ''
    },
    {
      id: 3,
      name: 'Encouragement',
      description: ''
    },
    {
      id: 4,
      name: 'Evangelism',
      description: ''
    },
    {
      id: 5,
      name: 'Faith',
      description: ''
    },
    {
      id: 6,
      name: 'Giving',
      description: ''
    },
    {
      id: 7,
      name: 'Helping',
      description: ''
    },
    {
      id: 8,
      name: 'Knowledge',
      description: ''
    },
    {
      id: 9,
      name: 'Leadership',
      description: ''
    },
    {
      id: 10,
      name: 'Mercy',
      description: ''
    },
    {
      id: 11,
      name: 'Prophecy',
      description: ''
    },
    {
      id: 12,
      name: 'Service',
      description: ''
    },
    {
      id: 13,
      name: 'Shepherding',
      description: ''
    },
    {
      id: 14,
      name: 'Teaching',
      description: ''
    },
    {
      id: 15,
      name: 'Wisdom',
      description: ''
    }
  ];

  return quizData;
});
