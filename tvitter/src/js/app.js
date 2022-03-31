// import tweets from './tweets_arr.js';
import Tweet from "./Tweet.js"
import Comment from "./Comment.js"
import TweetCollection from './TweetCollection.js';
import HeaderView from './HeaderView.js';
import TweetView from './TweetView.js';
import TweetFeedView from "./TweetFeedView .js";
import FilterView from "./FilterView.js";

let user = 'Gust';

// ++++++++++++++     tests    ++++++++++++

let newTweet = new Tweet(
  '78',
  'Приходи в гости #datamola',
  'Mon Mar 07 2022 23:00:20 GMT+0300 (Moscow Standard Time)',
  'Пётр Петров',
  [],
  );

const tweets = [
    new Tweet('1', 'Привет! #js #datamola', new Date('2021-01-09T23:00:00'), 'Иванов Иван', []),
    new Tweet('2', 'Какие дела?', new Date('2022-03-07T23:00:01'), 'Петров Петр', [
      new Comment('201', 'Хорошо, а у тебя?', new Date('2022-03-09T23:00:05'), 'Иванов Иван'),
    ]),
    new Tweet('3', 'Всё хорошо! #js', new Date('2022-03-07T23:00:20'), 'Пётр Петров', []),
  
    new Tweet('4', 'Приходи в гости #js', new Date('2021-03-09T23:00:22'), 'snow', []),
    new Tweet('5', 'Привет! #js #datamola', new Date('2022-02-09T23:00:00'), 'Иванов Иван', []),
    new Tweet('6', 'Какие дела?', new Date('2022-02-09T23:00:01'), 'Петров Петр', [
      new Comment('601', 'Хорошо, а у тебя?', new Date('2022-03-09T23:00:05'), 'Иванов Иван'),
    ]),
    new Tweet('7', 'Всё хорошо! #js', new Date('2020-03-09T23:00:20'), 'user', []),
    new Tweet('8', 'Приходи в гости #js', new Date('2022-07-09T23:00:23'), 'snow', []),
    new Tweet('9', 'Привет! #js #datamola', new Date('2022-03-09T23:00:00'), 'user', []),
    new Tweet('10', 'Какие дела?', new Date('2022-03-09T23:00:01'), 'Петров Петр', [
      new Comment('1001', 'Хорошо, а у тебя?', new Date('2021-03-09T23:08:05'), 'snow'),
    ]),
    new Tweet('11', 'Всё хорошо! #datamola', new Date('2022-03-09T23:00:20'), 'Пётр Петров', []),
    new Tweet('12', 'Приходи в гости #datamola', new Date('2021-03-19T23:20:24'), 'Пётр Петров', []),
    new Tweet('13', 'Привет! #js', new Date('2025-04-09T23:12:00'), 'Snow', []),
    new Tweet('14', 'Какие дела?', new Date('2023-03-09T23:00:01'), 'Петров Петр', [
      new Comment('1401', 'Хорошо, а у тебя?', new Date('2022-03-09T23:00:05'), 'Иванов Иван'),
    ]),
    new Tweet('15', 'Сегодня не могу! #js', new Date('2022-03-09T22:00:20'), 'Пётр Петров', []),
    new Tweet('16', 'Приходи в гости #datamola', new Date('2022-03-10T23:00:25'), 'Пётр Петров', []),
    new Tweet('17', 'Всё хорошо! #js', new Date('2021-03-09T23:11:27'), 'Пётр Петров', []),
    new Tweet('18', 'Приходи в гости #datamola', new Date('2022-03-19T23:00:32'), 'Пётр Петров', []),
    new Tweet('19', 'Давай завтра! #js', new Date('2020-03-05T23:32:26'), 'Пётр Петров', []),
    new Tweet('20', 'Приходи в гости #js', new Date('2022-01-09T23:00:29'), 'Пётр Петров', []),
    new Tweet('21', 'В другой раз! #js', new Date('2022-03-09T23:32:20'), 'SnoW', []),
    new Tweet('22', 'Потом #js', new Date('2022-08-09T23:00:31'), 'Пётр Петров', []),
    new Tweet('23', 'Потом #js'),
    new Tweet('24', 'Потом #js'),
];
const tweetCollection = new TweetCollection(); // для проверки следующих методов  

const currentUser = new HeaderView('avatar_block');
function setCurrentUser(user){
  user = user
  currentUser.display(user)  
}

const tweetView = new TweetView('tweet_container')
tweetView.display(newTweet)

const tweetFeedView  = new TweetFeedView() 
tweetFeedView.display(tweets);

const filterView = new FilterView('filter')
filterView.display(tweets)

