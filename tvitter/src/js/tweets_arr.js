const tweets = [
  {
    id: '1',
    text: 'Привет! #js #datamola',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'Иванов Иван',
    comments: [],
  },
  {
    id: '2',
    text: 'Какие дела?',
    createdAt: new Date('2022-03-07T23:00:01'),
    author: 'Guest',
    comments: [
      {
        id: '201',
        text: 'Хорошо, а у тебя?',
        createdAt: new Date('2022-03-09T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '3',
    text: 'Всё хорошо! #js',
    createdAt: new Date('2022-03-07T23:00:20'),
    author: 'Пётр Петров',
    comments: [],
  },
  {
    id: '4',
    text: 'Приходи в гости #JS',
    createdAt: new Date('2022-03-09T23:00:22'),
    author: 'snow',
    comments: [],
  },
  {
    id: '5',
    text: 'Привет! #js #datamola',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'Иванов Иван',
    comments: [],
  },
  {
    id: '6',
    text: 'Какие дела? #datamola',
    createdAt: new Date('2022-03-09T23:00:01'),
    author: 'Guest',
    comments: [
      {
        id: '601',
        text: 'Хорошо, а у тебя? #datamola',
        createdAt: new Date('2022-03-09T23:00:05'),
        author: 'Иванов Иван',
      },
      {
        id: '602',
        text: 'А у меня ещё лучше! #js',
        createdAt: new Date('2022-03-09T23:01:05'),
        author: 'Илон Маск',
      },
    ],
  },
  {
    id: '7',
    text: 'Всё хорошо! #js',
    createdAt: new Date('2022-03-09T23:00:20'),
    author: 'Илон Маск',
    comments: [],
  },
  {
    id: '8',
    text: 'Приходи в гости #js',
    createdAt: new Date('2022-03-09T23:00:23'),
    author: 'snow',
    comments: [],
  },
  {
    id: '9',
    text: 'Привет! #js #datamola',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'user',
    comments: [],
  },
  {
    id: '10',
    text: 'Какие дела?',
    createdAt: new Date('2022-03-09T23:00:01'),
    author: 'Guest',
    comments: [
      {
        id: '1001',
        text: 'Хорошо, а у тебя?',
        createdAt: new Date('2022-03-09T23:08:05'),
        author: 'snow',
      },
    ],
  },
  {
    id: '11',
    text: 'Всё хорошо! #datamola',
    createdAt: new Date('2022-03-09T23:00:20'),
    author: 'Илон Маск',
    comments: [],
  },
  {
    id: '12',
    text: 'Приходи в гости #datamola',
    createdAt: new Date('2022-03-19T23:20:24'),
    author: 'Пётр Петров',
    comments: [],
  },
  {
    id: '13',
    text: 'Привет! #js',
    createdAt: new Date('2022-04-09T23:12:00'),
    author: 'Иванов Иван',
    comments: [],
  },
  {
    id: '14',
    text: 'Какие дела?',
    createdAt: new Date('2022-03-09T23:00:01'),
    author: 'Петров Петр',
    comments: [
      {
        id: '1401',
        text: 'Хорошо, а у тебя?',
        createdAt: new Date('2022-03-09T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '15',
    text: 'Сегодня не могу! #js',
    createdAt: new Date('2022-03-09T22:00:20'),
    author: 'Пётр Петров',
    comments: [],
  },
  {
    id: '16',
    text: 'Приходи в гости #datamola',
    createdAt: new Date('2022-03-10T23:00:25'),
    author: 'Илон Маск',
    comments: [],
  },
  {
    id: '17',
    text: 'Всё хорошо! #js',
    createdAt: new Date('2022-03-09T23:11:27'),
    author: 'Пётр Петров',
    comments: [],
  },
  {
    id: '18',
    text: 'Приходи в гости #datamola',
    createdAt: new Date('2022-03-19T23:00:32'),
    author: 'Пётр Петров',
    comments: [],
  },
  {
    id: '19',
    text: 'Давай завтра! #js',
    createdAt: new Date('2022-03-09T23:32:26'),
    author: 'Пётр Петров',
    comments: [],
  },
  {
    id: '20',
    text: 'Приходи в гости #js',
    createdAt: new Date('2022-03-09T23:00:29'),
    author: 'Илон Маск',
    comments: [],
  },
  {
    id: '21',
    text: 'В другой раз! #js',
    createdAt: new Date('2022-03-09T23:32:20'),
    author: 'Пётр Петров',
    comments: [],
  },
  {
    id: '22',
    text: 'Потом #js',
    createdAt: new Date('2022-03-09T23:00:31'),
    author: 'Пётр Петров',
    comments: [],
  },
];

this.regisratedUser = [
  {
    name: 'eugene',
    pass: '123'
  },
  {
    name: 'Илон Маск',
    pass: '123'
  },
  {
    name: 'Snow',
    pass: '123'
  }
]

function AddToLocalStorage(tweets, users) {
  if (localStorage.length === 0) {
    tweets_localStor = JSON.stringify(tweets);
    users_localStor = JSON.stringify(users);    
    localStorage.setItem('tweets', tweets_localStor);
    localStorage.setItem('currentUser', 'Guest');
    localStorage.setItem('users', users_localStor);
  }
}

AddToLocalStorage(tweets, regisratedUser);

// export default tweets;
