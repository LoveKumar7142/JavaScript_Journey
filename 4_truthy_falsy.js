// Truthy and Falsy

// falsy -> false,undefine,null,0,-0,0n,"",NaN
// truthy -> anything which is not falsy

let r1 = true && true ? "statement1" : "statement2"

console.log(r1)


let r2 = true && false ? "s1" : "s2"
console.log(r2)

let r3 = "" && 25 ? "s1": "s2"
console.log(r3)

let r4 = undefined ? "s1":"s2"

console.log(r4)

let r5 = null ? "s1" : "s2"
console.log(r5)

let r6 = 0 ? "s1" : "s2"
console.log(r6)

let r7 = 0n ? "s1" : "s2"

console.log(r7)


let r8 = -0 ? "s1" : "s2"

console.log(r8)

let r9 = NaN ? "s1": "s2"
console.log(r9)


// Question -> login and password program using truthy and falsy concept

// If the login and password has no value and any one is also has no value so it is falsy statement but if both have some value then it becomes truthy
let login = ""
let password = ""

let result = login && password ? "Login Successfully" : "Please Login first"

console.log(result)

