/*
Si al nodo, no lo ponemos en una variable como referencia, tendríamos que estar llamando al nodo a cada rato de la forma más larga: document.getElementsByTagName("button")
, document.getElementsByTagName("button"), document.getElementsByTagName("button"), así si lo tenemos dentro de una variable, simplemente ponemos la variable de referencia
que en este caso es "btn"
*/

//let btn = document.querySelectorAll("button")
/*Primero se captura la referencia a donde hacemos el llamado*/
//console.log(btn)

//.addEventListener
/*
let gritar = () =>{
    alert("HOLAAAAA")
}
let saltar = () =>{
    alert("Que tan alto")
}
*/


/*
btn.addEventListener("click", gritar)//Método de llamar a una función ya declarada, no lleva el doble parentesis dentro

/*
btn.addEventListener("click", ()=>{ //Método de declarar una arrow function dentro del evento
})
*/

/*
btn.addEventListener("click", function(){//Método clasico de declara una función dentro del evento
})
*/

//El .addEventListener es un método que sirve para agregar eventos, la sintaxis sería .addEventListener("El nombre del evento a usar", "la función que hará lo que queramos")

//elemento.nombreDelEvento
/*
btn.onclick = gritar //Con una función ya declarada, sin el parentesis.*/

/*
btn.onclick = () =>{
}//Declarando una arrow function
*/

/*
btn.onclick = function(){
}//Declarando una función dentro del evento
*/
/*Básicamente, es lo mismo, solo que se le pone el nombre del atributo del evento y después se le agrega la función de cualquier metodo ya anteriormente visto*/

/*
btn[0].onclick = gritar
btn[1].onclick = saltar
*/

/*
Si tenemos más de un nodo con el queryselectorall con el mismo valor en este caso es un "botton", en ese caso usamos el método de array y seleccionamos
la posicion que hace referencia al elemento que vamos a utilizas
*/

let lis = document.querySelectorAll("li")
let playMusic =()=>{
    console.log(`play`)
}

for(let l of lis){
    l.addEventListener("click", playMusic)
}
/*
Si se tiene una lista de elementos que van a escuchar a un mismo evento, se puede usar el metodo for...of de los arrays, donde "l" será ahora el que escuchará el evento
y ejecutará la función
*/


/* 
function cambiarImagen(){
    let imagen= document.getElementById("imagen").setAttribute("src", "assets/blastoise.png")
}

function regresarImagen(){
    let imagen= document.getElementById("imagen").setAttribute("src", "https://thumbs.gfycat.com/DampSpanishCleanerwrasse-size_restricted.gif")
} 
*/


//Eventos

/*mousedown/mouseup*/
//Cuando se oprime y se suelta un botón del ratón sobre un elemento

/*mousemove*/
//El movimiento del mouse sobre el elemento que activa el evento

/*mouseover/mouseout*/
//El puntero del mouse entra o sale del elemento que activa el evento

/*click*/
//Se activa cuando haces click sobre el elemento que activa el evento
