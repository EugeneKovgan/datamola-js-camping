export default class FilterView  {
    constructor(containerId){
        const filter = document.querySelector(`#${containerId}`);
        // console.log(filter)
    }
    display(tweets){
         let authorList =[];
         
         tweets.forEach(element => {authorList.push(element._author)});
        authorList=new Set (authorList)
        const filter_name = filter.querySelector('.filter_name');
        authorList.forEach(element => {           
            let option = document.createElement('option');
            option.innerHTML = element
            filter_name.append(option)
        });
    }
}