'use strict';

let diceNumber = Math.trunc(Math.random() * 6) + 1; //Will create a random number from 0 to 6 corresponding to a dice roll.

const dice1 = 'dice-1.png';
const dice2 = 'dice-2.png';
const dice3 = 'dice-3.png';
const dice4 = 'dice-4.png';
const dice5 = 'dice-5.png';
const dice6 = 'dice-6.png';
let currentPlayer = '';
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let totscorePlayer1 = 0;
let totscorePlayer2 = 0;
//document.querySelector(".dice").classList.add('hidden');
let diceImage = document.getElementsByClassName('dice');
diceImage[0].classList.add('hidden');
activatePlayer1();

function activatePlayer1() {
  //activate player 1
  currentPlayer = 'player1';
  document.querySelector('.player--0').classList.add('player--active');
  //document.querySelector('#name--0').classList.add('player--active');
  //document.querySelector('#score--0').classList.add('player--active');
  //document.querySelector('#current--0').classList.add('player--active');

  //deactivate player 2
  document.querySelector('.player--1').classList.remove('player--active');
  //document.querySelector('#name--1').classList.remove('player--active');
  //document.querySelector('#score--1').classList.remove('player--active');
  //document.querySelector('#current--1').classList.remove('player--active');
}

function activatePlayer2() {
  //activate player 2
  currentPlayer = 'player2';
  document.querySelector('.player--1').classList.add('player--active');
  //document.querySelector('#name--1').classList.add('player--active');
  //document.querySelector('#score--1').classList.add('player--active');
  //document.querySelector('#current--1').classList.add('player--active');

  //deactivate player 1
  document.querySelector('.player--0').classList.remove('player--active');
  //document.querySelector('#name--0').classList.remove('player--active');
  //document.querySelector('#score--0').classList.remove('player--active');
  //document.querySelector('#current--0').classList.remove('player--active');
}

document.querySelector('.btn--new').addEventListener('click', function () {
  currentPlayer = '';
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  totscorePlayer1 = 0;
  totscorePlayer2 = 0;
  document.querySelector('#current--0').textContent = scorePlayer1;
  document.querySelector('#current--1').textContent = scorePlayer2;
  document.querySelector('#score--0').textContent = totscorePlayer1;
  document.querySelector('#score--1').textContent = totscorePlayer2;
  document.querySelector('.btn--hold').disabled = false;
  document.querySelector('.btn--roll').disabled = false;
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('#name--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('#name--0').classList.remove('player--winner');
  activatePlayer1();
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (currentPlayer === 'player1') {
    totscorePlayer1 = totscorePlayer1 + scorePlayer1;
    document.querySelector('#score--0').textContent = totscorePlayer1;
    console.log(totscorePlayer1);
    console.log(scorePlayer1);
    console.log(currentPlayer);
    scorePlayer1 = 0;
    document.querySelector('#current--0').textContent = scorePlayer1;
    if (totscorePlayer1 >= 100) {
      document.querySelector('.btn--hold').disabled = true;
      document.querySelector('.btn--roll').disabled = true;
      document.querySelector('.player--0').classList.add('player--winner');
      document.querySelector('#name--0').classList.add('player--winner');
    } else if (totscorePlayer2 >= 100) {
      document.querySelector('.btn--hold').disabled = true;
      document.querySelector('.btn--roll').disabled = true;
      document.querySelector('.player--1').classList.add('player--winner');
      document.querySelector('#name--1').classList.add('player--winner');
    }
    activatePlayer2();
  } else if (currentPlayer === 'player2') {
    totscorePlayer2 = totscorePlayer2 + scorePlayer2;
    document.querySelector('#score--1').textContent = totscorePlayer2;
    console.log(totscorePlayer2);
    console.log(totscorePlayer2);
    console.log(scorePlayer2);
    console.log(currentPlayer);
    scorePlayer2 = 0;
    document.querySelector('#current--1').textContent = scorePlayer2;
    if (totscorePlayer1 >= 100) {
      document.querySelector('.btn--hold').disabled = true;
      document.querySelector('.btn--roll').disabled = true;
      document.querySelector('.player--0').classList.add('player--winner');
      document.querySelector('#name--0').classList.add('player--winner');
    } else if (totscorePlayer2 >= 100) {
      document.querySelector('.btn--hold').disabled = true;
      document.querySelector('.btn--roll').disabled = true;
      document.querySelector('.player--1').classList.add('player--winner');
      document.querySelector('#name--1').classList.add('player--winner');
    }
    activatePlayer1();
  }
});

document.querySelector('.btn--roll').addEventListener('click', function () {
  diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log('Inside the btn-roll!');

  diceImage[0].classList.remove('hidden');

  if (diceNumber === 1) {
    document.querySelector('.dice').src = dice1;
    if (currentPlayer === 'player1') {
      activatePlayer2();
      scorePlayer1 = 0;
      document.querySelector('#current--0').textContent = scorePlayer1;
    } else if (currentPlayer === 'player2') {
      activatePlayer1();
      scorePlayer2 = 0;
      document.querySelector('#current--1').textContent = scorePlayer1;
    }
  } else if (diceNumber === 2) {
    document.querySelector('.dice').src = dice2;
    if (currentPlayer === 'player1') {
      scorePlayer1 = scorePlayer1 + 2;
      document.querySelector('#current--0').textContent = scorePlayer1;
    } else if (currentPlayer === 'player2') {
      scorePlayer2 = scorePlayer2 + 2;
      document.querySelector('#current--1').textContent = scorePlayer2;
    }
  } else if (diceNumber === 3) {
    document.querySelector('.dice').src = dice3;
    if (currentPlayer === 'player1') {
      scorePlayer1 = scorePlayer1 + 3;
      document.querySelector('#current--0').textContent = scorePlayer1;
    } else if (currentPlayer === 'player2') {
      scorePlayer2 = scorePlayer2 + 3;
      document.querySelector('#current--1').textContent = scorePlayer2;
    }
  } else if (diceNumber === 4) {
    document.querySelector('.dice').src = dice4;
    if (currentPlayer === 'player1') {
      scorePlayer1 = scorePlayer1 + 4;
      document.querySelector('#current--0').textContent = scorePlayer1;
    } else if (currentPlayer === 'player2') {
      scorePlayer2 = scorePlayer2 + 4;
      document.querySelector('#current--1').textContent = scorePlayer2;
    }
  } else if (diceNumber === 5) {
    document.querySelector('.dice').src = dice5;
    if (currentPlayer === 'player1') {
      scorePlayer1 = scorePlayer1 + 5;
      document.querySelector('#current--0').textContent = scorePlayer1;
    } else if (currentPlayer === 'player2') {
      scorePlayer2 = scorePlayer2 + 5;
      document.querySelector('#current--1').textContent = scorePlayer2;
    }
  } else {
    document.querySelector('.dice').src = dice6;
    if (currentPlayer === 'player1') {
      scorePlayer1 = scorePlayer1 + 6;
      document.querySelector('#current--0').textContent = scorePlayer1;
    } else if (currentPlayer === 'player2') {
      scorePlayer2 = scorePlayer2 + 6;
      document.querySelector('#current--1').textContent = scorePlayer2;
    }
  }
  console.log(scorePlayer1);
  console.log(scorePlayer2);
});
