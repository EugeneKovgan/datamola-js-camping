export default class TweetView {
    constructor(containerId){      
        this.containerId = containerId
    }
    display(newTweet){
        const tweets_container = document.querySelector(`#${this.containerId}`);
        this.newTweet = newTweet;
        console.log(newTweet);        
        tweets_container.innerHTML += `
      <div class="tweet-container">
        <div class="tweet_header">
          <div class="tweet_user_info-block">
            <a class="avatar-block" href="">
              <div class="user_avatar">
                <img class="svg" src="./assets/user-avatar.svg" alt="user-avatar" />
              </div>
              <div class="user_name text">${this.newTweet.author} -id${this.newTweet.id}</div>
            </a>
          </div>
          <div class="header_action-block">
            <img class="svg-btn" src="./assets/bx_message-rounded-edit.svg" alt="edit" />
            <img class="svg-btn" src="./assets/bx_message-rounded-x.svg" alt="delelte" />
          </div>
        </div>
        <div class="tweet-content">
          <p class="text tweet-text">${this.newTweet.text}</p>
        </div>
        <div class="tweet-footer">
          <div class="date-block text"><span>${this.newTweet.createdAt} /</span></div>
          <div class="comment-counter">
            <span class="comment-counter_number">${this.newTweet.comments.length}</span>
            <img class="svg-btn" src="./assets/bx_message-rounded.svg" alt="message" />
          </div>
        </div>
      </div>        
        `
      }
}