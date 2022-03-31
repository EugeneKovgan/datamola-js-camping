import Tweet from "./Tweet.js";
import tweets from "./tweets_arr.js";
export default class TweetCollection {
    _tweets;
    _user;
    // _createdAt;
    constructor() {
      this._tweets = tweets;
      // const user = 'user';
    }
  
    addAll(tws) {
      const noValid = [];
      tws.forEach((element) => {
        Tweet.validate(element) ? this._tweets.push(element) : noValid.push(element);
      });
      console.log('список не валидных твитов');
      return noValid;
    }
  
    clear() {
      this._tweets = [];
    }
  
    getPage(skip = 0, top = 10, filterConfig = {}) {
      let result = [...this._tweets];
      if (filterConfig) {
        if (filterConfig._author) {
          result = result.filter((tweet) =>
            tweet._author.toLocaleLowerCase().includes(filterConfig.author.toLocaleLowerCase()),
          );
        }
        if (filterConfig.dateFrom) {
          result = result.filter((tweet) => {
            tweet.createdAt >= filterConfig.dateFrom;
          });
        }
        if (filterConfig.dateTo) {
          result = result.filter((tweet) => tweet.createdAt <= filterConfig.dateTo);
        }
        if (filterConfig.hashtags) {
          result = result.filter((tweet) =>
            filterConfig.hashtags.every((hashtag) => tweet.text.includes(`#${hashtag}`)),
          );
        }
        if (filterConfig.text) {
          result = result.filter((tweet) => tweet.text.includes(filterConfig.text));
        }
        result.sort((a, b) => {
          if (a._createdAt > b._createdAt) {
            return 1;
          }
          if (a._createdAt < b._createdAt) {
            return -1;
          }
          return 0;
        });
        return result.slice(skip, skip + top);
      }
    }
    _get(id) {
      return tweets.find((tweet) => tweet.id === id);
    }
  
    _edit(id, text) {
      const tweet = this._get(id);
      // const user = 'user';
      if (tweet) {
        if (tweet.author === user && Tweet.validate(tweet)) {
          tweet.text = text;
          return true;
        } else {
          return false;
        }
      }
      console.log('tweet not found');
      return false;
    }
  
    _remove(id) {
      const tweet = this._get(id);
      // const user = 'user';
      if (tweet.author === user) {
        tweets.splice(tweet.id, 1);
        return true;
      } else {
        return false;
      }
    }
  
    _genereteId() {
      return Math.random().toString(36).substr(2, 9);
    }
  
    _add(text) {
      const newTweet = {};
      const user = 'user';
      newTweet.id = this._genereteId();
      newTweet.text = text;
      newTweet.createdAt = new Date();
      newTweet.author = user;
      newTweet.comments = [];
      if (Tweet.validate(newTweet)) {
        tweets.push(newTweet);
        return true;
      } else {
        return false;
      }
    }
  
    _addComment(id, text) {
      const commentedTweet = this._get(id);
      if (commentedTweet) {
        const newComment = {};
        // const user = 'user';
        newComment.id = this._genereteId();
        newComment.text = text;
        newComment.createdAt = new Date();
        newComment.author = user;
        if (Comment.validate(newComment)) {
          commentedTweet.comments.push(newComment);
          return true;
        } else {
          return false;
        }
      }
    }
  }