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

const x = function () {
  console.log(23);
};

//Example 1:
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value); //This function will only be called only if the click event happens on this button object with class "check"
//   document.querySelector('.message').textContent = 'Correct Number!';
// });

//Example 2:
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //This function will only be called only if the click event happens on this button object with class "check"
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
