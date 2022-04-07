import tweets from './tweets_arr.js';
import Tweet from "./Tweet.js"
import Comment from "./Comment.js"
import TweetCollection from './TweetCollection.js';
import HeaderView from './HeaderView.js';
import TweetView from './TweetView.js';
import TweetFeedView from "./TweetFeedView .js";
import FilterView from "./FilterView.js";
class TweetsController {
    constructor(){
        this.tweetCollection = new TweetCollection(); // для проверки следующих методов 
        this.currentUser = new HeaderView('avatar_block'); // текущию юзверь
        this.tweetView = new TweetView('main_page'); // нарисовать один твит
        this.filterView = new FilterView('filter');  // фильтр 
        this.tweetFeedView  = new TweetFeedView('main_page'); // отобразить массви твитов
    }

    setCurrentUser(user = tweetCollection.user){  
        this.currentUser.display(user);
        this.tweetCollection.user = user;  
    }
    addTweet(text){  
        this.tweetCollection._add(text);
        this.tweetFeedView.display(tweets);
        this.filterView.display(tweets);
    }
    addTweet(text){  
        this.tweetCollection._add(text);
        this.tweetFeedView.display(tweets);
        this.filterView.display(tweets);
    }
    editTweet(id, text){
        this.tweetCollection._edit(id, text);
        this.tweetFeedView.display(tweets);
        this.filterView.display(tweets);
    }
    removeTweet(id){
        this.tweetCollection._remove(id);
        this.tweetFeedView.display(tweets);
        this.filterView.display(tweets)
    }
    getFeed(skip, top, filterConfig){
        this.tweets = tweetCollection.getPage(skip = 0, top = 10, filterConfig = {});  
        this.tweetFeedView.display(tweets);
        this.filterView.display(tweets);
    }
    showTweet(id){
        this.newTweet = this.tweetCollection._get(id);
        this.tweetView.display(newTweet);
    }

    getStartedTweetsLIst(tweets){
        this.tweetFeedView.display(tweets);
        this.filterView.display(tweets);
        // this.tweetCollection.getPage(0, 10)
    }
    startTweetter(){
        console.log('tweetter запущен');
        this.getStartedTweetsLIst(this.tweetCollection.getPage(0, 5));
    }
}

const tweetsController = new TweetsController();
tweetsController.startTweetter();


// ++++++++++++++     tests    ++++++++++++
// console.log(tweets);
// console.log(tweetCollection.getPage(0, 10)); // должен отсортировать твиты по дате создания и вернуть первые 10 твитов.
// setCurrentUser() // установить текущего пользователя (по умолчанию "Guest")
// setCurrentUser('Илон Маск'); // назначить текущего пользователя
// tweetFeedView.display(tweets); // добавить массив твитов
// filterView.display(tweets); // включить фильтр твитов 
// addTweet('lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
// editTweet('7', "lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore"); // редактировать твит
// removeTweet('7'); // убрать твит из массива твитов
// getFeed(0, 10); // получить твиты по фильтру 
// tweetView.display(newTweet) // нарисовать один твит по заданному шаблону newTweet
// showTweet('6'); // отобразить один твит 
// addTweet('lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
// addTweet('lorem lorem lorem #lorem #hashtag lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
// addTweet('lorem lorem lorem #lorem lorem lorem lorem lorem lorem lorem lore'); // добавить твит в массив твитов
// console.log(tweetCollection.getPage(0, 10, { text: '#js' })); // отсортировать твиты с #js

// console.log(tweets);

// tweetsController.startTwitter();