/*
const button = document.querySelector('button');

//button.onclick = function() {} //onclick attribute for html tag has a property equivalent.

const buttonClickHandler = event => {
    console.log(event);
}; 
*/
/*
const anotherButtonClickHandler = () => {
    console.log('This was clicked!');
}

button.onclick = buttonClickHandler // A disadvantage to this would be you can only have one function per onclick.
button.onclick = anotherButtonClickHandler // This will overwrite the other function assignment earlier.
*/

//button.addEventListener(); // Allows you to add multiple event listneers to an element.
//button.removeEventListener(); // Allows you to remove mutiple event listneers from an element.
/*
button.addEventListener('click',buttonClickHandler);

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
}, 2000)
*/
/*
If lets say you had a addEventListner but instead of assigning the function to a name
you live it as anonymous. 

button.addEventListener('click', () => { console.log('Clicked!');
});

() => { console.log('Clicked!'); } === () => { console.log('Clicked!'); }
That is not equal, due to the nature of anonymous functions.

307. Removing Event Listners another good example of bind. 

*/

//Look at MDN web docs for more information about events. 

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event);
}); //listen for submit event from form element. This however will only briefly show your content in the
//console window but it will disappear because the data will be sent to the "server" then page will reload.

const div = document.querySelector('div');
const button = document.querySelector('button');


div.addEventListener('click', event => {
    console.log('Clicked DIV');
    console.log(event);
});

button.addEventListener('click', event => {
    event.stopPropagation();
    console.log('Clicked Button');
    console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
/*
listItems.forEach(listItem => {
    listItem.addEventListener('click', event => {
        event.target.classList.toggle('highlight');
    })
});
*/

list.addEventListener('click', event => {
    //314.
    //console.log(event.currentTarget); //Where currentTarget is the ul tag in this case.
    //event.target.classList.toggle('highlight');
    //event.target.closest('li').classList.toggle('highlight'); //closest exists on all dom objects and traverses the ancestor tree. 
    //315.
    event.target.closest('li').classList.toggle('highlight');
    //form.submit(); //has the disadvantage of not doing the form.addEventListener above.
    button.click();
});

