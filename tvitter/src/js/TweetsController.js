import tweets from './tweets_arr.js';
import Tweet from "./Tweet.js"
import Comment from "./Comment.js"
import TweetCollection from './TweetCollection.js';
import HeaderView from './HeaderView.js';
import TweetView from './TweetView.js';
import TweetFeedView from "./TweetFeedView .js";
import FilterView from "./FilterView.js";

export default class TweetsController{
constructor(){

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

function filterController(){
    const filter = document.querySelector('#filter');
    // const content = filter.querySelector('.filter-content');
    filter.addEventListener('click',(e)=>{
        // e.preventDefault();
        console.log(e.target);
        if(e.target.classList == 'svg-btn') { 
        filter.classList.toggle ('hidden');
    }       
})}

function startTwitter(user){
    setCurrentUser(user);
    tweetFeedView.display(tweetCollection.getPage(0, 5));
    filterController()
    // addTweet('lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
    }   
    startTwitter('Илон Маск');
}}