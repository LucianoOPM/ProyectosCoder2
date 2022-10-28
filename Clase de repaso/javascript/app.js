const form = document.querySelector("#formulario")
const user = document.querySelector("#nombre")
const email = document.querySelector("#email")
const error = document.querySelector("#error")
const enlistado= document.querySelector("#enlistado")
console.log(error)
console.log(form)
console.log(user)
console.log(email)

form.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    if(user.value == ""){
        const p = document.createElement("p")
        p.textContent+="El nombre no puede estar vacio"
        p.classList.add("red")
        error.appendChild(p)
    }else{
        const pls = document.createElement("p")
        pls.classList.add("green")
        pls.textContent+=`${user.value}`
        enlistado.appendChild(pls)
    }
})