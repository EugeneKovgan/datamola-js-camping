export default class HeaderView {
    constructor(containerId) { 
        const avatar_block = document.querySelector(`#${containerId}`);
        // console.log(avatar_block)
    }
    display (name){
        const userName = avatar_block.querySelector('.user_name');        
        console.log(name);
        userName.innerHTML= name ;      
        }
}