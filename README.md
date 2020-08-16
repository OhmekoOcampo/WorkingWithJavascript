# WorkingWithJavaScript
Trying to Understand How Events Work in JavaScript.

Notes: 
311. Working with "preventDefault()"

The default action of a form tag is to send information within it to your server. 

312 + 313 Understanding "Capturing" & "Bubbling" Phases
All EventListeners are by default does bubbling phases. 

Adding a true to the addEventListner, any one of them tells the browser to do a capturing phase instead. 

If you don't want a Listener to propagate outward and possibly trigger other events just use event.stopPrpagation();

314. Using Event Delegation.

315. Trigger an Event Programmatically - Suppose you want to make it so if you click on a list item it sends the form.

316. "this" keyword points to the target. Watch this video again to understand again. 

317. Drag & Drop - Theory 

Steps to make elements draggable and dropped. Then when they are dropped they can do something when dropped.

1. Mark Elements as "draggable". Attribute or directly on property. 
2. Listen to "dragstart" Event. 
3. Accept drop via "dragenter" and "dragover" Events => preventDefault(); //Since typically the browser doesn't allow dropping.
4. Listen to "drop" Event & Update Data/UI.

// May have to go back here and attempt implementation step by step.

