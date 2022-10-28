let filter = document.querySelector("#filtros")
console.log(filter)

let img = document.createElement("img")/*Una forma de agregar imagenes desde JS es creando un elemento IMG e introducirla por medio de appendChild al documento*/
//const img = new Image()//Esta es otra forma de crear una imagen por medio del objeto "image"
//img.src="assets/Minecraft_PC_Bundle_horizontal_key_art.webp"
img.setAttribute("src", "assets/Minecraft_PC_Bundle_horizontal_key_art.webp")
img.setAttribute("alt", "imagen_Minecraft")
img.setAttribute("width", 600)




const btn = document.createElement("button")
btn.textContent="ocultar"
btn.id="sorpresa"

filter.appendChild(img)
filter.appendChild(btn)

btn.addEventListener("click", ()=>{
    if(img.classList.contains("ocultar")){/*El metodo contains, evalua si dentro de una etiqueta contiene cierta palabra*/
        //mg.style.filter="grayscale()"
        img.classList.remove("ocultar")
    }else{
        img.classList.add("ocultar")
    }
})