//! 1) Map -> it is an higher order function because it takes function inside peremeter

//! arr.map(function(element, index,arr(optional)) => { })

//! it will not change in actual array it returns new array

let arr = [1, 2, 3, 4, 5];

let newArray = arr.map((element, index, arr) => {
  console.log(element, index, arr);
  return element * 2;
});

console.log(newArray);

//! agar hume same array me change krna h to we can use foreach loop but if we want to change an array but can not change original so we will use map

//! 2) forEach => it simple like for loop
arr.forEach((element, index) => {
  arr[index] = element * 2;
});

console.log(arr);

//! 3) Filter => it use to remove the element in the array. It is an higher order function and it return new array after filter. it work on the baese of truthy value not work on element ook it return same element if it satisfy the condition

//! let newArray = arr.filter(function(element, index, arr(optional)))

let newArrayFilter = arr.filter((element, index, arr) => {
  console.log(element, index, arr);
  return element * 2;
});

console.log(newArrayFilter);

newArrayFilter = arr.filter((element, index, arr) => {
  console.log(element, index, arr);
  return element > 2;
});

console.log(newArrayFilter);

newArrayFilter = arr.filter((element, index, arr) => {
  console.log(element, index, arr);
  return element % 2 == 0;
});

console.log(newArrayFilter);

newArrayFilter = arr.filter((element, index, arr) => {
  console.log(element, index, arr);
  return element % 2 != 0;
});

console.log(newArrayFilter);

//! 4) Reduce => it works on element and it also return only an element.

//! let newArray = arr.reduce((previousValue,currentValue)=>{ return previousValue + currentValue},previousValue(optional) bydefault take first element of array)

//! let newArray = arr.reduce((accumulator,currentValue)=>{ return accumulator + currentValue},previousValue(optional) bydefault take first element of array)


//! why we called accumulator because it works as accumulator in register that hold updated value inside

let result = arr.reduce((prevValue,currValue) => {
    const newVal = prevValue + currValue
    console.log(prevValue,currValue,newVal)
    return newVal;
})

console.log(result)


result = arr.reduce((prevValue,currValue) => {
    const newVal = prevValue + currValue
    console.log(prevValue,currValue,newVal)
    return newVal;
},10)

console.log(result)

result = arr.reduce((prevValue,currValue) => {
    console.log(prevValue,currValue)
    return prevValue + currValue
})

console.log(result)

result = arr.reduce((prevValue,currValue) => {
    console.log(prevValue,currValue)
    return prevValue + currValue
},50)

console.log(result)


/*
    todo map() -> return new array
    todo filter() -> return new array
    todo reduce() -> return single value
    todo forEach() -> undefine

*/

