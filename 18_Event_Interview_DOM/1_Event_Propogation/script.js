//! Event Propogation -> event ke tarvel krne ka tareeka 

//? Event propogation describe the way event travel through the DOM after they are triggered. It consistes 3 phases

/*
    ? Event Propogation
        ! 1) Capturing Phase -> The event travels from the root of the DOM(e.g. Document) down to the target element.This is also called trickling phase.

        ! 2) Target Phase -> The event reaches the target element where the event occured.

        ! 3) Bubbling Phase -> The event travels backup from the target element to the root of the dom

                                       |     Grand Parend
                                       |     Parent
                                       |     child

    -> move downword any property from grand parant to child that is known as capturing phase.
    -> when the event reaches the target element where the event occured that is know as taget phase



    ? -> agar humne child pr event triger kiya and humne grandparent pr or parent pr event listner laga rakha h to usme vo capturing hota aaiga grandparent se child ki taraf ook 


*/

// bydefault bubbling face hota h neeche se upper ki tarad but if you want to see capturing phase then you will use true parameter in end of the event listener 

let grandParent = document.querySelector('.grand-parant')
let parent = document.querySelector('.parent')
let child = document.querySelector('.child')


// bubbling phase -> (child to grandparent)

// grandParent.addEventListener('click',() => {
//     alert("Grand Parent click hua")
// })

// parent.addEventListener('click',() => {
//     alert("parent click hua")
// })

// child.addEventListener('click',() => {
//     alert("child click hua")
// })


// Capturing Phase -> (grandparent to child)

grandParent.addEventListener('click',() => {
    alert("Grand Parent click hua")
}, true)

parent.addEventListener('click',() => {
    alert("parent click hua")
}, true)

child.addEventListener('click',() => {
    alert("child click hua")
}, true)