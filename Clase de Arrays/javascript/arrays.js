//Los arrays están representados por los corchetes "[]"
const numeros = [10,20,30,40,50]

const strings = ["Enero", "febrero", "marzo", "abril","mayo", "junio", "julio"]

const booleans = [true, false, false, true, true]

const deTodo = ["Hola", 20, false, {nombre: "Luciano", edad:25}, function(){}, ["adios", 10, true, {nombre: "Ana", edad: 24}]]
//Los arrays pueden contener cualquier tipo de dato, desde numeros, funciones, objetos hasta incluso arrays.

/*sintaxis de los arrays*/

const vacio = []
const vacio2 = new Array()
//En los dos ejemplos, podemos ver las distintas formas en las que se puede declarar un array. En este caso, ambos arrays están vacios

console.log(strings[0])
console.log(strings[1])
console.log(strings[2])
console.log(strings[3])
let r = numeros[0] + numeros[4]
console.log(r)
/*La forma de acceder a un valor de un array, es con el nombre, y la posicion del elemento entre corchetes "[]", los arrays siempre comienzan a contar a partir de 0,
por ejemplo, en mi array "string" el elemento 0 sería enero*/



//Array nos pueden proveer una suit de herramientas.
//Propiedades
//Métodos
console.log(strings.length)
//Length es una propiedad de los array, que cuenta cuantas posiciones tiene el array.

console.log(strings[strings.length-1])
//Con esta expresion, se puede acceder al último valor del array

for(let i=0; i<strings.length; i+=1){
    console.log(strings[i]);
}
/*con el ciclo "for", se puede hacer un recorrido de los valores de array, sub"[]" y el dato establecido por el ciclo, si se quiere acceder a un valor en especifico
se le agrega un punto y se escribe el valor que queremos ver, la variable i o indice, va recorriendo cada uno de los valores de array, 0,1,2,3,4...*/


/*Los metodos de los arrays, se accionan cuando utilizas los parentesis "()"*/


//Método .push()
strings.push("Mayo")
/*Para agregar un nuevo valor a un array, se utiliza el método "push" y agrega el valor al final del array*/


//Método .pop()
strings.pop()
//Con el método pop, se elimina el último valor del array


//Metodo .unshift()
strings.unshift("Array de meses")
//Con el metodo "unshift", se agregan valores al principio del array.


//Metodo .shift()
strings.shift()
//Con shift, se elimina el primer valor de el array.


//Método .splice()
strings.splice()
//Funciona para eliminar uno o más parametros, el primer numero es donde comienza, y el segundo numero, la cantidad deseada a eliminar valores.
//Por ejemplo si quisiera eliminar de enero hasta marzo, sería: string.splice(0,3)


/*Existen métodos "destructivos" que modifican los valores originales del array, y métodos no destructivos, que no modifican los valores originales de un array, por ejemplo, 
el método "join" que sirve para separar los valores dependiendo la entrada que le ponga, no modifica el valor original del array*/

//Método .slice()
strings.slice()
/*El método slice, sirve para separar ciertos valores aparte, sin la necesidad de modificar el array original, conservando así todos los valores originales
y separando solo los valores que me interesan.Acepta valores númericos, donde el primer valor es la posicion inicial del array, y el segundo valor es hasta donde
se mostrará, el ultimo valor no se mostrará en pantalla*/

//Método .indexOf()
console.log(strings.indexOf("Enero"))
console.log(strings.indexOf("pistola"))
/*El método indexOf, sirve para buscar un valor en la posicion en la que se encuentra. Como enero es el primer mes de mi array, me devuelve el valor de 0.
Si no encuentra un valor en el array, devuelve -1*/

//Método .includes()
console.log(strings.includes("Enero"))
console.log(strings.includes("pistola"))
/*Funciona similar al indexOf, solo que en ves de devolver la posicion, devuelve un valor booleano, si encuentra el valor devuelve "true", y si no lo encuentra
devuelve false*/


//Método .reverse()
console.log(strings.reverse())
/*El método revrese, voltea los valores del array, de atrás para adelante, es un método destructivo, ya que modifica el array original.*/

//Método .concat()
let mesesConNumeros= strings.concat(numeros)
console.log(mesesConNumeros)
/*El método concat, une dos arrays y las convierte en una sola, no se considera un array destructivo ya que ambas arrays conservan sus valores originales.
En el ejemplo uni mis variables "string" y "numeros"*/

//Array de objetos.

let carrito = []

let venta1 = {
    objeto: "Television",
    tamaño: "24 pulgadas",
    color: "negro",
    existencia: 5
}
let venta2 = {
    objeto: "PlayStation4",
    color: "blanco",
    almacenamiento: "1TB",
    existencia: 9
}
let venta3 = {
    objeto: "Cafetera",
    tazas: "12 tazas",
    color: "rosa",
    existencia: 10
}
let venta4 = {
    objeto: "laptop",
    color: "amarilla",
    almacenamiento: "250 gb",
    existencia: 2
}

carrito.push(venta2)
console.log(carrito)
console.log(carrito[0].color)
/*Este es un ejemplo practico de un array con objetos adentro, es el concepto básico de un carrito de compras.*/
/*Cuando el valor del array, no está establecido, el array devuelve "undefined", y si agregas un método al array sin definir, devuelve un error*/

for (let i=0; i<carrito.length; i+=1){
    console.log(carrito[i].objeto)
    console.log(carrito[i])
}
for(let item of carrito){
    console.log(item.color)
    console.log(item)
}
/*La sentencia "for...of" ejecuta un recorrido de cada uno de los objetos, y si quieres un valor en especifico, se utiliza el punto (.) y el valor que se desea.*/

const nombres = ["Luciano", "Ana", "Fer", "Valeria"]

for(let i in nombres){
    console.log(i)
}

for(let i of nombres){
    console.log(i)
}

for(let i = 0; i<nombres.length;i+=1){
    console.log(nombres)
}