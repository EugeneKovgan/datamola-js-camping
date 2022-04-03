// import TweetView from "./TweetView";
// const tweetView = new TweetView('tweets_container')
export default class TweetFeedView  {
    constructor(containerId){
        this.containerId = containerId
    }
    display(newTweet){
        const tweets_container = document.querySelector(`#${this.containerId}`);
        tweets_container.innerHTML ='';
        this.newTweet = newTweet;
        console.log(this.newTweet);
        this.newTweet.forEach(element => {
        tweets_container.innerHTML += `
        <div class="tweet-container">
        <div class="tweet_header">
          <div class="tweet_user_info-block">
            <a class="avatar-block" href="">
              <div class="user_avatar">
                <img class="svg" src="./assets/user-avatar.svg" alt="user-avatar" />
              </div>
              <div class="user_name text">${element.author} -id${element.id}</div>
            </a>
          </div>
          <div class="header_action-block">
            <img class="svg-btn" src="./assets/bx_message-rounded-edit.svg" alt="edit" />
            <img class="svg-btn" src="./assets/bx_message-rounded-x.svg" alt="delelte" />
          </div>
        </div>
        <div class="tweet-content">
          <p class="text tweet-text">${element.text}</p>
        </div>
        <div class="tweet-footer">
          <div class="date-block text"><span>${element.createdAt}/</span></div>
          <div class="comment-counter">
            <span class="comment-counter_number">${element.comments.length}</span>
            <img class="svg-btn" src="./assets/bx_message-rounded.svg" alt="message" />
          </div>
        </div>
      </div>        
        `
     })}
}