// const tweetsArr = [
//   {
//     id: '1',
//     text: 'Привет! #js #datamola',
//     createdAt: new Date('2022-03-09T23:00:00'),
//     author: 'Иванов Иван',
//     comments: [],
//   },
//   {
//     id: '2',
//     text: 'Какие дела?',
//     createdAt: new Date('2022-03-07T23:00:01'),
//     author: 'Петров Петр',
//     comments: [
//       {
//         id: '201',
//         text: 'Хорошо, а у тебя?',
//         createdAt: new Date('2022-03-09T23:00:05'),
//         author: 'Иванов Иван',
//       },
//     ],
//   },
//   {
//     id: '3',
//     text: 'Всё хорошо! #js',
//     createdAt: new Date('2022-03-07T23:00:20'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '4',
//     text: 'Приходи в гости #js',
//     createdAt: new Date('2022-03-09T23:00:22'),
//     author: 'snow',
//     comments: [],
//   },
//   {
//     id: '5',
//     text: 'Привет! #js #datamola',
//     createdAt: new Date('2022-03-09T23:00:00'),
//     author: 'Иванов Иван',
//     comments: [],
//   },
//   {
//     id: '6',
//     text: 'Какие дела?',
//     createdAt: new Date('2022-03-09T23:00:01'),
//     author: 'Петров Петр',
//     comments: [
//       {
//         id: '601',
//         text: 'Хорошо, а у тебя?',
//         createdAt: new Date('2022-03-09T23:00:05'),
//         author: 'Иванов Иван',
//       },
//     ],
//   },
//   {
//     id: '7',
//     text: 'Всё хорошо! #js',
//     createdAt: new Date('2022-03-09T23:00:20'),
//     author: 'user',
//     comments: [],
//   },
//   {
//     id: '8',
//     text: 'Приходи в гости #js',
//     createdAt: new Date('2022-03-09T23:00:23'),
//     author: 'snow',
//     comments: [],
//   },
//   {
//     id: '9',
//     text: 'Привет! #js #datamola',
//     createdAt: new Date('2022-03-09T23:00:00'),
//     author: 'user',
//     comments: [],
//   },
//   {
//     id: '10',
//     text: 'Какие дела?',
//     createdAt: new Date('2022-03-09T23:00:01'),
//     author: 'Петров Петр',
//     comments: [
//       {
//         id: '1001',
//         text: 'Хорошо, а у тебя?',
//         createdAt: new Date('2022-03-09T23:08:05'),
//         author: 'snow',
//       },
//     ],
//   },
//   {
//     id: '11',
//     text: 'Всё хорошо! #datamola',
//     createdAt: new Date('2022-03-09T23:00:20'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '12',
//     text: 'Приходи в гости #datamola',
//     createdAt: new Date('2022-03-19T23:20:24'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '13',
//     text: 'Привет! #js',
//     createdAt: new Date('2022-04-09T23:12:00'),
//     author: 'Иванов Иван',
//     comments: [],
//   },
//   {
//     id: '14',
//     text: 'Какие дела?',
//     createdAt: new Date('2022-03-09T23:00:01'),
//     author: 'Петров Петр',
//     comments: [
//       {
//         id: '1401',
//         text: 'Хорошо, а у тебя?',
//         createdAt: new Date('2022-03-09T23:00:05'),
//         author: 'Иванов Иван',
//       },
//     ],
//   },
//   {
//     id: '15',
//     text: 'Сегодня не могу! #js',
//     createdAt: new Date('2022-03-09T22:00:20'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '16',
//     text: 'Приходи в гости #datamola',
//     createdAt: new Date('2022-03-10T23:00:25'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '17',
//     text: 'Всё хорошо! #js',
//     createdAt: new Date('2022-03-09T23:11:27'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '18',
//     text: 'Приходи в гости #datamola',
//     createdAt: new Date('2022-03-19T23:00:32'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '19',
//     text: 'Давай завтра! #js',
//     createdAt: new Date('2022-03-09T23:32:26'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '20',
//     text: 'Приходи в гости #js',
//     createdAt: new Date('2022-03-09T23:00:29'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '21',
//     text: 'В другой раз! #js',
//     createdAt: new Date('2022-03-09T23:32:20'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '22',
//     text: 'Потом #js',
//     createdAt: new Date('2022-03-09T23:00:31'),
//     author: 'Пётр Петров',
//     comments: [],
//   },
//   {
//     id: '28',
//   },
//   {
//     id: '29',
//   },
// ];

// let newTweet = new Tweet(
//   '78',
//   'Всё хорошо! #js',
//   'Mon Mar 07 2022 23:00:20 GMT+0300 (Moscow Standard Time)',
//   'Пётр Петров',
//   );
// console.log(newTweet); // создание 1 твита с помощью конструктора
    
// console.log(tweetCollection.getPage(0, 10)); // должен отсортировать твиты по дате создания и вернуть первые 10 твитов.
// console.log(tweetCollection.getPage(10, 10)); //должен отсортировать твиты по дате создания и вернуть 10 твитов, начиная с 11-ого.
// console.log(tweetCollection.getPage(0, 10, { author: 'snow' })); // должен выбрать те твиты, где автор содержит подстроку ‘snow’, отсортировать
// console.log(tweetCollection.getPage(0, 10, { text: '#js' })); // отсортировать твиты с #js
// console.log(tweetCollection._get('7')); // получить твит id7
// console.log(tweetCollection._get('76')); // получить твит id76 которого нет в массиве
// console.log(Tweet.validate('2')); // не валидный твит
// console.log(
//   Tweet.validate({
//     id: '77',
//     text: 'Всё хорошо! #js',
//     createdAt: new Date('2022-03-09T23:00:00'),
//     author: 'Пётр Петров',
//     comments: [],
//   }),
// ); // валидный твит
// console.log(Comment.validate('2')); // не валидный коммент
// console.log(
//   Comment.validate({
//     id: '77',
//     text: 'Всё хорошо! #js',
//     createdAt: new Date('2022-03-09T23:00:00'),
//     author: 'Пётр Петров',
//   }),
// ); // валидный коммент
// console.log(tweetCollection._edit('7', 'hi')); // редактирование твита
// console.log(tweetCollection._edit('77', 'hi')); // редактирование твита
// console.log(tweetCollection._get('7')); // получить твит id7
// console.log(tweetCollection._remove('9')); // удаление твита
// console.log(tweetCollection._add('text')); //добавление твита
// console.log(tweetCollection._addComment('2', 'text')); // добавление комментария к твиту

// console.log(tweetCollection.addAll(tweets));

console.log(tweets);

setCurrentUser('Илон Маск')