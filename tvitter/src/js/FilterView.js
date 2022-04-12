export default class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(tweets) {
    this.tweets = tweets;
    const filter = document.querySelector(`#${this.containerId}`);
    if (filter == null) {
      console.log('фильтр отсутствует на странице');
      return false;
    } else {
      let authorList = [];
      let hashTagsList = [];
      this.tweets.forEach((element) => {
        authorList.push(element.author);
      });
      authorList = new Set(authorList);
      const filter_name = filter.querySelector('.filter_name');
      authorList.forEach((element) => {
        let option = document.createElement('option');
        option.innerHTML = element;
        filter_name.append(option);
      });

      this.tweets.forEach((element) => {
        let el = element.text.split(' ');
        el.forEach((element) => {
          element = element.replace('<span>', '').replace('</span>', '');
          if (element.startsWith('#')) {
            hashTagsList.push(element.toLowerCase());
          };
        });
      });
      hashTagsList = new Set(hashTagsList);
      const filter_hastag = filter.querySelector('.filter_hastag');
      hashTagsList.forEach((element) => {
        let option = document.createElement('option');
        option.innerHTML = element;
        filter_hastag.append(option);
      });
    };
    this.filterControllerListener();
  };

  filterControllerListener() {
    const filter = document.querySelector('#filter');
    filter.addEventListener('click', (e) => {
      // console.log(e.target);
      if (e.target.classList == 'svg-btn') {
        filter.classList.toggle('hidden');
      };
    });
  };
  
};
