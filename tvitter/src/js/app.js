import tweets from './tweets_arr.js';
import Tweet from './Tweet.js';
import Comment from './Comment.js';
import TweetCollection from './TweetCollection.js';
import HeaderView from './HeaderView.js';
import TweetView from './TweetView.js';
import TweetFeedView from './TweetFeedView.js';
import FilterView from './FilterView.js';
class TweetsController {
  constructor() {
    this.tweetCollection = new TweetCollection(tweets); // для проверки следующих методов
    this.currentUser = new HeaderView('avatar_block'); // текущию юзверь
    this.tweetView = new TweetView('main_page'); // нарисовать один твит
    this.filterView = new FilterView('filter'); // фильтр
    this.tweetFeedView = new TweetFeedView('main_page'); // отобразить массви твитов
    this.counter = this.makeCounter(); // считаем запуски стартовой
    this.StepNewTwetts = 5 // количество подгружаемых твитов;
    this.StartTweetsValue = this.StepNewTwetts //начальное колическтво твитов в ленте
    this.currentTweetList = this.StepNewTwetts; // текущее число твитов в списке;
  }
  makeCounter() { 
    let count = 0;
    return function() {
      count = this.currentTweetList + this.StepNewTwetts;
      this.currentTweetList = count;      
      return count;
    };
  }
  setCurrentUser(newUser) {
    console.log(newUser); 
    this.tweetCollection.user = newUser
    this.currentUser.display(this.tweetCollection.user);
    console.log(this.tweetCollection.user);
  }
  addTweet(text) { 
    this.tweetCollection._add(text);
    // this.tweetFeedView.display(tweets);
  }
  editTweet(id, text) {
    this.tweetCollection._edit(id, text);
  }
  removeTweet(id) {
    this.tweetCollection._remove(id);  
    this.tweetFeedView.display(this.tweetFeedView.tweets); 
    console.log(this.currentTweetList);       
    this.currentTweetList = this.currentTweetList-1;
    console.log(this.currentTweetList);
    this.getFeed(0, this.currentTweetList);
    this.listenerFunctionBlock();
    this.getNextTweets(this.currentTweetList)
  }
  getFeed(skip = 0, top = 10, filterConfig = {}){
    const collection = this.tweetCollection.getPage(skip, top, filterConfig); 
    this.tweetFeedView.display(collection);  
    this.filterView.display(collection);
  }
  showTweet(id) {
    const newTweet = this.tweetCollection._get(id);
    this.tweetView.display(newTweet);
    this.listenerOneTweetBack(); 
  }

//////////           listeners        ////////////////////////////////////////////////////

  listenerCurrentUser() {
    const modal = document.querySelector('#modal');
    const registrationLoginInput = document.querySelector('.registration-login-input');
    const loginBtn = modal.querySelector('.login_btn');
    const registrationBtn = modal.querySelector('.registration_btn');
    const close = modal.querySelector('.registration-form-close');
    const user = document.querySelector('.user_name ');
    close.addEventListener('click', () => (modal.style.display = 'none'));
    user.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(this.tweetCollection.user);
      if (this.tweetCollection.user === 'Guest') {
        modal.style.display = 'block';
        registrationBtn.addEventListener('click', () => {
          if (registrationLoginInput.value != '') {
            let newUser = registrationLoginInput.value;
            this.setCurrentUser(newUser);
            modal.style.display = 'none';       
            this.listenerCurrentUser();               
          } 
        });
      } else {        
        console.log(`текущий пользователь ${this.tweetCollection.user}`);    
      }
    });
  }

  listenerAddNewTweet() {
    const tweet = document.querySelector('.new-tweet');
    const newTweet = tweet.querySelector('.new-tweet_textarea');
    const addTweetBtn = tweet.querySelector('.new-tweet_btn');
    addTweetBtn.addEventListener('click', () => {
      if (newTweet.value != '') {
        this.addTweet(newTweet.value);
        this.listenerAddNewTweet();
        newTweet.value = '';
      }
    });
  };

  listenerAddNewComment() {
    const tweetBlock = document.querySelector('.tweets-container');
    const currentTweetId = tweetBlock.querySelector('.tweet-container')
    // console.log(currentTweetId.id)
    const comment = document.querySelector('.new-comment');
    const newComment = comment.querySelector('.new-comment_textarea');
    const addCommentBtn = comment.querySelector('.new-comment_btn');
    addCommentBtn.addEventListener('click', () => {
      console.log('comment');      
      if (newComment.value != '') {
        this.tweetCollection._addComment(currentTweetId.id, newComment.value);
        newComment.value = '';
        this.showTweet(currentTweetId.id);
        this.listenerAddNewComment();
      }
    });
  };

  listenerTweetBlock() {
    const tweetBlock = document.querySelector('.tweets-container');
    tweetBlock.addEventListener('click', (e) => {
        let targetTweet = e.target.closest('.tweet-container');
        if (e.target.className == 'svg-btn del_btn') {
          console.log('remove');          
          this.removeTweet(targetTweet.id);
          this.listenerTweetBlock();
        } 
        else if (e.target.className === 'svg-btn edit_btn') {
          console.log('edit');
          this.editMessage(targetTweet);
        }
        else {
          console.log('e;se');
          this.showTweet(targetTweet.id);
          this.listenerAddNewComment();
          // this.showTweet(targetTweet.id)                        
        };
            
    });
  };

  listenerOneTweetBack(){
    const backBtn = document.querySelector('.go-back_btn');
    backBtn.addEventListener('click',()=>{                  // btn back
      console.log('back');
      this.getFeed(0, this.currentTweetList);
      this.getNextTweets();
      this.listenerFunctionBlock();     
    });
  };

  listenerLogo(){
    const logo = document.querySelector('.header_logo');
    logo.addEventListener('click',()=>{                    // btn logo
      console.log('logo');
      this.getFeed(0, this.currentTweetList);
      this.getNextTweets();
      this.listenerFunctionBlock();        
    });
  };

//////////           functions        ////////////////////////////////////////////////////  

  editMessage(targetTweet){
    console.log(targetTweet)
    const tweetText = targetTweet.querySelector('.tweet-text');
    const modalEdit = document.querySelector('#modal-edit-message');
    const messageInput = document.querySelector('.edit-message-input')
    const saveBtn = modalEdit.querySelector('.save_btn');
    const close = modalEdit.querySelector('.edit-message-close');
    modalEdit.style.display = 'block';
    close.addEventListener('click', () => (modalEdit.style.display = 'none'));    
    console.log(tweetText.innerHTML);
    messageInput.innerHTML = tweetText.innerHTML;
    saveBtn.addEventListener('click',()=>{
      console.log(messageInput.innerHTML)
      this.editTweet(targetTweet.id, messageInput.value);
      modalEdit.style.display = 'none';
      this.startTweetter();
    })
  }

  getNextTweets(){
    const load_more_btn = document.querySelector('.load-more_btn');
    load_more_btn.addEventListener('click',()=>{
      this.getFeed(0, this.counter());
      this.getNextTweets();
      this.listenerFunctionBlock();
    })    
  }

  listenerFunctionBlock(){
    this.listenerCurrentUser();
    this.listenerAddNewTweet();
    this.listenerTweetBlock(); 
  }
  
  startTweetter() {       
    console.log('tweetter запущен');
    console.log(this.tweetCollection._tweets);
    console.log(this.tweetCollection.user);
    this.getFeed(0, this.currentTweetList);
    this.getNextTweets();
    this.listenerFunctionBlock();
    this.listenerLogo()
    console.log(this.tweetCollection.user);
  }
};

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
