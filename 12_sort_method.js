//! Sort method

//! arr.sort(compareFunction)

//! It works on tim sort under the hood. (combination of merge sort and insertion sort)

//! By default, sort() convert element to strings and sort them alphabetically (unicode order) or Lexicographically order

let arr = [1,8,45,8,0,23]
arr.sort(); // it will sort the array according to first digit only because sort method here work on the bases of string bases it maintain laxicographically order

console.log(arr)


let heros = ["spiderman","ironman","hulk","thor","hawkeye","wanda"]

heros.sort()
console.log(heros)

// it doesnot treat number array as number it treat as string as well

//! now i want to sort my array in assending array

arr.sort((a,b) => {
    console.log(a,b)
    return a-b  // its check negative value and positive value if the answer is negative or zero so there is no need to swap and if it gives positive so it have to swap ook this is the core logic
})

console.log(arr)


//! decending order

arr.sort((a,b) => {
    console.log(b,a)
    return b-a
})

console.log(arr)








