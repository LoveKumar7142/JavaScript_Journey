//! Most Used Event

let h1 = document.querySelector('h1')
let btn = document.querySelector('.most_used_events')
let box = document.querySelector('.box')

let input = document.querySelector('.name')
let form = document.querySelector('form')

let submitBtn = document.querySelector('.submitBtn')

/*
    ! Mouse Events
        ? 1) click -> fired when an element clicked
        ? 2) dblclick -> triggered by a double click
        ? 3) mousedown -> when mouse button is pressed
        ? 4) mouseup -> when mouse button is released
        ? 5) mouseenter -> Mouse enters an element (no bubbling)
        ? 6) mouseleave -> Mouse leaves an element (no bubbling)
        ? 7) mouseover -> Mouse moves over an element or its children
        ? 8) mouseout -> Mouse leaves an element or its children
        ? 9) mousemove -> Mouse is moved within an element
        ? 10) mousemenu -> Mouse is moved within an element
        ? 11 contextmenu -> Right mouse button is clicked
*/




btn.addEventListener('mousedown',function(){
    console.log("mouse down")
})
btn.addEventListener('mouseup',function(){
    console.log("mouse up")
})

box.addEventListener('mouseenter',()=>{
    console.log("mouse enter ho gya hai")
})

box.addEventListener('mouseleave',()=>{
    console.log("mouse leave ho gya hai")
})

box.addEventListener('mousemove',() => {
    console.log("mouse move")

    //! coordinates

})


// both are woring when clicking right mouse button
box.addEventListener('contextmenu', () => {
    console.log("context menu")
})

box.addEventListener('auxclick', () => {
    console.log("aux click")
})




/*
    ? Keyboard Events
        ! 1) keydown -> key is pressed down
        ! 2) keypress -> (Deperecated) key that produces a character is passed 
        ! 3) keyup -> key is released
*/


btn.addEventListener('keypress', () => {
    console.log("key press hua h hamara")
})

btn.addEventListener('keyup', () => {
    console.log("Key up hua h")
})

btn.addEventListener('keydown', () => {
    console.log("key down hua h")
})

input.addEventListener('keypress',() => {
    console.log("key press hua h hamara")
})

input.addEventListener("keyup",()=>{
    console.log("Key up hua h hamara")
})

input.addEventListener('keydown',()=>{
    console.log("key down hua h hamara")
})

/*
    ? Form Events
        ! 1) submit -> form is submitted
        ! 2) reset -> form is reset
        ! 3) focus -> Element recieves focus
        ! 4) blur -> Element loses focus
        ! 5) input -> Value changes (real-time)
        ! 6) change -> Value of form element changes(on blue)

*/

// submit 
// this is not workin because we do not work on submit button instead of form
submitBtn.addEventListener('submit', (event) => {

    // our browser is reload when we click on submit button so to stop this we use event.preventDefault();

    event.preventDefault()
    console.log("submit ho gya")
})

// it will work
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    console.log("submit ho gya")
})


input.addEventListener('focus',() =>{
    console.log("Focus ho gya h")
})

input.addEventListener('blur',() => {
    console.log("input se ab hat gya h focus")
})


// ye real time pr value return krta h 
// basially used to check real time value like password
input.addEventListener('input',() => {
    console.log("value aa raha h")

    // for value
    console.log("Value : ",input.value)
})

// this return the full value at once when we remove the focus (in blur condition)
input.addEventListener('change',() => {
    console.log("value : " , input.value)
})




/*
for Mobile or Touch screens  (it will work to inspect and select dimensions on mobile ook )
    ? Touch Events
        ! 1) touchstart -> finger touches the screen.
        ! 2) touchmove -> finger moves on screen.
        ! 3) touchend -> finger is removed from screen.
        ! 4) touchcancel -> Touch interrupted (e.g., alert on system event).


*/


box.addEventListener('touchmove', () => {
    console.log("Touch move ho raha h ")
})

box.addEventListener('touchstart', () => {
    console.log("Touch start ho raha h ")
})

box.addEventListener('touchend', () => {
    console.log("Touch end ho raha h ")
})

box.addEventListener('touchcancel', () => {
    console.log("Touch cancel ho raha h ")
})



/*
    ? Window Events
        ! 1) load -> page and resources fully loaded
        ! 2) DOMContentLoaded -> DOM is fully loaded (without waiting for styles/images)
        ! 3) resize -> window is resized (window width and height resize)
        ! 4) scroll -> page is scrolled

*/

//! Scroll event on window if you want to do something on scroll

window.addEventListener('scroll',() => {
    console.log("scroll ho raha h")
})


window.addEventListener('load',() => {
    console.log("screen ko reload krne pr load ho raha h")
})


window.addEventListener('resize',() => {
    console.log("screen ki height width change krne pr resize ho raha h")
})





/*
    ? clipboard Events
        ! 1) copy -> content is copied
        ! 2) cut -> content is cut
        ! 3) paste -> content is pasted

*/



h1.addEventListener('copy', () => {
    console.log("ye copy hoga")

    // copied actual value console
    console.log(window.getSelection().toString())
})


