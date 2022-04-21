import TweetCollection from './TweetCollection.js';
export default class TweetView {
  constructor(containerId) {
    this.tweetCollection = new TweetCollection();
    this.containerId = containerId;
  }

  markedHashtags(text) {
    let newTextArr = [];
    text.split(' ').forEach((element) => {
      if (element.startsWith('#')) {
        element = `<span>${element}</span>`;
        newTextArr.push(element);
      } else {
        newTextArr.push(element);
      }
    });
    text = newTextArr.join(' ');
    return text;
  }

  showHeaderActionBlock(author, headerActionBlockId) {
    let user = localStorage.getItem('currentUser');
    // user = JSON.parse(user);
    if (user != author) {
      console.log(`${user} !=  ${author}`);
    } else {
      console.log(`${user} =  ${author}`);
      headerActionBlockId.innerHTML = `
      <img class="svg-btn edit_btn" src="./assets/bx_message-rounded-edit.svg" alt="edit" />
      <img class="svg-btn del_btn" src="./assets/bx_message-rounded-x.svg" alt="delelte" />
      `;
    }
  }

  display(newTweet) {
    console.log(newTweet);
    console.log(`отрисован 1 твит ${newTweet.author}`);
    const main_pager = document.querySelector(`#${this.containerId}`);
    this.newTweet = newTweet;
    main_pager.innerHTML = `
        <button class="go-back_btn btn">Go back</button>
        <div class="main_content">
          <div class="tweets-container" id="tweets_container">
          </div>
        </div>     
        `;
    this.newTweet.text = this.markedHashtags(this.newTweet.text);

    tweets_container.innerHTML += `
      <div class="tweet-container" id="${this.newTweet.id}">
        <div class="tweet_header">
          <div class="tweet_user_info-block">
            <div class="avatar-block" href="">
              <div class="user_avatar">
                <img class="svg" src="./assets/user-avatar.svg" alt="user-avatar" />
              </div>
              <div class="user_name text">${this.newTweet.author}</div>
            </div>
          </div>
          <div class="header_action-block">

          </div>
        </div>
        <div class="tweet-content">
          <p class="text tweet-text">${this.newTweet.text} --- id="${this.newTweet.id}</p>
        </div>
        <div class="tweet-footer">
          <div class="date-block text"><span>${this.newTweet.createdAt.toLocaleString()}</span></div>
          <div class="comment-counter">
            <span class="comment-counter_number">${this.newTweet.comments.length}</span>
            <img class="svg-btn-message" src="./assets/bx_message-rounded.svg" alt="message" />
          </div>
        </div>
      </div>       
      `;
    const currentHeaderActionBlock = document.querySelector('.header_action-block');
    this.showHeaderActionBlock(this.newTweet.author, currentHeaderActionBlock);

    tweets_container.innerHTML += `
          <div class="new-comment">
          <input class="new-comment_textarea" type="text" placeholder="Text" />
          <button class="new-comment_btn btn">Add</button>
          </div>`;
    if (newTweet.comments.length > 0) {
      for (let comment of newTweet.comments) {
        comment.text = this.markedHashtags(comment.text);
        tweets_container.innerHTML += `
              <div class="comment-container">
              <div class="comment_header">
                <div class="comment_user_info-block">
                  <div class="avatar-block">
                    <div class="user_avatar">
                      <img class="svg" src="./assets/user-avatar.svg" alt="user-avatar" />
                    </div>
                    <div class="user_name text">${comment.author}</div>
                  </div>
                </div>
              </div>
              <div class="comment-content">
                <p class="text comment-text">${comment.text}</p>
              </div>
              <div class="tweet-footer">
                <div class="date-block text">${comment.createdAt.toLocaleString()}</span></div>
              </div>
            </div>
            `;
      }
    }
  }
}
