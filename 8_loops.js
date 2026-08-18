// // For Loop
// for(let i = 1; i <= 1000 ; i++){
//     console.log("Hello")
// }

// // While Loop
// let i = 1000
// while(i>= 1){
//     console.log(i);
//     i--;
// }

// i = 1000;

// do{
//     console.log(i)
//     i--;
// }while(i >= 1);


//! Print all even number from 0 to 100

// for(let i = 0;i<101;i+=2){
//     console.log(i)
// }


//! calculate how many vowels and consonents are in a given string using for of loop
// let string = "hello"
// let consonent = 0;
// let vowle = 0;

// for(let word of string){
//     if(word !== 'a' && word !== 'e' && word !== 'i' && word !== 'o' && word !== 'u'){
//         consonent++;
//     }
//     else{
//         vowle++;
//     }
// }

// console.log(`consonent : ${consonent}`)
// console.log(`vowel : ${vowle}`)


//! calculate sum of first 'n' number

// let n = 10

// console.log((n * (n+1)) / 2)


// let num1 = 10, num2 = 100 

// console.log(((num2*(num2 + 1))/2) -((num1 *(num1 + 1))/2) + num1)

//! Find odd number from 0 to n

// for(let i = 0;i<= 100 ;i++){
//     if(i&1){
//         console.log(`${i} is an odd number`)
//     }
// }

//! number gussing game 
// let random = Math.random(Math.floor(Math.random() * 100) + 1)


// let i = 0
// let guss = Number(prompt("Enter the number"))
// while(true){
//     if(random === guss){
//         console.log(`winner in ${i} steps`)
//         break;
//     }else{
//         i++;
//     }
//     guss = Number(prompt("Type number"))
// }

//! Simple password chacker

// let password = "alpha"

// let yourPassword = null
// let attempt = 0

// while(password !== yourPassword && attempt < 3){
//     yourPassword = prompt("Enter the password ")
//     if(password === yourPassword){
//         console.log("Conguralation your password is matched")
//         break;
//     }
//     attempt++;
// }
// if(attempt === 3) console.log("Your attempt is full not please try again after 24 hrs")

//! create a program to find the factorial

// let fact = 1;
// let n = 100

// for(let i = 1;i<=n;i++){
//     fact *= i;
// }
// console.log(fact)

//! print the right angle tringle horizontal same digit 

// for(let i = 1;i<=5;i++){
//     let str = ""
//     for(let j = 1;j<=i;j++){
//         str += j+" "
//     }
//     console.log(`${str}`)
// }

//! mud game
// alert("Now Yor are in dark forest")
// let way = prompt("Enter the direction").toLowerCase()
// let play = 'yes'
// while(play === 'yes'){

//     if(way === 'left'){
//         alert("You are in mud")
//         let take = prompt("There is a diamond so do you want to take diamond (yes or no").toLowerCase();
//         if(take === 'yes'){
//             console.log("You win")
//         }else{
//             console.log("loose game")
//         }
//     }else{
//         console.log("talipotation")
//         let tel = prompt("Yes or No").toLowerCase()
//         if(tel === 'yes'){
//             console.log("You win")
//         }else{
//             console.log("loose game")
//         }
//     }
//     play = prompt("Do you want to play again (yes or no)").toLowerCase()
//     if(play === 'no'){
//         break;
//     }
// }