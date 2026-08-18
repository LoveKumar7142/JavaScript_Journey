/*
    ! 1) DOM ✅
    ! 2) Selection ✅
    ! 3) How to manipulate HTML
*/


/*
    ? 1) ✅ Can We change tags using js    ->   get ✅  /  set ❌ -> there is no inbuild method to set the tags using js
    ? 2) ✅ Can we change attribute using js    -> get ✅ /  set ✅ 
    ? 3) ✅ Can we change text using js    -> get ✅ /  set ✅ 
    ? 4) ✅ Can we change elemtne using js   -> get ✅ /  set ✅ 
    ? 5) ✅ Can we change html tags   -> get ✅  /  set ✅ 

*/


let h1 = document.querySelector('h1')

let h1_by_tagname = document.getElementsByTagName('h1')

console.log(h1_by_tagname[0])  // it will give you HTMLCollection this is a king of array


//! tagName ->  this property is use to find the tag
console.log(h1.tagName) // it will return only tag

console.log(h1.nodeName) // it can be return tagname, text node, comment node


console.log(h1.firstChild)

console.log(h1.firstChild.tagName) // undefine

console.log(h1.firstChild.nodeName) // it will give you node name like text node, tag name , comment node 

// we can get easily but we cant change in any condition 


h1_by_tagname.tagname = 'P'  // we can't change this directly

console.log(h1_by_tagname)


h1.nodeName = 'P'  // we can't change this directly

console.log(h1)

//* We want to change inner text

/*

    ! 1) innerText ✅
    ! 2) textContent ✅
*/


console.log(h1.innerText) // it returns only text not formatting like as it is space and new line etc etc.
console.log(h1.textContent) // it always maintain format as well



// h1.innerText = '          baki jo bacha tha         \n       kale chor le gai'

console.log(h1)



// we want to change element

console.log(h1.innerHTML) // text with inner html tags 

h1.innerHTML = '<p>Baki jo bacha tha khali chor le gai</p>'

console.log(h1.innerHTML)
console.log(h1.firstChild)


// after visibility hidden name 
console.log("After visibility style")
console.log(h1.tagname)  // undefine
console.log(h1.nodeName) // H1
console.log(h1.innerText) // blank
console.log(h1.textContent) // inner content without tag
console.log(h1.innerHTML) // inner content with inner html tag


//! ----------------Insert Element (Addition Element)---------------


let div = document.querySelector('div')

// div.append('<p>ajenfdkja</p>') // it insert as it is same with tag

let p = document.createElement('p') // it create html tags
console.log(p)

p.innerText = "new paragraph"  // it insert the text in p

div.append(p) // then it appent at last inside div


div.prepend(p)  // previous element move at top so if you want to both so please make another element and insert inside div at top


div.after(p) // it will print after and outside of the div

div.before(p) // it will print before and outside of the div


//! ----- I want to insert every side by using of single function

//? div.insertAdjacentElement(position, element)

/* 
? Position
    ! 1) beforebegin
    ! 2) afterbegin
    ! 3) beforeend
    ! 4) afterend

*/

div.insertAdjacentElement('afterbegin',p)
div.insertAdjacentElement('beforeend',p)

div.insertAdjacentElement('afterend',p)
div.insertAdjacentElement('beforebegin',p)

// div.remove() // to remove tag by the help of .remove() method

para3 = div.children[2]

console.log(para3)

// p.remove()

//! ----------------- Parent Node --------------------

//! we know about the child reference but we want to implement logic in parent so we will use parent node

/* 
? Properties for parent Node

    ! 1) node.parentNode -> returns the immediate parent of a node (could be an element, document, or document fragment)

? Common parent methods
    ! 1) replaceChild(newChild, oldChild) -> replaces an existing child node with a new one.
    ! 2) appendChild(child) -> Adds a child node to the end of the parent's children list.
    ! 3) insertBefore(newNode, referenceNode) -> Inserts a new node before a specified existing child node.
    ! 4) removeChild(child) -> Removes a specified child node from the parent.


    * NOTE : Sometimes you see appendChild and removeChild in older code. (only work with nodes and not with strings like text)


*/


let p2 = document.getElementById('selection')

console.log(p2)

p2.style.backgroundColor = 'skyblue'

let parentNode = p2.parentNode

console.log(parentNode)

parentNode.append(p); // #text   #comment    #insert element



let newElement = document.createElement('div')

newElement.innerText = "hello this is new Element created "

// parentNode.replaceChild(newElement,p2) // it will replace with others 


// parentNode.insertBefore(newElement)

let lastPara = div.children[2]

