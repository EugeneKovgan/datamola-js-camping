export default class TweetView {
    constructor(containerId){      
        this.containerId = containerId;
    }
    display(newTweet){
        const main_pager = document.querySelector(`#${this.containerId}`);        
        this.newTweet = newTweet;
        main_pager.innerHTML = `
        <button class="go-back_btn btn">Go back</button>
        <div class="main_content">
        <div class="tweets-container" id="tweets_container">
        </div>
        </div>     
        `;

    function markedHashtags (text){ 
        let newTextArr = [];
          text.split(' ').forEach(element => {     
        if (element.startsWith('#')){
            element = `<span>${element}</span>`;
            newTextArr.push(element)}
        else {    
            newTextArr.push(element);                 
          }
        });
        text = newTextArr.join(' ');
      return text
    }
      
    newTweet.text = markedHashtags (newTweet.text);

        tweets_container.innerHTML += `
      <div class="tweet-container">
        <div class="tweet_header">
          <div class="tweet_user_info-block">
            <a class="avatar-block" href="">
              <div class="user_avatar">
                <img class="svg" src="./assets/user-avatar.svg" alt="user-avatar" />
              </div>
              <div class="user_name text">${this.newTweet.author}</div>
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
          <div class="date-block text"><span>${this.newTweet.createdAt.toLocaleString()}</span></div>
          <div class="comment-counter">
            <span class="comment-counter_number">${this.newTweet.comments.length}</span>
            <img class="svg-btn" src="./assets/bx_message-rounded.svg" alt="message" />
          </div>
        </div>
      </div>       
        `
        tweets_container.innerHTML += `
          <div class="new-tweet">
          <input class="new-tweet_textarea" type="text" placeholder="Text" />
          <button class="new-tweet_btn btn">Add</button>
          </div>`
          if(newTweet.comments.length > 0){      
            for (let comment of newTweet.comments) {
              comment.text = markedHashtags (comment.text);
              tweets_container.innerHTML += 
              `
              <div class="comment-container">
              <div class="comment_header">
                <div class="comment_user_info-block">
                  <a class="avatar-block" href="">
                    <div class="user_avatar">
                      <img class="svg" src="./assets/user-avatar.svg" alt="user-avatar" />
                    </div>
                    <div class="user_name text">${comment.author}</div>
                  </a>
                </div>
              </div>
              <div class="comment-content">
                <p class="text comment-text">${comment.text}</p>
              </div>
              <div class="tweet-footer">
                <div class="date-block text">${comment.createdAt.toLocaleString()}</span></div>
              </div>
            </div>
              `                            
            }
          }
        }    
}