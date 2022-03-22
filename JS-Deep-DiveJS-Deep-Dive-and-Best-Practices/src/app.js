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
    author: 'Петров Петр',
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
    text: 'Приходи в гости #js',
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
    text: 'Какие дела?',
    createdAt: new Date('2022-03-09T23:00:01'),
    author: 'Петров Петр',
    comments: [
      {
        id: '601',
        text: 'Хорошо, а у тебя?',
        createdAt: new Date('2022-03-09T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '7',
    text: 'Всё хорошо! #js',
    createdAt: new Date('2022-03-09T23:00:20'),
    author: 'user',
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
    author: 'Петров Петр',
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
    author: 'Пётр Петров',
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
    author: 'Пётр Петров',
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
    author: 'Пётр Петров',
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
console.log(tweets);

const user = 'user';
class Tweet {
  constructor(id, text, createdAt, author, comments) {
    this.id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
    this.comments = comments;
  }

  genereteId() {
    return this.Math.random().toString(36).substr(2, 9);
  }

  getTweet(id) {
    return this.tweets.find((tweet) => tweet.id === id);
  }

  validateComment(com) {
    if (
      com.id &&
      com.text !== '' &&
      typeof com.text === 'string' &&
      com.text.length <= 280 &&
      com.createdAt &&
      com.author
    ) {
      return true;
    }
    return false;
  }

  addComment(id, text) {
    const commentedTweet = this.getTweet(id);
    if (commentedTweet) {
      const newComment = {};
      newComment.this.id = this.genereteId();
      newComment.this.text = text;
      newComment.this.createdAt = new Date();
      newComment.this.author = user;
      if (this.validateComment(newComment)) {
        commentedTweet.comments.push(newComment);
        return true;
      }
      return false;
    }
    return false;
  }
}

const tw = new Tweet(
  '77',
  'Всё хорошо! #js',
  'Mon Mar 07 2022 23:00:20 GMT+0300 (Moscow Standard Time)',
  'Пётр Петров',
);
console.log(tw);
console.log(tw.addComment('78', 'text'));
console.log(tw);

// (function autoFunction() {
//   let user = 'user';
//   function getTweets(skip = 0, top = 10, filterConfig = {}) {
//     let result = JSON.parse(JSON.stringify(tweets));
//     if (filterConfig) {
//       if (filterConfig.author) {
//         result = result.filter((tweet) => tweet.author.toLocaleLowerCase().includes(filterConfig.author.toLocaleLowerCase()));
//       }
//       if (filterConfig.dateFrom) {
//         result = result.filter((tweet) => tweet.createdAt >= filterConfig.dateFrom);
//       }
//       if (filterConfig.dateTo) {
//         result = result.filter((tweet) => tweet.createdAt <= filterConfig.dateTo);
//       }
//       if (filterConfig.hashtags) {
//         result = result.filter((tweet) => filterConfig.hashtags.every((hashtag) => tweet.text.includes(`#${hashtag}`)));
//       }
//       if (filterConfig.text) {
//         result = result.filter((tweet) => tweet.text.includes(filterConfig.text));
//       }
//       result.sort((a, b) => a.createdAt - b.createdAt);
//       return result.slice(skip, skip + top);
//     }
//     return false;
//   }

//   function getTweet(id) {
//     return tweets.find((tweet) => tweet.id === id);
//   }
//   function validateComment(com) {
//     if (
//       com.id
//       && com.text !== ''
//       && typeof com.text === 'string'
//       && com.text.length <= 280
//       && com.createdAt
//       && com.author
//     ) {
//       return true;
//     }
//     return false;
//   }

//   function validateTweet(tw) {
//     if (
//       tw.id
//       && tw.text
//       && tw.text !== ''
//       && typeof tw.text === 'string'
//       && tw.text.length <= 280
//       && tw.createdAt
//       && tw.author
//       && validateComment(tw)
//     ) {
//       return true;
//     }
//     return false;
//   }
//   function genereteId() {
//     return Math.random().toString(36).substr(2, 9);
//   }

//   function addTweet(text) {
//     const newTweet = {};
//     newTweet.id = genereteId();
//     newTweet.text = text;
//     newTweet.createdAt = new Date();
//     newTweet.author = user;
//     newTweet.comments = [];
//     if (validateTweet(newTweet)) {
//       tweets.push(newTweet);
//       return true;
//     }
//     return false;
//   }

//   function addComment(id, text) {
//     const commentedTweet = getTweet(id);
//     if (commentedTweet) {
//       const newComment = {};
//       newComment.id = genereteId();
//       newComment.text = text;
//       newComment.createdAt = new Date();
//       newComment.author = user;
//       if (validateComment(newComment)) {
//         commentedTweet.comments.push(newComment);
//         return true;
//       }
//       return false;
//     }
//     return false;
//   }

//   function editTweet(id, text) {
//     const tweet = getTweet(id);
//     if (tweet.author === user && validateTweet(tweet)) {
//       tweet.text = text;
//       return true;
//     }
//     return false;
//   }

//   function removeTweet(id) {
//     const tweet = getTweet(id);
//     if (tweet.author === user) {
//       return true;
//     }

//     tweets = tweets.filter((item) => item.id !== id);
//     return false;
//   }

//   function changeUser(usr) {
//     user = usr;
//   }
//   // for check
//   console.log(tweets);
//   console.log(getTweets(0, 10)); // должен отсортировать твиты по дате создания и вернуть первые 10 твитов.
//   console.log(getTweets(10, 10)); // должен отсортировать твиты по дате создания и вернуть 10 твитов, начиная с 11-ого.
//   console.log(getTweets(0, 10, { author: 'snow' })); // должен выбрать те твиты, где автор содержит подстроку ‘snow’,
//   // отсортировать твиты по дате создания, вернуть первые 10 твитов.
//   console.log(getTweets(0, 10, { author: 'Snow' })); // должен выбрать те твиты, где автор содержит подстроку ‘snow’,
//   // отсортировать твиты по дате создания, вернуть первые 10 твитов.
//   console.log(getTweets(0, 10, { text: '#js' })); // отсортировать твиты с #js
//   console.log(getTweet('7')); // получить твит id7
//   console.log(validateTweet('2')); // не валидный твит
//   console.log(
//     validateTweet({
//       id: '77',
//       text: 'Всё хорошо! #js',
//       createdAt: 'Mon Mar 07 2022 23:00:20 GMT+0300 (Moscow Standard Time)',
//       author: 'Пётр Петров',
//     }),
//   ); // валидный твит
//   console.log(validateComment('2')); // не валидный соммент
//   console.log(
//     validateComment({
//       id: '77',
//       text: 'Всё хорошо! #js',
//       createdAt: 'Mon Mar 07 2022 23:00:20 GMT+0300 (Moscow Standard Time)',
//       author: 'Пётр Петров',
//     }),
//   ); // валидный коммент
//   console.log(editTweet('7', 'hi')); // редактирование твита
//   console.log(removeTweet('9')); // удаление твита
//   console.log(addTweet('text')); // добавление твита
//   console.log(addComment('2', 'text')); // добавление комментария к твиту
//   console.log(tweets);
//   console.log(window);

//   return {
//     getTweets,
//     getTweet,
//     validateTweet,
//     validateComment,
//     editTweet,
//     changeUser,
//     removeTweet,
//     addTweet,
//     addComment,
//   };
// }());
