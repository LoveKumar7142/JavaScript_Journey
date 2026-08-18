//! Function in js

function myFunction(n){
    let sum = 0

    for(let i = 0;i<=n;i++){
        sum += i
    }
    console.log(sum)
}

myFunction(100)


//! Types of function

//* 1. Normal function  -> Declear with the function keyword and it can be hosited

//? Note :- Hosited means when you are decleare that function so it will decleare on top of the code means if you can call this before decleare then you can call easily. like see below 👇

greet(); //? you must be use () beacket to call this function ook if you will not use that bracket so it will give you the address of that function like 

function greet(){
    console.log("Hello World")
}
console.log(greet)

//* 2. Function Expression -> stored in a variable and it cant be hoisted
// greet1() //? It will give you error because you can call before decleare so this is the resion it is not hoisted function ook so you must be call after decleration

let greet1 = function(){
    console.log("Hello World 2")
}
greet1()
console.log(greet1)

//* 3. Arrow or Fat arrow function -> Shorter Syntax, introduced in ES6

const greet3 = () => {
    console.log("Hello world 3")
}

//* 4. Anonymous Function -> A function without a name, often used in expressions

setTimeout(() => {
    console.log("Anonymous Funtion")
}, 2000);   //? here is setTimeout is a highorder function and inside this fat arrow function is anonymous function ant this will run after 2 second

//* 5. IIFE(Immediately Invoked Function Expression) -> A Function that runs as soon as it's defined
//? Note : before using this function you must use semicolon in before statement then you can use this without any error

(function(){
    console.log("Hello I am Immidiate invoked function expression")
})();
//? you can do this also 
(() => {
    console.log("Hello I am Immidiate invoked function expression")
})();


//! Questions of functions

//Todo 1 Write regular function that takes a string and returns it with the first letter captalized.

function firstLetterCaptalized(name){
    console.log(name.charAt(0).toUpperCase() + name.slice(1))
}

firstLetterCaptalized("love")


// todo 2 Show an alert message that says "Please Login" After 5 second on your website

let timeout = 5000;
setTimeout(() => {
    // alert("Please Login")
    console.log("Please Login")
}, timeout);


const priceAfterDiscount = (price, discount) => {
    return price - ((discount/100)*price);
}

console.log(priceAfterDiscount(100,20))


//Todo 3 create a function that takes name and create a username

const username = (name) => {
    return '@' + name.trim().replaceAll(" ","") + name.length;
}

console.log(username("Love kumar"))


const trafficDirection = (color) => {
    return color.toLowerCase() === "green"?"go" : color.toLowerCase() === "red" ? "stop":color.toLowerCase() === "yellow" ? "caution" : "Invalid Color"
}

console.log(trafficDirection("RED"))