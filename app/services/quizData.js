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
    },
    {
      question: 'I joyfully assume responsibility for meeting financial needs in church and community',
      giftId: 6
    },
    {
      question: 'I notice and have a strong desire to meet the practical needs of others',
      giftId: 7
    },
    {
      question: 'I enjoy attacking biblical problems and researching the issues',
      giftId: 8
    },
    {
      question: 'I enjoy taking the leadership of a group where none exists',
      giftId: 9
    },
    {
      question: 'People regularly express their appreciation of my presence when they are undergoing extreme difficulty',
      giftId: 10
    },
    {
      question: 'God uses me to build up, encourage, and comfort other Christians by speaking to them of spiritual things',
      giftId: 11
    },
    {
      question: 'The smallness or insignificance of a task is not a consideration in my deciding whether or not to do a job if it needs to be done',
      giftId: 12
    },
    {
      question: 'I would like to see the spiritual needs of believers met and am willing to be personally involved in nurturing and discipleship',
      giftId: 13
    },
    {
      question: 'I get excited about discovering new insights from Scripture that I can share with others',
      giftId: 14
    },
    {
      question: 'I have a greater desire to learn how to apply God\'s Word than to simply understand it',
      giftId: 15
    },
    {
      question: 'People often look to me for guidance in organizing and managing',
      giftId: 1
    },
    {
      question: 'I seem to understand people and their motives even when I know I don\'t know them well',
      giftId: 2
    },
    {
      question: 'I sense a great deal of identification with people having personal and emotional problems but I am not weighted down by them',
      giftId: 3
    },
    {
      question: 'I have been instrumental in leading others to believe in Christ as their Savior',
      giftId: 4
    },
    {
      question: 'In specific cases God has given me assurance that he would do what seemed unlikely',
      giftId: 5
    },
    {
      question: 'I give cheerfully and liberally in support of the Lord\'s work without being presented with a specific need',
      giftId: 6
    },
    {
      question: 'I don\'t mind helping others even if they\'re undeserving or if they take advantage of me',
      giftId: 7
    },
    {
      question: 'I am ready, willing and able to defend my position of theological issues',
      giftId: 8
    },
    {
      question: 'I have a desire to help, lead, guide, and direct people into a church ministry',
      giftId: 9
    },
    {
      question: 'I enjoy turning compassion into cheerful deeds of kindness',
      giftId: 10
    },
    {
      question: 'Other believers are blessed by my ability of effectively communicating God\'s Word with boldness and clarity',
      giftId: 11
    },
    {
      question: 'I feel a burden to relieve others of detail work in order to free them to do their most important tasks',
      giftId: 12
    },
    {
      question: 'I would love to be in a position to equip saints for their work of the ministry',
      giftId: 13
    },
    {
      question: 'People have told me that I have an ability to explain difficult passages of Scripture',
      giftId: 14
    },
    {
      question: 'The decision I have made or advice I have given in difficult situations have proven to be the right thing to do in most cases',
      giftId: 15
    },
    {
      question: 'I am willing to make decision if I am convinced it is the Lord\'s will and the right thing to do, even at the risk of being misunderstood by others',
      giftId: 1
    },
    {
      question: 'The evaluations I make of people or of things said is usually correct even when other didn\'t agree at the time',
      giftId: 2
    },
    {
      question: 'When someone shares a problem with me, I am able to help them from the Word of God and motivate them to act on it',
      giftId: 3
    },
    {
      question: 'I am at ease talking to unbelievers about their need of salvation through Jesus Christ',
      giftId: 4
    },
    {
      question: 'I am able to believe God will act in a situation in spite of evidence of the contrary',
      giftId: 5
    },
    {
      question: 'I am willing to maintain a lower standard of living in to benefit God\'s work with my financial support',
      giftId: 6
    },
    {
      question: 'I enjoy working in the background if I can meet the practical needs of others',
      giftId: 7
    },
    {
      question: 'In my study of God\'s Word, I find that new insights and understanding of difficult subjects seem to come easy',
      giftId: 8
    },
    {
      question: 'I would rather deal with someone having problems personally instead of sending them to someone else',
      giftId: 9
    },
    {
      question: 'The sight of misery makes me want to find a way to express God\'s love to hurting people',
      giftId: 10
    },
    {
      question: 'I have the ability to minister to others more from the Word of God than through my personal experiences',
      giftId: 11
    },
    {
      question: 'I find it difficult to say "no" to expressed needs in the ministries of the church',
      giftId: 12
    },
    {
      question: 'I am patient with and like to help Christians who are making slow progress in their Christian walk',
      giftId: 13
    },
    {
      question: 'I am constantly thinking of ways Biblical concepts can be presented in an intelligible and interesting way',
      giftId: 14
    },
    {
      question: 'I can see possible results very quickly that may come from negative situations',
      giftId: 15
    },
    {
      question: 'I can lead a committee in making decisions',
      giftId: 1
    },
    {
      question: 'I can sense when a teaching is true of God\'s Word',
      giftId: 2
    },
    {
      question: 'I enjoy talking to people about their spiritual development',
      giftId: 3
    },
    {
      question: 'I feel comfortable in asking those to whom I witness for Christ to become a Christian',
      giftId: 4
    },
    {
      question: 'I find myself accepting God\'s promises at face value and applying them to given situations without doubt',
      giftId: 5
    },
    {
      question: 'I have a conviction that all I have belongs to God and I want to be a good steward of those things',
      giftId: 6
    },
    {
      question: 'I enjoy serving others physically or materially in order to make their burden lighter',
      giftId: 7
    },
    {
      question: 'I have found in studying God\'s Word that I seem to know what a passage is saying before other believers discover it even though we are studying it at the same time',
      giftId: 8
    },
    {
      question: 'I have a desire to help others reach lofty spiritual goals',
      giftId: 9
    },
    {
      question: 'I want to reach out to people who suffer from physical, mental, or emotional problems in some special way',
      giftId: 10
    },
    {
      question: 'I will not compromise the truth at the risk of being criticized for being narrow minded',
      giftId: 11
    },
    {
      question: 'I find great joy in doing things that need to be done no matter how small or trivial the task',
      giftId: 12
    },
    {
      question: 'I am willing to accept the responsibility to help protect weak Christians from influences that would undermine their faith',
      giftId: 13
    },
    {
      question: 'I can see how different Biblical truths relate to each other to form the whole',
      giftId: 14
    },
    {
      question: 'I find it easy to clarify people\'s problems for them and give the answers based on the bible',
      giftId: 15
    },
    {
      question: 'I easily spot weaknesses and strengths in organizational planning',
      giftId: 1
    },
    {
      question: 'I have a sensitivity that enables me to know whether a teaching or writing is of the Holy Spirit, an evil spirit, or a human spirit',
      giftId: 2
    },
    {
      question: 'I can detect potential in persons and help them reach higher levels of spirituality',
      giftId: 3
    },
    {
      question: 'I like going into non-Christian environments for the specific purpose of winning the unbeliever to Christ',
      giftId: 4
    },
    {
      question: 'When I am confronted by an obstacle, I tend to see it in term of God\'s resources instead of my own resources',
      giftId: 5
    },
    {
      question: 'I would rather provide material resources for a project than perform some manual task',
      giftId: 6
    },
    {
      question: 'I have a strong sense of compassion toward needy people',
      giftId: 7
    },
    {
      question: 'Mastering major Biblical truths is a high priority with me',
      giftId: 8
    },
    {
      question: 'I have a vision of God\'s purpose and I desire to implement plans to lead people to accomplish them',
      giftId: 9
    },
    {
      question: 'My strong sense of compassion toward needy people drive me to action',
      giftId: 10
    },
    {
      question: 'I don\'t shy away from opportunities to tell of God\'s judgment for wrong doing and if His gracious promises to those who turn to him',
      giftId: 11
    },
    {
      question: 'I see myself in more of a supporting ministry to other than being in place of leadership',
      giftId: 12
    },
    {
      question: 'I am willing to work hard for unity in the local assembly of believers',
      giftId: 13
    },
    {
      question: 'I find it easy and enjoyable to spend time in intense study and research of the Bible, organizing my thoughts in a systematic way',
      giftId: 14
    },
    {
      question: 'I can see several sides of an issue and sense which way God is leading a group',
      giftId: 15
    },
    {
      question: 'I enjoy organizing ideas, people, resources and time for more effective ministries',
      giftId: 1
    },
    {
      question: 'Other believers trust my counsel about questionable matters and have confidence in my judgments',
      giftId: 2
    },
    {
      question: 'I would be willing to spend time each week in a counseling ministry',
      giftId: 3
    },
    {
      question: 'I see people come to Christ because of my witness to them',
      giftId: 4
    },
    {
      question: 'I find it easier to trust God in very difficult circumstances or tragedies without hesitation and indecision',
      giftId: 5
    },
    {
      question: 'I believe when I give to a specific cause it is an answer to someone\'s prayer',
      giftId: 6
    },
    {
      question: 'I find myself looking for opportunities to help other people',
      giftId: 7
    },
    {
      question: 'I am able to distinguish between pertinent principles in Scripture and insignificant observations',
      giftId: 8
    },
    {
      question: 'If I had the opportunity, I would enjoy leading, directing and motivating others in some phase of the Lord\'s work',
      giftId: 9
    },
    {
      question: 'I would be pleased in taking part in a ministry to those who are suffering physically',
      giftId: 10
    },
    {
      question: 'When situations are not right, I am burdened enough to speak up and try to correct them',
      giftId: 11
    },
    {
      question: 'People have expressed to me their appreciation in helping relieve them of some of their responsibilities so that they may minister more effectively',
      giftId: 12
    },
    {
      question: 'I receive great joy from being able to disciple a group of Christians',
      giftId: 13
    },
    {
      question: 'I feel good defending Biblical principles in spite of opposition or ridicule',
      giftId: 14
    },
    {
      question: 'At times, God gives me direction and understanding beyond my natural abilities',
      giftId: 15
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
