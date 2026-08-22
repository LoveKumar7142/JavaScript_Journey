/*
    ! How to stop bubbling and capturing
    ? 1) event.stopPropagation() -> we use that stop the propagation to move upword from child to grandparent and grandparent to child. We can stop that in and step.But it always run when where the event is triggered ook and when we use stop propagation so it will run all that same class event where we cant use this.
    ? 2) event.stopImmediatePropagation() -> it is same as stopPropagation but it is strict because it use to immediate stop means in that class where we use this so it will not allow other event listner that will code below this to run which is present in same class ook. this is the basic difference of both.

*/

let grandParent = document.querySelector('.grand-parent')
let parent = document.querySelector('.parent')
let child = document.querySelector('.child')


// grandParent.addEventListener('click',(event)=>{
//     console.log("grand-parant")
//     console.log("event.target  : ",event.target)
//     console.log("event.currentTarget : ", event.currentTarget)
    
// })


// parent.addEventListener('click',(event)=>{
//     event.stopPropagation();
//     console.log("Parent")
//     console.log("event.target  : ",event.target)
//     console.log("event.currentTarget : ", event.currentTarget)
// })

// parent.addEventListener('click',(event)=>{
//     console.log("Hello this is another Parent")
// })

// child.addEventListener('click',(event)=>{
//     console.log("Child")
//     console.log("event.target  : ",event.target)
//     console.log("event.currentTarget : ", event.currentTarget) 
// })



//! stopImmediatePropagation

grandParent.addEventListener('click',(event)=>{
    // event.stopPropagation();
    console.log("grand-parant")
    console.log("event.target  : ",event.target)
    console.log("event.currentTarget : ", event.currentTarget)

})


parent.addEventListener('click',(event)=>{
    event.stopImmediatePropagation();
    console.log("Parent")
    console.log("event.target  : ",event.target)
    console.log("event.currentTarget : ", event.currentTarget)
})
parent.addEventListener('click',(event)=>{
    console.log("Hello this is another Parent")
})

child.addEventListener('click',(event)=>{
    console.log("Child")
    console.log("event.target  : ",event.target)
    console.log("event.currentTarget : ", event.currentTarget) 
})
