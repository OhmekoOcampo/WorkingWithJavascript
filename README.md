# WorkingWithEventJS
Trying to Understand How Events Work in JavaScript.

Notes: 
311. Working with "preventDefault()"

The default action of a form tag is to send information within it to your server. 

312 + 313 Understanding "Capturing" & "Bubbling" Phases
All EventListeners are by default does bubbling phases. 

Adding a true to the addEventListner, any one of them tells the browser to do a capturing phase instead. 

If you don't want a Listener to propagate outward and possibly trigger other events just use event.stopPrpagation();

314. Using Event Delegation