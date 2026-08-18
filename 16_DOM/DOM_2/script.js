let button = document.querySelector("button")
let off_button = document.querySelector(".off_button")
let box = document.querySelector("p")
button.addEventListener('click', ()=>{
    // console.log("button clicked")

    box.style.backgroundColor = 'yellow'

    box.style.scale = "1"
    

})

off_button.addEventListener("click",()=>{
    box.style.backgroundColor = 'red'

    box.style.scale = "0.5"
})