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
tweetCollection.user = "Gust";

const currentUser = new HeaderView('avatar_block'); // текущию юзверь

const tweetView = new TweetView('tweets_container'); // нарисовать один твит 
// tweetView.display(newTweet)

const tweetFeedView  = new TweetFeedView('tweets_container'); // отобразить массви твитов
// tweetFeedView.display(tweets);

const filterView = new FilterView('filter');  // фильтр
// filterView.display(tweets);

function setCurrentUser(user = tweetCollection.user){  
  currentUser.display(user);
  tweetCollection.user = user;  
}

function addTweet(text){
  tweetCollection._add(text);
  tweetFeedView.display(tweets);
}

function editTweet(id, text){
  tweetCollection._edit(id, text);
  tweetFeedView.display(tweets);
}

function removeTweet(id){
  tweetCollection._remove(id);
  tweetFeedView.display(tweets);
}

function getFeed(skip, top, filterConfig){
  const tweets = tweetCollection.getPage(skip = 0, top = 10, filterConfig = {});  
  tweetFeedView.display(tweets);

}

function showTweet(id){
  const newTweet = tweetCollection._get(id);
  tweetView.display(newTweet);
}


// ++++++++++++++     tests    ++++++++++++
// console.log(tweets);
filterView.display(tweets); // включить фильтр твитов
setCurrentUser() // установить текущего пользователя 
setCurrentUser('Илон Маск'); // поменяет текущего пользователя
tweetView.display(newTweet) // нарисовать один твит по заданному шаблону newTweet
tweetFeedView.display(tweets); // добавить массив твитов
addTweet('lorem lorem lorem <span> #lorem</span> lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
editTweet('7', "lorem lorem lorem <span> #lorem</span> lorem lorem lorem lorem lorem lorem lore"); // редактировать твит
removeTweet('7'); // убрать твит из массива твитов
getFeed(0, 10); // получить твиты по фильтру 
showTweet('9'); // отобразить один твит 
addTweet('lorem lorem lorem <span> #lorem</span> lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
addTweet('lorem lorem lorem <span> #lorem</span> lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
addTweet('lorem lorem lorem <span> #lorem</span> lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов

// console.log(tweets);