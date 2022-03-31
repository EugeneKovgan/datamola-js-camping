'use strict';
window.onload = function () {
  console.log('ready');

  const list = [
    {
      value: 'Пункт 1.',
      children: null,
    },
    {
      value: 'Пункт 2.',
      children: [
        {
          value: 'Подпункт 2.1.',
          children: null,
        },
        {
          value: 'Подпункт 2.2.',
          children: [
            {
              value: 'Подпункт 2.2.1.',
              children: null,
            },
            {
              value: 'Подпункт 2.2.2.',
              children: null,
            },
          ],
        },
        {
          value: 'Подпункт 2.3.',
          children: null,
        },
      ],
    },
    {
      value: 'Пункт 3.',
      children: null,
    },
  ];

  function createList(title, list) {
    const app = document.querySelector('.app');
    const titleName = document.createElement('h2');
    titleName.innerHTML = title;
    app.append(titleName);

    const listUl = document.createElement('ul');
    titleName.after(listUl);
    list.forEach((element) => {
      const listLi = document.createElement('li');
      listLi.innerHTML = element.value;
      listUl.append(listLi);
      if (element.children != null) {
        const listUl = document.createElement('ul');
        listLi.after(listUl);
        element.children.forEach((element) => {
          const listLi = document.createElement('li');
          listLi.innerHTML = element.value;
          listUl.append(listLi);
          if (element.children != null) {
            console.log(element.children);
            const listUl = document.createElement('ul');
            listLi.after(listUl);
            element.children.forEach((element) => {
              const listLi = document.createElement('li');
              listLi.innerHTML = element.value;
              listUl.append(listLi);
            });
          }
        });
      }
    });
  }

  createList('name', list);
};
