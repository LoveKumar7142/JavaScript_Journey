console.log("operators");

// Airthmatic operator

console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log(5 ** 3);

// Question -> price = 150 , quantity = 5, discount on total price = 10% and find discounted cost price

let price = 150;
let quantity = 5;

let total_price = price * quantity;

console.log(total_price);

let discount = (total_price * 10) / 100;

let discounted_price = total_price + discount;

console.log(price);
console.log(quantity);
console.log(discount);
console.log(discounted_price);


// Assignment operator

let x = 5
// 5 is assigning to the x
console.log(x)

x += 2  // x = x + 2

console.log(x)

x -= 3 // x = x - 3

console.log(x)

x *= 5 // x = x * 5

console.log(x)

x /= 5 // x = x / 5

console.log(x)

x %= 3 // x = x % 3

console.log(x)

x **= 4 // x = x ** 4

console.log(x)




// comparision operator

// Loosely equal
console.log(5 == '5')  // It only check value

// strictly equal
console.log(5 === '5')  // It check value as well as datatype

// Loosly not equal
console.log(5 != '5')

// strictly not equal
console.log(5 !== '5')

// grater than
console.log(5 > 2)

// Less than
console.log(5 < 3)

// Greater than or equal to
console.log(5 >= 5)

// Less than or equal to
console.log(5 <= 3)



// Logical Operator

// AND -> && (both must be true)
console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)


// OR -> || (etner one is true)
console.log(true || true)
console.log(false || true)
console.log(true || false)
console.log(false || false)

// NOT -> ! (flip true/false)
console.log(!true)
console.log(!false)

// Increment / Decrement

y = 10
// post increment
console.log(y++) // print y = 10 then y = y + 1
console.log(y) // print y = 11

// post decrement
console.log(y--) // print y = 11 then y = y - 1
console.log(y) // print y = 10

// pre increment
console.log(++y) // y = y + 1 then print y = 11

// pre decrement
console.log(--y) // y = y - 1 then print y = 10


// Ternary operator
let age = 18
let vote = age >= 18 ? "normal" : "under_age"

console.log(vote)



// Question -> person driving car or not if the person has more than or equal to 18 so it can drive the car else not
let person_age = 19

let result = person_age >=18 ? "driving car" : "Not driving car"

console.log(result)


// Question -> yor are eligible for msg or not if the person is logged in then he will be able to send msg esle not

let email = ""
let password = ""

let message = (email && password) ? "login successfully" : "Please log in first"

console.log(message)

// Find largest number in three numbers

let a = 50,b = 100,c = 30

console.log(((a>b) && (a > c)) ? a: b > c ? b :c)

console.log(a > b?(a>c?a:c):(c<b?b:c))



// Bitwise Operators

let p = 30,q = 40

// bitwise AND
console.log(p&q)

//bitwise OR
console.log(p|q)

//bitwise NOT
console.log(~p)

// bitwise XOR
console.log(p^q)

// Left shift

console.log(p<<2)


//right shift

console.log(p>>q)


// Nullish Coalescing Operator (??)

// It returns the right-hand value only if the left-hand value is:

//    1. null

//    2. undefined

// Otherwise, it returns the left-hand value.

let a1 = 0
let a2 = 10

let res = a1 ?? a2

console.log(res)