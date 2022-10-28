let lista=["item1", "item2", "item3", 69, true]
let productos = [
    {id: 01, nombre: "Television"},
    {id: 02, nombre: "playStation"},
    {id: 03, nombre: "PC gamer"},
    {id: 04, nombre: "Monitor"}
]


const result = document.querySelector("#result")

/* 
Si se pone solamente un "=", el nuevo texto sobreescribe el antiguo texto y lo hace imposible de ver. Si se usa el "+=" se pueden ver ambos textos.
result.innerHTML+=`<h2 class="blue">Hola</h2>` "El innerHTML introduce todo un html con las caracteristicas que se introdujeron"
result.innerText+=`Hola` "innerText" devuelve todos los textos que contiene dentro de las o la etiqueta seleccionada
result.textContent+=`Hola` 
*/

/*Ejemplo innerHTML "El innerHTML introduce todo un html con las caracteristicas que se introdujeron"*/

const documento=document.querySelector("main")
documento.innerHTML+="<h1>Esto es un ejemplo de innerHTML</h1>"

/*Ejemplo innerText "innerText devuelve todos los textos que contiene dentro de las o la etiqueta seleccionada", en el siguiente ejemplo, innerText me está leyendo todo el texto que esta
dentro de las etiquetas "ul"*/

const ul = document.querySelector("ul")
console.log(ul.innerText)

/*Ejemplo de textContent "En un principio puede que innerText y textContent parezcan similares, pero tienen ciertas diferencias, textContent Devuelve el contenido de texto de todos los elementos
innerText devuelve el contenido de todos los elementos excepto los elementos <script> y <style>. innerText no devolverá el texto de los elementos que están ocultos con CSS (textContent lo hará)"
En resumen, textContent muestra literalmente todo el contenido que encuentre entre etiquetas, incluso si es que está oculto.
*/

const p = document.querySelector("p")
console.log(p)

/*Como se puede ver en consola, textContent me muestra incluso el contenido dentro de las etiquetas script, cosa que innerText no haría*/


/*Los backtics sirven para combinar de manera más precisa JS y strings. En el siguiente ejemplo, declare arriba un array de items, y los combine con los strings gracias a los backtics
, el metodo de empleo es con "${código a introducr}" */

documento.innerHTML+=`
<ul>
    <li>${lista[0]}</li>
    <li>${lista[1]}</li>
    <li>${lista[2]}</li>
    <li>${lista[3]}</li>
    <li>${lista[4]}</li>
</ul>
`
documento.innerHTML+=`
<ul>
    <li>${productos[0].nombre}</li>
    <li>${productos[1].nombre}</li>
    <li>${productos[2].nombre}</li>
    <li>${productos[3].nombre}</li>
</ul>`