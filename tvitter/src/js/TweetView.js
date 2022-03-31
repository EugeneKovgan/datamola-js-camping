export default class TweetView {
    constructor(containerId){
        const tweet_container = document.querySelector(`#${containerId}`);
        // console.log(tweet_container)
    }
    display(newTweet){
        console.log(newTweet);
        const userName = tweet_container.querySelector('.user_name');  
        const tweetText = tweet_container.querySelector('.tweet-text');    
        const dateBlock = tweet_container.querySelector('.date-block');
        const commentCounterNumber = tweet_container.querySelector('.comment-counter_number');               
     
        userName.innerHTML= newTweet._author; 
        tweetText.innerHTML = newTweet.text;
        dateBlock.innerHTML = newTweet._createdAt;                  
        if(newTweet.comments !='')
        {commentCounterNumber.innerHTML = newTweet.comments.length} else {commentCounterNumber.innerHTML = ''}
        }
}