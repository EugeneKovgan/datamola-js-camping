import Tweet from './Tweet.js';
import Comment from './Comment.js';
import tweets from './tweets_arr.js';
// import TweetFeedView from './TweetFeedView.js';
export default class TweetCollection {
  _tweets;
  // _user;
  // _user = '';
  constructor() {    
    this._tweets = tweets;             
    this._user = 'Guest';              
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
          tweet.author.toLocaleLowerCase().includes(filterConfig.author.toLocaleLowerCase()),
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
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 0;
      });
      return result.slice(skip, skip + top);
    }
  }
  _get(id) {
    return this._tweets.find((tweet) => tweet.id === id);
  }

  _edit(id, text) {
    const tweet = this._get(id);
    if (tweet) {
      if (tweet.author === this._user && Tweet.validate(tweet)) {
        console.log(`пользователь ${this._user} успешно отредактировал tweet id=${id}`);
        tweet.text = text;
        return true;
      } else {
        console.log(
          `не совпадает имя пользователя user = ${this._user}, редактирование невозможно`,
        );
        return false;
      }
    }
    console.log('tweet not found');
    return false;
  }

  _remove(id) {
    const tweet = this._get(id);
    // console.log(tweet);
    if (tweet && tweet.author === this._user) {
      console.log(`пользователь ${this._user} успешно удалил tweet id=${id}`);
      this._tweets.splice(tweet.id - 1, 1);
      return true;
    } else {
      console.log(
        `не совпадает имя пользователя user = ${this._user} или не найден данный твит, удаление невозможно`,
      );
      return false;
    }
  }

  _genereteId() {
    return Math.random().toString(36).substr(2, 9);
  }

  _add(text) {
    if (this._user === 'Guest') {
      console.log(`${this._user} не может добавлять твиты`);
      return false;
    } else {
      const newTweet = {};
      newTweet.id = this._genereteId();
      newTweet.text = text;
      newTweet.createdAt = new Date();
      newTweet.author = this._user;
      newTweet.comments = [];
      if (Tweet.validate(newTweet)) {
        this._tweets.push(newTweet);
        console.log(`Пользователь ${this._user} успешно добавил твит`);
        return true;
      } else {
        return false;
      }
    }
  }

  _addComment(id, text) {
    const commentedTweet = this._get(id);
    if (commentedTweet) {
      const newComment = {};
      newComment.id = this._genereteId();
      newComment.text = text;
      newComment.createdAt = new Date();
      newComment.author = this._user;
      if (Comment.validate(newComment)) {
        commentedTweet.comments.push(newComment);
        console.log(`пользователь ${this._user} успешно добавил комментарий tweet id=${id}`);
        return true;
      } else {
        console.log(`пользователь ${this._user} не может добавлять комментарии`);
        return false;
      }
    }
  }

  get user() {
    return this._user;
  }
  set user(newUser) {
    this._user = newUser;
  }
}
