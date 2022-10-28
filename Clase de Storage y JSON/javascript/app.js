//localStorage y sessionStorage
/*  
localStorage.setItem("Nombre", "Ana Paula")
localStorage.setItem("Edad", 24)
localStorage.setItem("Mejor amiga", true)





let recuperar = localStorage.getItem("Nombre")
recuperar= localStorage.getItem("Edad")
recuperar= localStorage.getItem("Mejor amiga")

console.table(recuperar)
console.log(typeof recuperar)


let recuperarObjeto = localStorage.getItem("Luciano")
console.log(recuperarObjeto)


for(let i = 0; i<localStorage.length; i+=1){
    let clave = localStorage.key(i)
    console.log(`La clave es: ${clave}`)
    console.log(`El valor es: ${localStorage.getItem(clave)}`)
}

localStorage.removeItem("Mejor amiga")


console.log("------------------------------------------------------------------") 
*/

//JSON

localStorage.setItem("Luciano", JSON.stringify({"edad": 24, "soltero": false}))
let obstorage = localStorage.getItem("Luciano")
console.log(obstorage)
let objson = JSON.parse(obstorage)
console.log(objson)
console.log(objson.edad)



localStorage.setItem("consolas", '{"xbox": true, "playstation": 26, "tienda": "walmart"}')
/*Está forma es otra manera de poder hacer un formato JSON, ya que se está metiendo el mismo formato que como lo metería con stringify, hay que tener mucho cuidado con las comillas
del value ya que el objeto JSON acepta comillas dobles, hay que usar otro tipo de comillas en la declaración de la value*/
let consolas = localStorage.getItem("consolas")
console.log(consolas)
let objconsolas = JSON.parse(consolas)
console.log(objconsolas)
console.log(objconsolas.tienda)


/*Continuar JSON & Storage 1:35:36*/