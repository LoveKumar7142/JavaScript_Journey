//! Arrray -> An array is a list that can store multiple values in one place.
//!           Think of it like a row of boxes, where each box can hold one item(like a number, word, etc).
//!           You can use it to group similar things together.


let marks = [10,20,50,80]
let color = ["red, green, blue, yellow"]
let personal_detail = ["Love", 30, "Ghaziabad"]

let arr = new Array("spiderman","ironman","black panther")//! Array constructor is mostly used when we want to create an empty array with the given length


console.log(marks)
console.log(color)
console.log(personal_detail)
console.log(arr)



let arr2 = ["hello",["i am love"], "i am good"]


// difference between normal array and array contructor

let normalArr = [20] // it is an array that have an element 20
let constructorArray = new Array(20) // it is 20 size array 
constructorArray2 = new Array(20).fill(0)

console.log(normalArr.length)
console.log(constructorArray.length)
console.log(constructorArray2.length)

console.log(normalArr)
console.log(constructorArray)
console.log(constructorArray2)

//* indexing in array 
// array -> [1,2,4,5,"Hello", true, null]
// index ->  0 1 2 3    4       5     6

console.log(typeof arr) 
//! the type of an array is an object. it is an special type of object 


//! Array is mutable 

arr = ["hello","i", "am"]
arr[1] = "I"

console.log(arr)


arr = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}

for(let element of arr){
    console.log(element)
}

for(let index in arr){
    console.log(index)
}


arr = [1,2,3,"ml",8]

console.log(arr, arr.length)
arr.push(999)
console.log(arr, arr.length)

// arr.pop()
let b = arr.pop()

console.log(arr, arr.length, b )

//! push and pop -> insert and remove element from back

//! unshift and shift -> insert and remove element from front

arr.unshift(59)
console.log(arr,arr.length)

// arr.shift()
b = arr.shift()
console.log(arr,arr.length,b)


let newArray = arr.slice(1,3)
let newArray2 = arr.slice(-5,3)
console.log(arr)
console.log(newArray)
console.log(newArray2)


// .splice(index, count of deletion (when you dont want to delete any thing only add so use zero(0) in this place), what do you want to add add with comma(,) (if do you want to add nothing in this array so do not write anything in here))

let test2 = arr.splice(3,2)
console.log(arr)

let test = arr.splice(3,0,98,34,54,643,"hello", true)
console.log(arr)

// return deleted element
console.log(test)
console.log(test2)

let newArrayConcat = arr.concat(arr2,personal_detail)
console.log(arr)
console.log(newArrayConcat)

//! you can use spread operator when you are using concat function 

//! spread operator -> ... eska mtlv h ki jaise koi glass h uda foda to uski cheeze poori spread ho gai same add esa he hum new array me krange ook 

let newArrayConcatWithSpread = [...arr,...arr2, ...personal_detail]

console.log(newArrayConcatWithSpread)

let fruits = ["mango", "lichi","guavava","mango","papaya"]

let test3 = fruits.join()
// join is used for to convert string from array

let test4 = fruits.join(" & ")
console.log(test3)
console.log(test4)


// .includes() is used for search that element are present or not
let bool = fruits.includes("lichi")
console.log(bool)


// .tostring() -> this is used to convert array into string and we can not define how we can saperate that elements like join method

let arrayToString = fruits.toString()
console.log(arrayToString)

console.log(arrayToString, typeof arrayToString);



console.log(fruits.indexOf("lichi"))

console.log(fruits.reverse())  // it change in actual array

//! console.log(fruits.find("mango")) // we cant be able to write like this ook ❌

let test5 = fruits.find(function
    (item){
        return item === "mango"
        
    }
)
console.log(test5) // if item match so it return that item then it return undefine



let heroes = ["spiderman",["hulk","hawkeye",["Love"], "thor"]]

console.log(heroes)


//! i want to convert in a single array so use .flat() method it wil not change in actual array it will return new array

// .flat(level) -> how many level you want to break but if you dont know about that so use infinite it breaks in an single array ook 

let newFlatArray = heroes.flat()
console.log(newFlatArray)

newFlatArray = heroes.flat(Infinity)

console.log(newFlatArray)



//! destructuring


arr = [1,"hello", {name : "something"}]

let [item1,item2,a] = arr

console.log(item1,item2,a)








