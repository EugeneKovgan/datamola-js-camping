export default class FilterView  {
    constructor(containerId){
        const filter = document.querySelector(`#${containerId}`);
        // console.log(filter)
    }
    display(tweets){
        let authorList =[];  
        let hashTagsList =[];          
        tweets.forEach(element => {authorList.push(element._author)});
        authorList = new Set(authorList)
        const filter_name = filter.querySelector('.filter_name');
        authorList.forEach(element => {           
            let option = document.createElement('option');
            option.innerHTML = element
            filter_name.append(option)
        });
        tweets.forEach(element=>{hashTagsList.push(element.text.substr(`#`))});
        hashTagsList = new Set(hashTagsList)
        console.log(hashTagsList);
        const filter_hastag = filter.querySelector('.filter_hastag');
        hashTagsList.forEach(element => {           
            let option = document.createElement('option');
            option.innerHTML = element
            filter_hastag.append(option)
        });
    }
}