

let lista = document.querySelector("#lista")


for(let i=1;i<=5;i+=1){
    let ingreso = prompt("Ingrese algo")
    lista.innerHTML+=`<p>${ingreso}</p>`
}