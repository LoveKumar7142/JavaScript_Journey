//! 1) For an array wih marks of students find the average marks of the entire class

let arr = [34,54,45,75,86];

let sum = arr.reduce((acc,curr)=>{
    return acc+curr
},0)

let avg = sum/arr.length;

console.log(avg)


//! 2) Create an array with the given length(n) and fill with 0.

let n = 25;
let emptyArray = new Array(n).fill(0)

console.log(emptyArray)

//! 3) create an array with the given length (n) and store natural numbers from 1 to n

n = 50

emptyArray = new Array(n); // it doesnt have any item so if gives undefine so foreach loop doesnot work in this array ook 

// emptyArray.fill(0);   // we can also use it in before . in forEach loo

emptyArray.fill(0).forEach((item,index) => {
    emptyArray[index] = index+1;
})

console.log(emptyArray)


//! 4) Consider an array of mcu heroes 
    //! a) Add spiderman at the end and thor at the first.
    //! b) Remove black widow and add hawkeye in its place.
    //! c) check whether captain in present in the array

let heroes = ["ironman", "caption america", "black widow" ,  "hulk"]

heroes.push("spiderman")
heroes.unshift("thor")

console.log(heroes)
let ind = heroes.findIndex(item => item === "black widow")

console.log(ind)

heroes.splice(ind,1,"hawkeye")

console.log(heroes)
console.log(heroes.includes("caption america"))

//! 5) How to check if given thing is array or not? How to convert other datatype to array? what if we try to convert an object into an array?

let test = 34

console.log(Array.isArray(test))

test = "Love"

console.log(Array.from(test))


//? we can not convert object and number into array we can convert an string into array 

test = {
    name: "Love",
    rollNo : 10
}

console.log(Array.from(test)) // empty array


//! 6) We have three variables a,b,c,d. a contains any number, b contains any string, c contains any object, and d contains any array. Can you create an array from all these four variables? If yes, How?

let a = 34
let b = "Love"
let c = {
    batchNo : 203,
    post : "Army cheaf"
}
let d = [2,"Hii",true,null,{key: 10,value : "Kush"}]

const fullArray = Array.of(a,b,c,d)

console.log(fullArray)
console.log(fullArray.flat(Infinity))

//! 7) Check weather given string is pallindrom or not?

let str = "hello"
let str2 = Array.from(str).reverse().join("")


// let str3 = str.reverse();
// console.log(str3)  // not work

let str4 = str.split("").reverse().join("")

console.log(str4)
console.log(str2)


console.log(str === str2)


str === str2 ? console.log("Pallindrom") : console.log("Not a Pallindrom")

console.log(str === str4)

str === str4 ? console.log("Pallindrom") : console.log("Not a Pallindrom")



//! 8) captalize the first letter of every word in a sentence.

str = "hello how are you"

str2 = str.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")

console.log(str2)

