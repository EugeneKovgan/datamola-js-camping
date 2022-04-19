export default class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(name) {
    console.log(name);
    this.name = name;
    const avatar_block = document.querySelector(`#${this.containerId}`);
    const userName = avatar_block.querySelector('.user_name');
    console.log(`текущий пользователь ${this.name}`);
    userName.innerHTML = this.name;
  }
}
