let compSign = 'o';
let userSign = 'x';

const game = document.querySelector('#game');
const arr = game.getElementsByClassName('cell');
const winnerName = document.getElementsByClassName('winner')[0];

function addEvent() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function () {
      console.log('add listener');
      drawSym(this);
    });
  }
}

function randomMove() {
  let rnd = getRandomInt(2);
  console.log(rnd);
  if (rnd == 1) {
    autoDrawing();
  }
  return true;
}

function drawSym(item, sym = userSign) {
  if (item.hasChildNodes()) return false;
  item.innerHTML = sym;

  let winner = checkWinner();
  if (sym == userSign && !winner) autoDrawing();
  if (winner == userSign) {
    winnerName.innerHTML = 'Вы выиграли';
  } else if (winner == compSign) {
    winnerName.innerHTML = 'Вы проиграли';
  }
  return true;
}

function checkWinner() {
  let winner = '';
  let j = 0;

  let xy_1_1 = arr[0].innerHTML;
  let xy_1_2 = arr[4].innerHTML;
  let xy_1_3 = arr[8].innerHTML;

  let xy_2_1 = arr[2].innerHTML;
  let xy_2_2 = arr[4].innerHTML;
  let xy_2_3 = arr[6].innerHTML;

  if ((xy_1_1 && xy_1_2 && xy_1_3) || (xy_2_1 && xy_2_2 && xy_2_3)) {
    if (xy_1_1 == userSign && xy_1_2 == userSign && xy_1_3 == userSign) {
      winner = userSign;
    } else if (xy_1_1 == compSign && xy_1_2 == compSign && xy_1_3 == compSign) {
      winner = compSign;
    }

    if (xy_2_1 == userSign && xy_2_2 == userSign && xy_2_3 == userSign) {
      winner = userSign;
    } else if (xy_2_1 == compSign && xy_2_2 == compSign && xy_2_3 == compSign) {
      winner = compSign;
    }
  }

  if (!winner) {
    for (let i = 0; i < 3; i++) {
      let a1 = arr[i].innerHTML;
      let a2 = arr[i + 3].innerHTML;
      let a3 = arr[i + 6].innerHTML;

      let b1 = arr[i].innerHTML;
      let b2 = arr[i + 1].innerHTML;
      let b3 = arr[i + 2].innerHTML;

      if (a1 == userSign && a2 == userSign && a3 == userSign) {
        winner = userSign;
        break;
      } else if (a1 == compSign && a2 == compSign && a3 == compSign) {
        winner = compSign;
        break;
      }

      if (i != 0) j = 3 * i;
      b1 = arr[j].innerHTML;
      b2 = arr[j + 1].innerHTML;
      b3 = arr[j + 2].innerHTML;

      if (b1 == userSign && b2 == userSign && b3 == userSign) {
        winner = userSign;
        break;
      } else if (b1 == compSign && b2 == compSign && b3 == compSign) {
        winner = compSign;
        break;
      }
      if (winner) break;
    }
  }

  return winner;
}

function autoDrawing() {
  if (!ckeckFreeSpace()) {
    winnerName.innerHTML = 'Ничья';
    return false;
  }
  let el, rnd;

  do {
    rnd = getRandomInt(arr.length);
    el = arr[rnd];
  } while (!drawSym(el, compSign));

  if (!ckeckFreeSpace()) {
    autoDrawing();
  }
}

function ckeckFreeSpace() {
  let res = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasChildNodes()) {
      res = false;
    } else {
      res = true;
      break;
    }
  }
  return res;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

addEvent();
randomMove();
