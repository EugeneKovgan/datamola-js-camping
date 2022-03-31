export default class HeaderView {
    constructor(containerId) { 
        const avatar_block = document.querySelector(`#${containerId}`);
    }
    display (name){
        const userName = avatar_block.querySelector('.user_name');        
        console.log(name);
        userName.innerHTML= name ;      
        }
}