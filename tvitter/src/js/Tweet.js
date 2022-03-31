import Comment from "./Comment.js";
export default class Tweet {
    _id;
    _createdAt;
    _author;
    // перебор массива объектов для создания списка через конструктор
    // constructor(item) {
    //   this._id = item.id;
    //   this.text = item.text;
    //   this._createdAt = item.createdAt;
    //   this._author = item.author;
    //   this.comments = item.comments;
    constructor(id, text, createdAt, author, comments) {
      this._id = id;
      this.text = text;
      this._createdAt = createdAt;
      this._author = author;
      this.comments = comments;
    }
    get id() {
      return this._id;
    }
    set id(newId) {
      console.log(`${newId} this place can't will be change`);
    }
    get createdAt() {
      return this._createdAt;
    }
    set createdAt(newCreatedAt) {
      console.log(`${newCreatedAt} this place can't will be change`);
    }
    get author() {
      return this._author;
    }
    set author(newAuthor) {
      console.log(`${newAuthor} this place can't will be change`);
    }
  
    static validate(tw) {
      if (
        (typeof tw._id === 'string' &&
          tw.text !== '' &&
          typeof tw.text === 'string' &&
          tw.text.length <= 280 &&
          typeof tw.text === 'string' &&
          tw._createdAt !== '' &&
          typeof tw._createdAt === 'object' &&
          tw._author !== '' &&
          typeof tw._author === 'string',
        Comment.validate(tw))
      ) {
        return true;
      } else {
        return false;
      }
    }
  }