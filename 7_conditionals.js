//! Question 1 -> create a program where you have to find the amount when the people but more than $50 and less than $100 product so that will take 10% discount and more that so 20% and less than normal price

// let price_of_products = 100
// let final_price = 0

// if(price_of_products < 50)
//     final_price = price_of_products
// else if(price_of_products > 50 && price_of_products < 100)
//     final_price = price_of_products + (0.1 * price_of_products)
// else
//     final_price = price_of_products + (0.2 * price_of_products)

// console.log(final_price.toFixed(2))


//! Question 2 -> check subscription in a video streaming platform


// const isSubscribed = true

// const sub = "premium"

// if(isSubscribed){
//     if(sub === "premium"){
//         console.log("You can access premium content")
//     }else if(sub === "standard"){
//         console.log("you can access limited content")
//     }
// }else{
//     console.log("invalid user")
// }


//! Question 3 -> change themes 

// let theme = "white"

// theme = prompt("Enter your theme in this(while,blue,black,green)")

// if(theme === "white"){
//     console.log("you are in white theme")
// }else if(theme === "blue") console.log("you are in blue theme")
// else if(theme === "black") console.log("you are in black theme")
// else if(theme === "green") console.log("you are in green theme")
// else console.log("invalid input")

// if(theme !== "white" && theme !== "blue" && theme !== "black" && theme != "green"){
//     console.log("please choose valid theme")
// }else{
//     console.log(`You are choosing ${theme}`)
// }

//! Question 4 -> find smallest number in there number input taken from user 
// let num_obj = {
//     num1 : Number(prompt("Enter the first number : ")),
//     num2 : Number(prompt("Enter the second number : ")),
//     num3 : Number(prompt("Enter the third number : "))
// }
// let {num1,num2,num3} = num_obj
// console.log((num1 < num2) && (num1 < num3) ? num1 : (num2 < num3) ? num2 : num3)

// console.log(num1 < num2 ? (num1 < num3) ? num1 : num3 : (num2 < num3) ? num2 : num3)


// console.log(Math.min(num1,num2,num3))

// console.log(Math.min(...Object.values(num_obj)))


//! Question 5 -> Write a program to manage role based access control

// let role = prompt("Enter the role : ");

// if(role === "admin") console.log("Full Access")
// else if(role === 'editor') console.log('You have edit access')
// else if(role === 'viewer') console.log("You have  only view access")
// else console.log("No Access")

// switch (role) {
//     case 'admin' : 
//         return "Full Access"
//     case 'editor':
//         return "You have Edit Access Only"
//     case 'viewer':
//         return "Only view"
//     default:
//         return "No access"
// }


//! check the number is mupltiple by 3 or 5 or both 
// let num = Number(prompt("Enter the number : "))

// if(num % 3 == 0 && num % 5 == 0){
//     console.log("FizzBuzz")
// }else if(num % 3 == 0 && num % 5 != 0){
//     console.log("Fizz")
// }else if(num %5 == 0 && num %  3 != 0){
//     console.log("Buzz")
// }

//! Calculator
// let num1 = Number(prompt("Enter the first number : "))
// let num2 = Number(prompt("Enter the second number : "))

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)
// console.log(num1 ** num2)

//! ATM Machine Program
let balance = 55000;
// let operation = prompt("Enter any option (Check Balance, Deposit, Withdrow, Exit) : ")

// if(operation !== "Check Balance" && operation !== "Deposit" && operation !== "Withdrow" && operation !== "Exit"){
//     console.log("Invalid operation")
// }else if(operation === "Check Balance"){
//     console.log("Check Balance")
// }else if(operation === "Deposit"){
//     console.log("Deposit")
// }else if(operation === "Withdrow"){
//     console.log("Withdrow")
// }else if (operation === "Exit"){
//     console.log("Exit")
// }






