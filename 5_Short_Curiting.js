//! It express the evaluation of logical operation like how &&(AND), ||(OR), and ??(Nulish Colision)

//? 1. || (OR Operator)

let r1 = false || undefined || "" || "Rohan" || 0 || 0n || null || -0

console.log(r1)

//? 2. && (AND Operator)

let r2 = true && "Rohan" && null && "" && "hii"
console.log(r2)

//? 3. ?? (nullish coalescing operator)

let r3 = false ?? null ?? undefined
console.log(r3)

let r4 = null ?? false ?? undefined
console.log(r4)




