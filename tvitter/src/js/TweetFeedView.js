import TweetView from './TweetView.js';
import TweetCollection from './TweetCollection.js';
export default class TweetFeedView {
  constructor(containerId) {
    this.containerId = containerId;
    this.tweetCollection = new TweetCollection();
    this.tweetView = new TweetView();    
  }
  display(tweets) {
    this.tweets = tweets;
    console.log(this.tweets);
    const main_page = document.querySelector(`#${this.containerId}`);
    main_page.innerHTML = `
    <div class="main_content">
      <div class="new-tweet">
        <input class="new-tweet_textarea" type="text" placeholder="Text" />
        <button class="new-tweet_btn btn">Add</button>
      </div>  
      <div class="tweets-container" id="tweets_container"></div>  
      <button class="load-more_btn btn">Load more</button>
    </div>

    <div class="filter" id="filter">
      <div class="filter_header">
        <div class="filter_header-name">Filter</div>
        <img class="svg-btn" src="./assets/carbon_chevron-sort-up.svg" alt="up" />
        <div class="filter-content">

          <div class="filter-item">
            <div class="filter-name">Name</div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <select class="filter_name" name="" id=""></select>
          </div>

          <div class="filter-item">
            <div class="filter-name">Date</div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <div class="filter_date_conatiner">
              <input class="filter_date_up" type="date" />
              <input class="filter_date_to" type="date" />
            </div>
          </div>

          <div class="filter-item">
            <div class="filter-name">Text</div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <input class="filter_text" type="text" />
          </div>

          <div class="filter-item">
            <div class="filter-name">#</div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <select class="filter_hastag" name="" id=""></select>
          </div>

        </div>
      </div>
    </div>
    `;
        
    const tweets_container = document.querySelector('.tweets-container');    
    this.tweets.forEach((element) => {
      element.text = this.tweetView.markedHashtags(element.text);
      tweets_container.innerHTML += `
      <div class="tweet-container" id="${element.id}">
        <div class="tweet_header">
          <div class="tweet_user_info-block">
            <div class="avatar-block">
              <div class="user_avatar">
                <img class="svg" src="./assets/user-avatar.svg" alt="user-avatar" />
              </div>
              <div class="user_name text">${element.author}</div>
            </div>
          </div>
          <div class="header_action-block"></div>
        </div>
        <div class="tweet-content">
          <p class="text tweet-text">${element.text} --- id=${element.id}</p>
        </div>
        <div class="tweet-footer">
          <div class="date-block text"><span>${element.createdAt.toLocaleString()}</span></div>
          <div class="comment-counter">
            <span class="comment-counter_number">${element.comments.length}</span>
            <img class="svg-btn-message" src="./assets/bx_message-rounded.svg" alt="message" />
          </div>
        </div>
      </div>
      `;
    
      const currentTweet = document.getElementById(`${element.id}`); 
      const currentHeaderActionBlock = currentTweet.querySelector('.header_action-block');      
      this.tweetView.showHeaderActionBlock(this.tweetCollection.user, element.author, currentHeaderActionBlock);
    });
  };  
};