div.insertBefore(p,lastPara)










//! -------------------Attributes--------------

/*

    ! 1) getAttribute(attr): To get the attribute value
    ! 2) setAttribute(attr, value): To set the attribute value


*/

let attributeDiv = document.querySelector('.box')

attributeDiv.style.backgroundColor = 'lightgreen'


console.log(attributeDiv.getAttribute('class'))
console.log(attributeDiv.getAttribute('title'))

console.log(attributeDiv.attributes) // it returns the object of attribute present in a tag

/*
return 

NamedNodeMap {0: class, 1: title, 2: style, class: class, title: title, style: style, length: 3}



*/

console.log(attributeDiv.attributes.class)
console.log(attributeDiv.attributes.title)
console.log(attributeDiv.attributes[0]) 
console.log(attributeDiv.attributes[2])


console.log(attributeDiv.attributes['class'].value)
console.log(attributeDiv.attributes['title'].value)
console.log(attributeDiv.attributes[0].value) 
console.log(attributeDiv.attributes[2].value)


console.log(attributeDiv.attributes.class.value)
console.log(attributeDiv.attributes.title.value)
console.log(attributeDiv.attributes[0].value) 
console.log(attributeDiv.attributes[2].value)

//! i want to get direct value of an attribute

console.log(attributeDiv.getAttribute('class'))  // return box bescause class = "box"
console.log(attributeDiv.getAttribute('title'))  // return box bescause title = "This is div"


//! Now i want to set the attribute in a tag


let classValue = attributeDiv.getAttribute('class')

console.log(classValue)


attributeDiv.setAttribute('class','random')  // after adding this it will replace that box class

attributeDiv.setAttribute('class', `${classValue} random`) // we can concinate previous class as well

console.log(attributeDiv.attributes)
console.log(attributeDiv.attributes.class.nodeValue)

let beforeColor = attributeDiv.getAttribute('style')
console.log(beforeColor)

attributeDiv.setAttribute('style', 'background-color : purple')

let afterColor = attributeDiv.getAttribute('style')

console.log(afterColor)


//! ----------- Practice Question -------------------

//? 1) Create a paragraph with text "Mai tumse piyar nii krta" and add background color to black and font color to green using javascript.

let paragraph = document.createElement('p')

paragraph.innerText = "Hello this is question 1"

let body = document.querySelector('body')

body.append(paragraph)  // add at last

body.prepend(paragraph)

paragraph.style.backgroundColor = 'black'
paragraph.style.color = 'green'


paragraph.setAttribute('style','font-size : 80px ; background-color : black ; color : green')


//? 2) Insert a button with text "click me" as the first element inside the paragraph created in 1st question.

let button = document.createElement('button')


button.innerText = 'click me'
paragraph.append(button)

button.style.display = 'block'


//? 3) create a <div> tag in html and give it a class & some styling. Now create a new class in css and try to append this class to the <div> element

let divElement = document.createElement('div')

divElement.innerText = "This is text"

body.prepend(divElement)

divElement.setAttribute('class','hello')
divElement.setAttribute('style','background-color : lightgreen; color : blue; font-size: 20px')


// let classes = document.createAttribute('class')

// classes.value = "good_boy"
// console.log(classes)

// let divElement_all_class = `${divElement.getAttribute('class')} good_boy`
// divElement.setAttribute('class',`${divElement_all_class}`)

//! i will do this in single line

divElement.setAttribute('class',`${divElement.getAttribute('class')} good_boy`)
divElement.setAttribute('style',"")

console.log(divElement.getAttribute('class'))

console.log(divElement)


//! -------------------Challange 1-------------------
//? 4) Create a function that takes node and newTagName and replace the node from the new node with changed tag name in the DOM

function replaceTag(node, newTag){
    if(!node || !(node instanceof Element)){
        console.error("Invalid node provide")
        return null;
    }

    let newTagElement = document.createElement(newTag)

    for(attr of node.attributes){
        newTagElement.setAttribute(attr.name, attr.value);
    }

    newTagElement.append(...node.childNodes)

    node.parentNode.replaceChild(newTagElement,node);

    return newTagElement;

}


function changeTag(oldNode,newNode){
    if(oldNode instanceof ELement){
        let p = document.createElement(newNode)
        p.innerHTML = oldNode.innerHTML

        for(let attr of oldNode.attributes){
            p.setAttribute(attr.name, attr.value)
        }

        oldNode.replaceWith(p)
    }else{
        console.log("Invalid Node")
    }
}
let btn = document.querySelector('#btn')

console.log(replaceTag(btn,'div'))































