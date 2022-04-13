// import Tweet from './Tweet.js';
// import Comment from './Comment.js';
import TweetCollection from './TweetCollection.js';
import HeaderView from './HeaderView.js';
import TweetView from './TweetView.js';
import TweetFeedView from './TweetFeedView.js';
import FilterView from './FilterView.js';

class TweetsController {
  constructor() {
    this.tweetCollection = new TweetCollection(); // для проверки следующих методов
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
    this.tweetCollection.user = newUser;
    this.currentUser.display(newUser);
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
    console.log(this.currentTweetList);       
    this.currentTweetList = this.currentTweetList-1;
    console.log(this.currentTweetList);
    this.getFeed(0, this.currentTweetList);
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
    this.listenerOneTweetButtonBack();
    this.listenerOneTweetBlock();
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
      // if (this.tweetCollection.user === 'Guest') {
        modal.style.display = 'block';
        registrationBtn.addEventListener('click', () => {
          if (registrationLoginInput.value != '') {
            let newUser = registrationLoginInput.value;
            console.log(newUser)
            this.setCurrentUser(newUser);
            modal.style.display = 'none';    
          } this.getTweetsByFilter()
        })
      // } else {        
      //   console.log(`текущий пользователь ${this.tweetCollection.user}`);    
      // }
    })
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

  listenerTweetsBlock() {
    const tweetBlock = document.querySelector('.tweets-container');
    tweetBlock.addEventListener('click', (e) => {
        let targetTweet = e.target.closest('.tweet-container');
        if (e.target.className === 'svg-btn del_btn') {
          console.log(`remove id = ${targetTweet.id}`);         
          this.removeTweet(targetTweet.id);
          this.getFeed(0, this.currentTweetList);
          this.listenerTweetsBlock();
        } 
        else if (e.target.className === 'svg-btn edit_btn') {
          console.log(`edit id = ${targetTweet.id}`);          
          this.editMessage(targetTweet);
        }
        else {
          console.log('else');       
          this.showTweet(targetTweet.id);
          this.listenerAddNewComment(targetTweet);                     
        };
    });
  };

  listenerOneTweetBlock() {
        let targetTweet = document.querySelector('.tweet-container');
        console.log(targetTweet)
        targetTweet.addEventListener('click',(e)=> {
        if (e.target.className == 'svg-btn del_btn') {
          console.log('remove');          
          this.removeTweet(targetTweet.id);
          this.listenerTweetsBlock();
        } 
        else if (e.target.className === 'svg-btn edit_btn') {
          console.log('edit');
          this.editMessage(targetTweet);
        }    
    })    
  };

  listenerOneTweetButtonBack(){
    const backBtn = document.querySelector('.go-back_btn');
    backBtn.addEventListener('click',()=>{                  // btn back
      console.log('back');
      this.getFeed(0, this.currentTweetList);
      this.getNextTweets();
      this.listenerFunctionBlock();     
    });
  };

  listenerFilter(){ 
    const filterConfog = {author:'', dateFrom:'', dateTo:'', hashtags:'', text:''};
    const filter = document.querySelector('#filter');
    const sortBtn = filter.querySelector('.sort-btn');
    const filterName = filter.querySelector('.filter_name');
    const filterDateUp = filter.querySelector('.filter_date_up');
    const filterDateTo = filter.querySelector('.filter_date_to');
    const filterHastag = filter.querySelector('.filter_hastag');
    const filterText = filter.querySelector('.filter_text');
    filter.addEventListener('click', (e) => {
      if (e.target.classList == 'svg-btn') {
        filter.classList.toggle('hidden');
      };
    });
    filterName.addEventListener('click',()=>{      
        filterConfog.author = filterName.value;
    });
    filterDateUp.addEventListener('click',()=>{      
      filterConfog.dateFrom = filterDateUp.value;
    });
    filterDateTo.addEventListener('click',()=>{      
      filterConfog.dateTo = filterDateTo.value;
    });
    filterHastag.addEventListener('click',()=>{
      filterConfog.hashtags = filterHastag.value;
    });
    filterText.addEventListener('input',()=>{      
      filterConfog.text = filterText.value;
    });
    sortBtn.addEventListener('click',()=>{
      this.getTweetsByFilter(filterConfog);
    })
  }

  listenerFunctionBlock(){
    this.listenerCurrentUser();
    this.listenerAddNewTweet();
    this.listenerTweetsBlock();
    this.listenerFilter(); 
  }

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
    messageInput.value = tweetText.innerHTML;
    console.log(messageInput.value);        
    saveBtn.addEventListener('click',(e)=> {
      console.log(`id = ${targetTweet.id}`);
      console.log(`id = ${messageInput.value}`);
      this.editTweet(targetTweet.id, messageInput.value);
      messageInput.value ='';
      modalEdit.style.display = 'none';
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
  
  getTweetsByFilter(filterConfog ={}){
    console.log('tweetter перерисован фильтром');
    this.getFeed(0, 5, filterConfog);
    this.getNextTweets();
    this.listenerFunctionBlock();
  }

  startTweetter(filterConfog ={}) {
    this.tweetCollection.user = 'Guest' ; 
    // this.setCurrentUser('Guest')    
    console.log('tweetter запущен');
    this.getFeed(0, 5, filterConfog);
    this.getNextTweets();
    this.listenerFunctionBlock();
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
