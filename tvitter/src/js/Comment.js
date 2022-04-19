export default class Comment {
  _id;
  _createdAt;
  _author;
  constructor(id, text, createdAt, author) {
    this._id = id;
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
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

  static validate(com) {
    if (
      typeof com.id === 'string' &&
      com.text !== '' &&
      typeof com.text === 'string' &&
      com.text.length <= 280 &&
      typeof com.text === 'string' &&
      typeof com.createdAt === 'object' &&
      com.author !== ''
    ) {
      return true;
    } else {
      return false;
    }
  }
}
