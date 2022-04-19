'use strict';
window.onload = function () {
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
              ],
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

  function createAgain(element, listLi) {
    if (element.children != null) {
      const listUl = document.createElement('ul');
      listLi.after(listUl);
      element.children.forEach((element) => {
        const listLi = document.createElement('li');
        listLi.innerHTML = element.value;
        listUl.append(listLi);
        if (element.children != null) {
          createAgain(element, listLi);
        }
      });
    } else false;
  }

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
      createAgain(element, listLi);
    });
  }

  function droppedList() {
    const ul = document.querySelector('ul');
    ul.addEventListener('click', (e) => {
      if (!e.target.nextSibling) {
        console.log('последний элемент');
        return false;
      } else if (e.target.nextSibling.tagName === 'UL') {
        e.target.nextSibling.classList.toggle('hiden');
      }
    });
  }

  createList('name', list);
  droppedList();
};
