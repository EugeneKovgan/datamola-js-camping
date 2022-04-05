import tweets from './tweets_arr.js';
import Tweet from "./Tweet.js"
import Comment from "./Comment.js"
import TweetCollection from './TweetCollection.js';
import HeaderView from './HeaderView.js';
import TweetView from './TweetView.js';
import TweetFeedView from "./TweetFeedView .js";
import FilterView from "./FilterView.js";

let newTweet = new Tweet({  
  id: '1',
  text: 'Привет! #js #datamola',
  createdAt: new Date('2022-03-09T23:00:00'),
  author: 'Иванов Иван',
  comments: [],
});

const tweetCollection = new TweetCollection(); // для проверки следующих методов 
tweetCollection.user = "Guest";

const currentUser = new HeaderView('avatar_block'); // текущию юзверь

const tweetView = new TweetView('main_page'); // нарисовать один твит 
// tweetView.display(newTweet)

const filterView = new FilterView('filter');  // фильтр
// filterView.display(tweets);

const tweetFeedView  = new TweetFeedView('main_page'); // отобразить массви твитов
// tweetFeedView.display(tweets);

function setCurrentUser(user = tweetCollection.user){  
  currentUser.display(user);
  tweetCollection.user = user;  
}

function addTweet(text){  
  tweetCollection._add(text);
  tweetFeedView.display(tweets);
  filterView.display(tweets);
}

function editTweet(id, text){
  tweetCollection._edit(id, text);
  tweetFeedView.display(tweets);
  filterView.display(tweets);
}

function removeTweet(id){
  tweetCollection._remove(id);
  tweetFeedView.display(tweets);
  filterView.display(tweets)
}

function getFeed(skip, top, filterConfig){
  const tweets = tweetCollection.getPage(skip = 0, top = 10, filterConfig = {});  
  tweetFeedView.display(tweets);
  filterView.display(tweets);
}

function showTweet(id){
  const newTweet = tweetCollection._get(id);
  tweetView.display(newTweet);
}

export function markedHashtags (text){ 
  let newTextArr = [];
  text.split(' ').forEach(element => { 
  if (element.startsWith('#')){
    element = `<span>${element}</span>`;
    newTextArr.push(element)
  } else {    
    newTextArr.push(element);                 
  }
});
text = newTextArr.join(' ');
return text
}

// ++++++++++++++     tests    ++++++++++++
// console.log(tweets);
// console.log(tweetCollection.getPage(0, 10)); // должен отсортировать твиты по дате создания и вернуть первые 10 твитов.
setCurrentUser() // установить текущего пользователя (по умолчанию "Guest")
setCurrentUser('Илон Маск'); // назначить текущего пользователя
tweetFeedView.display(tweets); // добавить массив твитов
filterView.display(tweets); // включить фильтр твитов 
addTweet('lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
editTweet('7', "lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore"); // редактировать твит
removeTweet('7'); // убрать твит из массива твитов
getFeed(0, 10); // получить твиты по фильтру 
tweetView.display(newTweet) // нарисовать один твит по заданному шаблону newTweet
showTweet('6'); // отобразить один твит 
addTweet('lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
addTweet('lorem lorem lorem #lorem #hashtag lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
addTweet('lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
console.log(tweetCollection.getPage(0, 10, { text: '#js' })); // отсортировать твиты с #js

// console.log(tweets);