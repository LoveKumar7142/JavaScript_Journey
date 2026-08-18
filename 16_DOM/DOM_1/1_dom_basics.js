console.log("Hello javascript")

/* 



5 phrases of dom manuplation

1. DOM -> Document Object Model -> html ka poora tree usa he document bolte h ✅
        
2. Selection of html Elelment ✅
3. How to change or manipulation HTML ✅
4. How to change CSS ✅
5. Event Listeners (How to listen events)



*/



// 2. Selection of html Elelment ✅

let a = document.querySelector("h1") // document -> html ka poora tree then .querySelector() -> us html document ke aandar ka html tag select krte h ook 

// console.log(a)

let b = document.querySelector("p")
// console.log(b)


// 3. How to change or manipulation HTML ✅

a.innerHTML = "Meri girlfriend bhot he aachi h"  // kise bhe html element ki html esa change kr sakte h ook 
b.innerHTML = "she is good"

// 4. How to change CSS ✅  document se jo element select kiya h usme .style use krke then .property name in camalCase and = "give property"

let h1 = document.querySelector("h1")
h1.style.backgroundColor = 'skyblue'

let p = document.querySelector("p")
p.style.backgroundColor = "red"
p.style.color = "#fff"



// 5. Event Listeners (How to listen events) -> jo bhe hum observe kr rahe h dekhna hilna sona jaghna example in computer mouse move, mouse click etc vo sb event hai and event listner ka mtlb hota h ki event ko listen krna ook ✅

h1 = document.querySelector("h1")
//! h1.addEventListener(event, function) // es se hum event laga sakte h 

h1.addEventListener('click', ()=>{
    console.log("alpha")
    p.style.backgroundColor = "green"
    h1.style.backgroundColor = "red"
    h1.innerHTML = "Hii bhai kisa h tu"

    p.innerHTML = "Bs bhai ekdm mst hu"
})









