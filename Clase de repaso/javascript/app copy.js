const result = document.querySelector("#result")
const cl = document.querySelector("#CL")


/*Con create element puedes crear cualquier contenedor en HTML, incluso crear una que no exista*/
const container = document.createElement("div")
const texto = document.createTextNode("texto para el div")

container.appendChild(texto)
/*Cuando se crea un contenedor HTML por medio de "create element, y appendChild", se quedan en una especie de limbo, no se quedan impresos en el documento. para eso, tenemos que introducirlos
dentro del documento y dentro de las etiquetas que querramos.*/

document.body.appendChild(container)
/*Como document, es todo el documento, le dije que dentro de las etiquetas/nodos body, me escribiera lo que tengo guardado dentro de "container"*/

const heading = document.createElement("h2")
const textoHeading = document.createTextNode("Texto para las etiquetas H2")

heading.appendChild(textoHeading)
heading.classList.add("blue")
/*A heading se le puede asignar una clase de CSS gracias al método de classList "add"*/
result.appendChild(heading)


/*Diferencias entre className y classList*/

cl.classList.add("center")
cl.classList.add("bold")
cl.classList.add("strong")
cl.className+=" super"//strongsuper
/*ClassName pisa las otras etiquetas de css, a menos de que se le ponga un "+=" y aún así, la etiqueta tiene que tener por dentro un espacio, ya que si no, las palabras se juntan*/

cl.classList.remove("super")

heading.addEventListener("mouseenter", ()=>{
    heading.classList.remove("blue")
    heading.classList.add("green")
})
heading.addEventListener("mouseleave",()=>{
    heading.classList.remove("green")
    heading.classList.add("blue")
})
