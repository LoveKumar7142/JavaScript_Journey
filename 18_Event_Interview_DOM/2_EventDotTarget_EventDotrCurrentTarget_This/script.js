/*
    ? 1) event,target
            ! Identifing which child element wad clicked or inteacted with
            ! Hinglish -> vo current element jispr ap click kr kr rahe ho 
 
    ? 2) event.currentTarget
            ! Always point to the element where the listner is attetched. regardless of where the event originated or which element triggered it.
    
    ? 3) this
            ! Refers to the context in which the function is executed. Inside an event listner, this points to the element to which the element listner was attached (The element where addEventListner was used)


*/

let grandParent = document.querySelector('.grand-parent')
let parent = document.querySelector('.parent')
let child = document.querySelector('.child')


grandParent.addEventListener('click',(event)=>{
    console.log("grand-parant")
    console.log("event.target  : ",event.target)
    console.log("event.currentTarget : ", event.currentTarget)

})


parent.addEventListener('click',(event)=>{
    console.log("Parent")
    console.log("event.target  : ",event.target)
    console.log("event.currentTarget : ", event.currentTarget)
})

child.addEventListener('click',(event)=>{
    console.log("Child")
    console.log("event.target  : ",event.target)
    console.log("event.currentTarget : ", event.currentTarget) 
})


//! this -> agar normal function h to this current target ki taraha kam krega but if you use fat arrow function then it will return window object 

parent.addEventListener('click',(event)=>{
    console.log("Child")
    console.log("event.target  : ",event.target)
    console.log("event.currentTarget : ", event.currentTarget) 
    console.log("(this) -> it will give you window object because we use fat arrow function here in eventListner : ",this)
})

parent.addEventListener('click',function(event){
    console.log("Child")
    console.log("event.target  : ",event.target)
    console.log("event.currentTarget : ", event.currentTarget) 
    console.log("(this) -> it will give you currentTarget element because we have used here normal function here in eventListner : ",this)
})