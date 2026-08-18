// Window object

console.log(window)

console.log("hello bhai")
console.log(document)


console.dir(document)  // it prints a special type of object


let a = document.querySelectorAll('div')

console.log(a) // it gives nodeList

//! What is NodeList -> it is a list of element of HTML that is also known as Node and this make similar element in an array with index by using methods -> document.querySelectorAll('element')

//! it is similary as array not an actual array but we cant use map,filter,reduce, etc but rest that we can use all property and method of an array

//! but we can change properly in array.


/*
    ! 1) DOM ✅
    ! 2) Selection ✅
*/


//! Selection method to select elements by id and class specific
let b = document.getElementsByTagName('div')
console.log(b)

let heading_id = document.getElementById('heading')
console.log(heading_id)


let content_class = document.getElementsByClassName('content')
console.log(content_class)


//! Query Selector


//* By using html tags to select an element 
let only_starting_div = document.querySelector('div')

console.log(only_starting_div)

//? All

let all_Divs = document.querySelectorAll('div')
console.log(all_Divs)

//* By using id to select an element 

let id_select_element = document.querySelector('#heading')

console.log(id_select_element)


//* By using class to select an element 

let class_only_first_div = document.querySelector('.content')

console.log(class_only_first_div)

let class_All_divs = document.querySelectorAll('.content')
console.log(class_All_divs)

let falna_first_last_child = document.querySelector("#falna")

console.log(falna_first_last_child.firstChild) // when you enter element in next line so it makes space as first child and return #text in console ook 

//! last child

console.log(falna_first_last_child.lastChild)  // when you enter  space after last child then close the parent element so it calculate the space as last child and return #text in console ook


//! All childrens 
console.log(falna_first_last_child.children)

console.log(falna_first_last_child.childNodes)
