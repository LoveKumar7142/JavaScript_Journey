/*
! Event Handling
    ? Phase 1
        * 1) Event
        * 2) EventListen
        * 3) Different events
        * 4) Event Object
        * 5) Projects (not right now ook)
    ? Phase 2
        * Performance Oriented 
            -> Event life cycle
            -> Event propagate
            -> Event bubbling
            -> Event capturing
            -> Event tickling  
            -> Event Daligation
*/

//! Event Handling -> An Event in js is something that happpens in browser. like a user clicking a button or moving the mouse.

/*
    ? Example
        ! 1) Mouse events (click, hover, double click, etc.)
        ! 2) Keyboard events (keypress, keyup, keydown,etc)
        ! 3) form events (submit, focus, input, etc)
*/

/*
    ! we can handle event using following three methods:
        ? 1) Inline method (inline javascript) ✅ Done in html

        ? 2) property method / Direct Event Assignment method ✅ 

        ? 3) Listener method

*/

//! NOTE : You can monitor events using "monitorEvents(document" and unmonitor using "unmonitorEvents(document)"

//! Property methods -> Higher Priority than inline css

/*
    ! 1) onclick = () => {logic}
    ! 2) ondblclick  = () => {logic}

*/

//? Demerit of property method if we use two click method on same class so the last one is override the above method not run all methods ook 


//? You can't add multiple handlers for the same event on the same element using property method 


let secondBtn = document.getElementsByClassName("secondBtn")[0];
// let secondBtn = document.querySelector('.secondBtn')
console.log(secondBtn);

secondBtn.onclick = () => {
  console.log("This is property method click");
};

secondBtn.ondblclick = () => {
  console.log("This is propery method for double clicked");
};

//! "Event Listner method" or "morden event handling"

//! node.addEventListner(event, function)

//! we can apply same event multiple time at same time 

let thirdBtn = document.getElementsByClassName('thirdBtn')[0]

console.log(thirdBtn)

thirdBtn.addEventListener('click', () => {
    console.log("1st event Listner method called")
})

thirdBtn.addEventListener('click', () => {
    console.log("2st event Listner method called")
})


thirdBtn.addEventListener('click', () => {
    console.log("Hello")
})




//! we can easily remove the event like we add that ook by creating the reference

let showConsole = function () {
    console.log("hii reference function")
}

thirdBtn.addEventListener('click',showConsole)

thirdBtn.removeEventListener('click',showConsole)



//! ----------------- Event Object -------------

//! The event object is an object that is automatically passed to the event handler function when an event occurs.

//! It contains important information about the event, such as what triggered the event, the type of the event, and other details like the mouse coordinates, key pressed, and  more.

thirdBtn.addEventListener('click',(event) => {
    console.log(event) //? it will return the event object where we can search all type of event like click

    console.log(event.type) //! it will give the answer click

    console.log(event.target) // it will return the html that will targeted by this event listner(<button class="thirdBtn">3rd Morden Event Handling</button>)
})



let fun = function(event) {
    console.log("call event by reference")
    console.log(event)
}

 
thirdBtn.addEventListener('click',fun);








