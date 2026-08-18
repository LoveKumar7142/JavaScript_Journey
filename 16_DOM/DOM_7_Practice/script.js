//! First Question -> built an increment- decrement counter similar to what you see in the shopping cart on amazon or flipcart



let decrement = document.querySelector('.decrement')

let increment = document.querySelector('.increment')

// let spanCnt = document.querySelector('.count')

let spanCnt = document.createElement('span');

let count = 0;

spanCnt.innerText = count;
decrement.after(spanCnt);
decrement.disabled = true;


decrement.addEventListener('click', () =>{  
    count-=1;
    spanCnt.innerText = count;

    if(count === 0){
        decrement.disabled = true;
    }
})

increment.addEventListener('click', () => {
    count+=1;
    spanCnt.innerText = count;
    decrement.disabled = false;
})



//! Question - 2) Create a simple form and display the subbmited details on the webpage. Ensure that if any field is left empty, the form should not be submitted.

let form = document.querySelector('form')
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let submitBtn = document.querySelector('.submitBtn')


form.addEventListener('submit',(event)=>{

    event.preventDefault()
    if(!name.value || !email.value){
        alert("Fill all the details first")
        return;
    }
    let div = document.createElement('div')

    div.innerHTML = `
    <p>${name.value}</p>
    <p>${email.value}</p>
    `
    submitBtn.after(div)
})