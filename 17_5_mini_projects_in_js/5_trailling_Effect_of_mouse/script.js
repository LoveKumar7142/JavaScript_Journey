// brute force approach

// let smallCursor = document.querySelector('.smallCursor')
// let shadowCursor = document.querySelector('.shadowCursor')

// let mouseX = 0;
// let mouseY = 0;
// let animateId = null;
// let timer = null;

// document.addEventListener('mousemove',(eventObj)=>{
//     const {clientX,clientY} = eventObj;
//     mouseX = clientX;
//     mouseY = clientY;
//     smallCursor.style.left = mouseX + 'px'
//     smallCursor.style.top = mouseY + 'px'

//     if(!animateId) animateShadow()

//     clearTimeout(timer)
//     timer = setTimeout(()=>{
//         cancelAnimationFrame(animateId)
//         animateId = null;
//     },2000)
// })

// function animateShadow () {
//     let clintX = parseFloat(shadowCursor.style.left) || 0;
//     let clintY = parseFloat(shadowCursor.style.top) || 0;

//     let distanceX = mouseX - clintX;
//     let distanceY = mouseY - clintY;

//     shadowCursor.style.left = clintX + distanceX*0.05 + 'px'
//     shadowCursor.style.top = clintY + distanceY*0.05 + 'px'
//     animateId = requestAnimationFrame(animateShadow)
// }

//batter approach


let smallCursor = document.querySelector('.smallCursor')
let shadowCursor = document.querySelector('.shadowCursor')

let mouseX = 0;
let mouseY = 0;
let shadowX = 0;
let shadowY = 0;
let animateId = null;
let timer = null;

document.addEventListener('mousemove',(eventObj)=>{
    const {clientX,clientY} = eventObj;
    mouseX = clientX;
    mouseY = clientY;

    smallCursor.style.transform =
    `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%,-50%)`;

    if(!animateId) animateShadow()

    clearTimeout(timer)
    timer = setTimeout(()=>{
        cancelAnimationFrame(animateId)
        animateId = null;
    },2000)
})

function animateShadow () {

    shadowX += (mouseX - shadowX) * 0.05;
    shadowY += (mouseY - shadowY) * 0.05;

    shadowCursor.style.transform = `translate3d(${shadowX}px,${shadowY}px,0) translate(-50%,-50%)`
    animateId = requestAnimationFrame(animateShadow)
}


