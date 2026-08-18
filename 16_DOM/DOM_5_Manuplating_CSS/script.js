let div = document.querySelector('div')

//! 1st method
div.setAttribute('class','redBg')

div.setAttribute('style','background-color : blue; color : #fff')



//! second method

div.style.backgroundColor = 'red'

//! 3rd method -> node.style.cssText = 'properties'

div.style.cssText = 'font-size:50px; border: 10px solid skyblue;'

//! 4th method -> node.className to add class

div.className = 'redBg'
console.log(div.className)

//! 5th method -> very Important because upper methods that will replace the attribure ook but it will concatinate
//? i want to add new class

div.classList.add('redBg')
div.classList.add('blueBg')

console.log(div.className)


//? i want to remove a class

div.classList.remove('redBg')

//? if i want to check class is present or not 

let isAvilable = div.classList.contains('redBg')

console.log(isAvilable)

//? i want to add toggle -> add one time remove 1 time 
div.classList.toggle('blueBg')
div.classList.toggle('blueBg')
div.classList.toggle('blueBg')
div.classList.toggle('blueBg')

console.log(div.className)



//? Question 1 ) Create a simple website with theme changing functionality

let button = document.createElement('button')
button.innerText='Theme'
let body = document.querySelector('body')

body.prepend(button)

let theme = 'light'
// button.addEventListener('click', () => {
//     if(theme === 'light'){
//         body.style.backgroundColor='black'
//         body.style.color = '#fff'
//         theme='dark'

//     }else{
//         body.style.backgroundColor='#fff'
//         body.style.color = '#000'
//         theme='light'
//     }
// })

//? Question 2 ) Solve first question by changing css class


// button.addEventListener('click',() => {
//     if(theme === 'light'){
//         body.setAttribute('class','darkTheme')
//         theme = 'dark'
//     }else{
//         body.setAttribute('class','lightTheme')
//         theme = 'light'
//     }
// })


console.log(body)



//? Solve the first question by toggle css class

button.addEventListener('click',() => {
    body.classList.toggle('darkTheme')
})


