export default class HeaderView {
    constructor(containerId) { 
        this.containerId = containerId;
    }
    display (name){
        this.name = name;
        const avatar_block = document.querySelector(`#${this.containerId}`);
        const userName = avatar_block.querySelector('.user_name');        
        console.log(`текущий пользователь ${this.name}`);
        if(this.name != "Guest"){ 
        userName.innerHTML= this.name; }   
        }
}