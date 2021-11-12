'use strict';

let diceNumber = Math.trunc(Math.random() * 6) + 1; //Will create a random number from 0 to 6 corresponding to a dice roll.

const dice1 = 'dice-1.png';
const dice2 = 'dice-2.png';
const dice3 = 'dice-3.png';
const dice4 = 'dice-4.png';
const dice5 = 'dice-5.png';
const dice6 = 'dice-6.png';
let currentPlayer = 'player1';

//document.querySelector('.player--1').classList.add('player--active');

document.querySelector('.btn--roll').addEventListener('click', function () {
  diceNumber = Math.trunc(Math.random() * 6) + 1;

  if (diceNumber === 1) {
    document.querySelector('.dice').src = dice1;
    if (currentPlayer === 'player1') {
      //activate player 2
      currentPlayer = 'player2';
      document.querySelector('.player--1').classList.add('player--active');
      document.querySelector('#name--1').classList.add('player-active');
      document.querySelector('#score--1').classList.add('player-active');
      document.querySelector('#current--1').classList.add('player-active');
      //deactivate player 1
    }
  } else if (diceNumber === 2) {
    document.querySelector('.dice').src = dice2;
  } else if (diceNumber === 3) {
    document.querySelector('.dice').src = dice3;
  } else if (diceNumber === 4) {
    document.querySelector('.dice').src = dice4;
  } else if (diceNumber === 5) {
    document.querySelector('.dice').src = dice5;
  } else {
    document.querySelector('.dice').src = dice6;
  }
});
