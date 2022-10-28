/*El document engloba a toda la estructura HTML*/
let elemento = document
//console.log(elemento)
//console.dir(elemento)
/*
El método dir() de Console despliega una lista interactiva de las propiedades del objeto JavaScript especificado. 
El resultado es presentado como un listado jerárquico con triángulos de despliegue que te dejan ver los contenidos de los objetos hijos.

Dicho de otra manera, console.dir() es la manera de ver todas las propiedades de un objeto JavaScript específicado por consola, 
mediante la cual el desarrollador puede facilmente obtener las propiedades del objeto.
*/

/*Cuando una variable tiene un valor como un elemento, hace una copia por referencia, lo cual significa que apuntan al mismo valor de memoria si cambiamos el valor de la 
variable, el valor de ese elemento, en el ejemplo de arriba, "Elemento" hace referencia al document global y si cambiamos algo de "elemento" va a cambiar algo del document*/

/*Con la variable elemento, se pueden acceder a todas las propiedades del HTML, como body, head, URL, domain, ETC y como es un objeto, se accede con un punto (.)
elemento.body, elemento.domain, etc*/

elemento = document.forms[0]// *1*
elemento = document.links
elemento = document.images[0].src// *2*
elemento = document.images[1].getAttribute("src")// *3*
elemento = document.images[0].src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"// *4*
elemento = document.images[0].setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png")// *5*

//console.log(elemento)

/* *1* Si se tienen muchos nodos dentro de otros nodos, una forma de acceder a un nodo en especifico, es utilizando el metodo de arrays, con los corchetes "[]"
 y la posicion en numero que quiera ver, *2* y si se quiere ver un valor o atributo en especifico, se accede con la propiedad del elemento o nodo*/

//.getAttribute()
/* *3* Otra forma de acceder a un atributo de un elemento o nodo es con la función "getAttribute" el cual te devuelve el valor del atributo seleccionado*/

/* *4* Se le puede cambiar el atributo de un elemento si lo igualamos, como si fuera una asignación a una variable. Mi imagen 0 tenía otra imagen y al cambiarle el valor
le puse la nueva imagen encima. En el HTML se conserva el valor de la imagen original*/

//.setAttribute()
/* *5* Otra forma (Y la más recomendada) de cambiar un atributo de un elemento es con el método "setAttribute()", el método te pide dos valores, la referencia 
al atributo que quieres cambiar separado por una coma y el nuevo valor que le queremos poner al atributo*/

//.innterText
elemento = document.links[0].innerText
elemento = document.links[1].innerText = "Taco número 2"
/*La propiedad .innterText, te devuelve el valor del texto que estás solicitando. Con la misma propiedad e igualandola al texto deseado, se le puede cambiar el texto al nodo*/

//.textContent
elemento = document.links[2].textContent = "Pizzeria 3"
/*Otra forma de cambiar el texto del nodo solicitado, es con la propiedad .textContent*/

//innerHTML
elemento = document.forms[0].innerHTML
/*Con la propiedad ".innerHTML accedo a todo el código HTML dentro de mi nodo*/
elemento = document.forms[0].innerHTML += "<p>Hola mundo</p>"
/*Con la misma propiedad innerHTML se puede agregar un nodo HTML al documento como si fuera una acumulación "+=".*/

//console.log(elemento)

/*
Aprendimos a: Leer nodos más especificos. 
Con notación de arrays.
Obtener valores de atributos. 
Cambiar valores de atributos getitem o setitem
Obtener nodos texto de diferentes nodos innertext o innercontext
cambiar valores de texto de esos nodos
obtener nodos html dentro de nodos
cambiar nodos html dentro de nodos
*/

//append()
//remove()
//createElement("")




let lista = document.querySelector("#lista")


for(let i=1;i<=5;i+=1){
    let ingreso = prompt("Ingrese algo")
    lista.innerHTML+=`<p>${ingreso}</p>`
} 