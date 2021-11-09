'use strict';

//Meko Tip: Select the Elements you want to work with first and store them in variables.

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); //no need for the . like we do for classes we select with querySelector.
  overlay.classList.remove('hidden');
  //modal.style.display = 'block'; //If we didn't have classes then we would have to change each style one by one. For example - in the .hidden class you have display: none, setting display to block will unhide the element.
};

console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden'); //no need for the . like we do for classes we select with querySelector.
//     overlay.classList.remove('hidden');
//     //modal.style.display = 'block'; //If we didn't have classes then we would have to change each style one by one. For example - in the .hidden class you have display: none, setting display to block will unhide the element.
//   });
// }

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModel);
}

//Meko Tip: Adding and Removing classes is the main way of manipulating webpages. Best way to aggregate a bunch of css styles.

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//Meko Tip: closeModal is the function name. If you say closeModal() you are calling the function and it will be executed as soon as this javascript file is ran. However, if you remove the () the function is called when click event happens.

//Meko Tip: Keyboard Events are classified Global Events, they don't happen on one specific element.

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
    console.log('Esc was pressed');
  }
}); //Whole page event listener.

//Meko Tip: When an event occurs, JavaScript creates an object for that event and we can access that object in the event handler function. In order to access this event object, you will want to give the function to your EventListener a parameter like "e" or "event". What's going on is when the EventListener hears an event, JavaScript engine will give you the event as an argument to the function you defined in the associated EventListener.
