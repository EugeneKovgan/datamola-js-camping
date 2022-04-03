export default class FilterView {
    constructor(containerId){
        this.containerId = containerId;
    }
    display(tweets){
        this.tweets = tweets;
        // console.log(this.tweets);        
        const filter = document.querySelector(`#${this.containerId}`);
        let authorList =[];  
        let hashTagsList =[];          
        this.tweets.forEach(element => {authorList.push(element.author)});
        authorList = new Set(authorList);
        const filter_name = filter.querySelector('.filter_name');
        authorList.forEach(element => {           
            let option = document.createElement('option');
            option.innerHTML = element;
            filter_name.append(option);
        });

       this.tweets.forEach((element)=>{
            let el = (element.text.split(' '));
            el.forEach((element)=>{
                if(element.startsWith('#')) { 
                    hashTagsList.push(element.toLowerCase());                   
                };                   
            });  
        });
        hashTagsList = new Set(hashTagsList);
        const filter_hastag = filter.querySelector('.filter_hastag');
        hashTagsList.forEach(element => {           
            let option = document.createElement('option');
            option.innerHTML = element;
            filter_hastag.append(option);
        });
    }
}