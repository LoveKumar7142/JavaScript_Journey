//! ============ String ============

//* String :- String is a piece of text. It can be word, a sentence, a single letter, or empty---anything made of characters. In JS, we write a string by putting text inside the quotes.


"School4U"
'javaScript'
"123"
""

//* You can use double quotes (" "), single quotes (' '), or backticks().
let greeting = "Hello, world!";
let name = 'Ali';
let empty = "";
let sentence = `My name is  ${name}`;      //? ${name} -> placeholder 

//? (``) -> Template Laterals => a template literal is a special way to wrote strings in javaScript using backticks(`).

//? String laterals let you insert variables or expressions directly inside the string, which is called string interpolation.


//todo 1.practice
let str = "Love"
let str2 = 'Love'
let str3 = `Love`

console.log(str)
console.log(str2)


console.log(str, typeof (str))
console.log(str2, typeof (str2))
console.log(str3, typeof (str3))

//todo 2.concatination

let alpha = "Love" + 56 + "Kumar"

let beta = 'Halwa' + alpha;


console.log(alpha)

console.log(beta)

//todo 3.backticks

let firstname = "Love"

let middlename = "Kumar"

let lastname = "bhai"

let fullname = firstname + middlename + lastname;

console.log(fullname)

let fullname2 = `My name is ${firstname} ${middlename} ${lastname}`
console.log(fullname2)


let strl = `number ${39}`
console.log(strl)

//* ye jo backtics ka hum use kr rahe h una hum template letrals and vo variable uske aandar likh rahe h usa bolte h string inter polation

//* stringInterPolation = when er isert the value in string using template laterals that is know as stringInterPolation

//* ${variable}  => placeholder

//* we can do calculation in string using template laterals 
let gama = `str = ${5 + 9 + 10}`
console.log(gama)



//todo 4.create string using string constructor method

let strk = new String("Love")
//* it create string in object format with indexing that starts with 0 and it give the length 
console.log(strk)
//* It returns the object of string

//* Note:  string has index (position) that starts with 0 and it also have nagative indexing that starts with -1 from the end;

//* note : String are immutable in javascript

//todo 5.Escape sequence

//  \n -> It create a new line 
str = "hello \n how are you"
console.log(str)

// .length function it creates the length of string

console.log(str.length)


// how to add double quotes in a string

str = 'hii I am "love"'
console.log(str)

str = "hii i am \" Love \""

console.log(str)

// how to enter \n in a string

str = "Hii i am love \\n"
console.log(str)

// Note : strings are immutable : we unable to change orinal string

str = "Hello World"

console.log(str[1])
console.log(str[2])

str[2] = 'Y'

console.log(str)



// it helps to print characters of string
for (let ch of str) {
    console.log(ch)
}


//  it helps to print indeces of string 
for (let key in str) {
    console.log(key)
}


// i want to change string its possible by the help of new string
let newStr = "";
for (let ch of str) {
    newStr += ch + " ";
}
console.log(newStr)

//! String Properties and methods 
//? in properties we cant use closed bracket in the end of property name to call that

//? in method we always use to closed bracket in the end of the name of mentod to call
// Properties
console.log(str.length)


//methods
console.log(str.toUpperCase())
console.log(str) // my original string is not change so all that methods we use there it returns the new string as copy ook not that original string because string is immutable nobody can change this ook 

console.log(str.toLowerCase())

str = "                 He      llo           Love           Bhai"
console.log(str.trim())// it remove all the spaces except 1 space between two characters 

let fullName = "Love Kumar"
let LastName = "Bhai"
console.log(fullName.concat(" ", LastName, ", are you ook"))


str = 'I am a boy'
// now we can find any substring so use .includes(check_substring) and returns boolean value

console.log(str.includes("boy"))


console.log(str.indexOf("a")) // it returns the specific index character string if it return -1 so there is not present in string ook

console.log(str.charAt(0)) // give index and it returns the character present in that index

console.log(str.replace("boy", "Girl"))  // it replare 1st boy search ook 

console.log(str.replaceAll("a", "o"))


// Now i want to cut the string use slice

let username = "@Love Kumar"

console.log(username.slice(1)) // it gives 1 to last ook 
console.log(username.slice(1, 6)) // it gives 1 to 6-1 ook 
console.log(username.substring(1, 6)) // it gives 1 to 6-1 ook 


// difference between slice and substring

console.log(username.slice(-8, 11))

console.log(username.substring(-8, 11)) // it neglet the negative string

str = "alpha beta gamma"

console.log(str.split()) // it hepls to conver in array it convert in single element array

// i want to split by space

console.log(str.split(" "))

//i want to split by character

console.log(str.split(""))

//i want to split by a

console.log(str.split("a"))


//! Practice Questions 

fullname = prompt("Enter your name :");

// method chaining -> add function then again implement again another method same as continue 

alert(`userId : @${fullname.trim().replace(" ", "")}_${fullname.length}`)


// Take a string and a character from user and :
// a) count how many times that character appears in this string
// b) Case insensitive

let str = prompt(`Enter the string : `);
let character = prompt(`Enter the character or sting : `)
let count = 0;

for (let val of str) {
    if (ch.toLowerCase() === character.toLowerCase()) {
        count++;
    }
}

console.log(`The character "${character}" appears "${count}" times in the string "${str}"`);

// c) Find All Occurrence position

count = 0;
for (let index in str) {
    if (str[index].toLowerCase() === character.toLowerCase()) {
        count++;
        console.log(`The character "${character}" appears at index "${index}" in the string "${str}"`);
    }
}

// 3) Count the words present in a given string
str = "Hello I am Love Kumar";

console.log(str.split(" ").length);









