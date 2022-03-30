function createCalendar(elem, year, month) {
  let mon = month - 1;
  let firstDay = new Date(year, mon);
  let calendarName = document.createElement('div');

  calendarName.classList.add('calendarName');
  elem.classList.add('calendar');
  let monthsNames = [
    'янваарь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ];

  calendarName.innerHTML = `${monthsNames[mon]} ${year} года`;
  document.body.prepend(calendarName);

  let table =
    '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';
  for (let i = 0; i < getDay(firstDay); i++) {
    table += '<td></td>';
  }
  while (firstDay.getMonth() === mon) {
    table += '<td>' + firstDay.getDate() + '</td>';
    if (getDay(firstDay) % 7 === 6) {
      table += '</tr><tr>';
    }
    firstDay.setDate(firstDay.getDate() + 1);
  }
  if (getDay(firstDay) != 0) {
    for (let i = getDay(firstDay); i < 7; i++) {
      table += '<td></td>';
    }
  }
  table += '</tr></table>';
  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(calendar, 2022, 3);
