let input = document.querySelector("input")
let spans = document.querySelectorAll("span")
let container = document.querySelector(".container")
let plus = document.querySelector(".plus")
let erase = document.querySelector(".eraser")
let blur = document.querySelector("div.blur")
let modal = document.querySelector(".modal")
let yes = document.querySelector(".yes")
let no = document.querySelector(".no")

input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        adder();
    }
})

plus.addEventListener("click",adder)

erase.addEventListener("click",()=>{
    blur.style.visibility = "visible"
    blur.style.zIndex = "50"
    modal.style.top = "calc(50vh - 3.5rem)"
})

yes.addEventListener("click",()=>{
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    modalremove()
})

no.addEventListener("click",()=>{
    modalremove()
})

function modalremove(){
    modal.style.top = "-30rem"
    blur.style.visibility = "hidden"
    blur.style.zIndex = "-1"
}

spans.forEach((span)=>{
    span.addEventListener("click",()=>{
        console.log(span.classList.value)
        input.classList = []
        input.classList.add(span.classList.value)
    })
})
function adder(){
    if(input.value ==="")return
    let note = document.createElement("div")
    note.innerHTML = input.value
    note.classList.add(input.classList.value)
    container.append(note)
    note.addEventListener("click",()=>{
        note.remove()
    })
    //////////////////////////////////
    input.value=""
}