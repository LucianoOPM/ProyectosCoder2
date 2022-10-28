//Métodos de acceso del documento

/*
document.getElementById("img1") --> Me va a devolver un elemento
document.getElementsByTagName("h1") -->Me va a devolver todos los elementos que llame(array de elementos)
document.getElementsByClassName("texto") --> Es para todos los elementos que comparten una clase en común, en este caso, para los nodos que tienen una clase llamada "texto"(
    array de elementos)




*/
let img = document.getElementById("img1")
console.log(img)
let lis = document.getElementsByTagName("li")
console.log(lis)

for(let li of lis){
    console.log(li.innerHTML)
}

let txt = document.getElementsByClassName("texto")
console.log(txt)

for(let t of txt){
    if (t.textContent=="Si"){
        t.textContent="Tacos no, pizza si"
    }
}



//Queryselector y queryselectorall

/*
querySelector("") --> Selecciona un solo elemento
Puede ir un id ("#id")
Puede ir una clase (".class")
Puede ir una etiqueta ("etiqueta")
e inculo puedo hacer:
querySelector("ul li a#id5") y traera todos los nodos "ul, li y a que tengan la ID id5"
querySelector("input[type=text]") Traera todos los input que sean de tipo texto

Como el querySelector devuelve un solo elemento, si hay más de un elemento nos traerá siempre el primero


querySelectorAll("")--> Devuelve un array de elementos
*/

let parrafos = document.querySelector("p").textContent
console.log(parrafos)

let todos = document.querySelectorAll("p")
console.log(todos)