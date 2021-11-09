'use strict';

///// Selecting Elements on the DOM.

/* 
.querySelector is actually part of the WEB APIs, not part of JavaScript language itself. 

The WEB APIs are created using JavaScript and act as connector between the JavaScript language and the DOM elements rendered by browser.
*/
// console.log(document.querySelector('.message').textContent); //put a .class, #id

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 5;

// console.log(document.querySelector('.guess').value); //For input fields you need the value property, unlike textContent for non-input fields.

// document.querySelector('.guess').value = 23;

///// Event Listener, listening for events that happen in the DOM (aka event handlers)

//Example 1:
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value); //This function will only be called only if the click event happens on this button object with class "check"
//   document.querySelector('.message').textContent = 'Correct Number!';
// });

//Example 2:
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value); //This function will only be called only if the click event happens on this button object with class "check"
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   }
// });

///////////// Starting to Develop the Application of Guess My Number! ///////////

// const x = function () {
//   console.log(23);
// };

// const swap = function (x, y) {
//   //let holder = x;
//   x = y;
//   y = x;
//   return [x, y];
// };

// console.log(swap(2, 3));

// let secretNumber = Math.trunc(Math.random() * 20) + 1; //This is also called a STATE variable. It gives a state of our appication.
// //document.querySelector('.number').textContent = secretNumber;
// let score = 20; //You could have just done let score = document.querySelector('.score').textContent, but this would mean our application would be dependent on the DOM value it's always better to have a copy of the data in our code that's why let score = 20 is a better implementation. This is called a STATE variable.
// let highscore = 0;
// console.log(score, typeof score);

// document.querySelector('.check').addEventListener('click', function () {
//   //Determine what will happen when event click occurs on the html object with class check.
//   //console.log(document.querySelector('.guess').value);
//   console.log(`This is highscore to beat from last game: ${highscore}`);
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';

//     //When there is no valid input.
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem'; //A CSS expects its' .css file to be text or in the case of JavaScript you can use a String.
//     document.querySelector('.number').textContent = secretNumber;
//     if (score > 0 && score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//     //When Player wins.
//   } else if (guess > secretNumber) {
//     //when Guess is too high.
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Tooooo High!! :P!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose!';
//     }
//   } else if (guess < secretNumber) {
//     //when Guess is too low.
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Tooooo Low!! XD!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose!';
//     }
//   }
// }); // ("type of event", function)

// document.querySelector('.again').addEventListener('click', function () {
//   //This EventListener listens for when the user wants to reset the game and play again.
//   document.querySelector('.message').textContent = 'Start guessing...'; //reset message section

//   document.querySelector('body').style.backgroundColor = '#222'; //reset secret number section
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   secretNumber = Math.trunc(Math.random() * 20) + 1; //I forgot to let this be a let instead of const which caused the program to fail here causing the rest of the code (The three statements below) not to be ran.

//   document.querySelector('.guess').value = null; //reset guess number section input

//   //highscore = score; //save current highscore
//   score = 20; //Once you save current highscore then reset score.
//   console.log(`This is the current high score from last game: ${highscore}`);
//   document.querySelector('.score').textContent = score;
// });

///////////// Starting to Develop the Application of Guess My Number! (DRY Version) ///////////

const x = function () {
  console.log(23);
};

const swap = function (x, y) {
  //let holder = x;
  x = y;
  y = x;
  return [x, y];
};

console.log(swap(2, 3));

let secretNumber = Math.trunc(Math.random() * 20) + 1; //This is also called a STATE variable. It gives a state of our appication.
//document.querySelector('.number').textContent = secretNumber;
let score = 20; //You could have just done let score = document.querySelector('.score').textContent, but this would mean our application would be dependent on the DOM value it's always better to have a copy of the data in our code that's why let score = 20 is a better implementation. This is called a STATE variable.
let highscore = 0;
console.log(score, typeof score);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //Determine what will happen when event click occurs on the html object with class check.
  //console.log(document.querySelector('.guess').value);
  console.log(`This is highscore to beat from last game: ${highscore}`);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Number');

    //When there is no valid input.
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; //A CSS expects its' .css file to be text or in the case of JavaScript you can use a String.
    document.querySelector('.number').textContent = secretNumber;
    if (score > 0 && score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When Player wins.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'Tooooo High!! :P!' : 'Tooooo Low!! XD!';
      displayMessage(
        guess > secretNumber ? 'Tooooo High!! :P!' : 'Tooooo Low!! XD!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lose!';
      displayMessage('You lose!');
    }
  }
}); // ("type of event", function)

document.querySelector('.again').addEventListener('click', function () {
  //This EventListener listens for when the user wants to reset the game and play again.
  //document.querySelector('.message').textContent = 'Start guessing...'; //reset message section
  displayMessage('Start guessing...!');

  document.querySelector('body').style.backgroundColor = '#222'; //reset secret number section
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1; //I forgot to let this be a let instead of const which caused the program to fail here causing the rest of the code (The three statements below) not to be ran.

  document.querySelector('.guess').value = null; //reset guess number section input

  //highscore = score; //save current highscore
  score = 20; //Once you save current highscore then reset score.
  console.log(`This is the current high score from last game: ${highscore}`);
  document.querySelector('.score').textContent = score;
});
