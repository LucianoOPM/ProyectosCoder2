let suma = function(a,b){
    return a + b
}

let resultado = suma
console.log(resultado(50,50))
//Al asignar a una variable, una función, mi variable se convierte en una función, porque esta ocupando el mismo espacio de memoria

//Funciones de orden superior

/*Las funciones de orden superior, tienes varias caracteristicas.
1.-La primera caracteristica es que recibe una función como párametro (Esta es la más usada)
2.-Devuelven o retornan una función*/


let sumar = (a,b) => a + b
let multiplicar = (a,b) => a * b

let sumarOmultiplicarOrestar = funcionEjemplo => funcionEjemplo(50,20)
/*El ejmplo "sumarOmultiplicar" es un ejemplo de una función de orden superior, ya que es una función la cual tiene ya ingresada dos valores, pero hasta que no reciba una funcion
como parametro, esa función no ejecuta ningun resultado*/

/* 
console.log(sumar(5,5))
console.log(multiplicar(10,100))
*/

console.log(sumarOmultiplicarOrestar(sumar))
console.log(sumarOmultiplicarOrestar(multiplicar))
console.log(sumarOmultiplicarOrestar(function(a,b){
    return a - b
}))
/*Aqui estoy ejecutando mi función llamada "sumarOmultiplicar", y le estoy ingresando como parametro una función llamada suma/multiplicar, y al tener una función
dentro del parametro, ya se puede ejecutar para darme un resultado dependiendo de la función. También se puede declarar directamente una función*/ 

const obtenerNombre = function(){
    return function(){
        console.log("Luciano")
    }
}
const obtenerNombre2 = () => () => console.log("Ana")

const fun = obtenerNombre()
const fun2 = obtenerNombre2()
fun()
fun2()
/*La segunda caracteristica es que las funciones pueden devolver una función, el ejemplo la función obtener nombre, está devolviendo una función*/



//Más métodos de arrays

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]


/*
meses.forEach(function(mes){
    console.log(mes)
}) 
*/
meses.forEach( (mes) => console.log(mes) ) //Es lo mismo que el for...each de arriba, solo que en forma de arrow function

/*Es otra forma de itinerar los valores de un array, igual al for...of y los demás ya vistos en la clase de Arrays*/

//Map

let mesesIndex = meses.map((mes, idx) => idx + " - " + mes)
console.log(mesesIndex)
/*El método "map" crea un nuevo array de los valores otorgados sin modificar el array original, con el array nuevo se puede hacer de todo y conservar los valores
del array original*/



//Conociendo los nuevos array method

//forEach()
meses.forEach(mes => {
    if (mes==="Enero"){
        console.log("Enero existe")
    }
})
//En este sintaxis de forEach, lo que hace es verificar si existe el valor definido.


//.includes()
const busqueda = meses.includes("Enero")
    console.log(busqueda)
//El .includes es un método de busqueda el cual verifica si existe X cosa en nuestro array, y de parametro se tiene que usar un valor a buscar

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Play station 5", precio: 1000},
    {nombre: "PC GAMER", precio: 1001},
    {nombre: "cafetera", precio: 200},
    {nombre: "parlantes", precio: 400},
    {nombre: "mouse gamer", precio: 150}
]


//.some()
const existencia = carrito.some(item => item.nombre === "PC GAMER")
console.log(existencia)
/*El .some sirve para buscar una variable dentro de un array de objetos, devuelve un true o false dependiendo si encuentra o no lo que se buscó*/



//.reduce()

let res2 = carrito.reduce((t,item)=>t + item.precio,0)
let res = carrito.reduce((t/*La t es un parametro el cual conserva el valor inicial + el valor de la siguiente suma*/, item/*Es el segundo parametro el
cual define el segundo valor de la suma*/) => t/*Tiene el valor inicial el cual es 0, después del primer "ciclo" tendrá el valor del primer precio
el cual es 500*/ + item.precio/*Tiene el valor inicial del item/carrito.precio el cual es 500, después se sumará a la t y tomará el segundo valor el cual es 1000*/, 0/*
Es el contador inicial el cual definimos en cuanto comenzará nuestra suma, en este caso 0*/);
console.log(res)
/*El médoto .reduce() es una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.*/



//.filter()
let filtro = carrito.filter(item => item.precio < 500)
console.log(filtro)
/*Es un filtro el cual estableces que te traiga cierto valor deseado, en este caso, me traera de carrito, todos los objetos que tengan un "precio" menor a 500*/


//.find()
let buscar = carrito.find(item => item.precio === 1001)
let buscar2 = carrito.find(item => item.nombre === "cafetera")
console.log(buscar)
console.log(buscar2)
/*El metodo find busca un valor, en este caso está buscando en precio, un objeto que tenga el precio de 1001, también funciona con cadenas de caracteres*/



//.every()
let h = carrito.every(item => item.precio > 400)
console.log(h)
/*El método every se encarga de devolver un valor true, si todos los valores cumplen con la condicion establecida, pero si no se cumplen con la condición establecida, 
devuelve false*/




//Método Math()

//Math.min y Math.max
console.log(Math.max(55,13,0,-25,93,4))//93
console.log(Math.min(55,13,0,-25,93,4))//-25
//los métodos de max y min reciben de argumento valores númericos, y lo que hace min y max es sacar el menor y mayor exponente respectivamente

const pi = Math.PI//3.141592
console.log(pi)

console.log(Math.ceil(pi))//4
/*Math.ceil() Devuelve el valor redondeado mayor o más proximo al establecido*/

console.log(Math.floor(pi))//3
/*Math.floor() Devuelve el valor redondeado hacía abajo*/

console.log(Math.round(pi))//3
/*Math.round() Devuelve el valor entero más proximo dependiendo del hacía abajo o hacía arriba, depediendo de los decimales*/

console.log(Math.random())
console.log(Math.random()*10)
/*Math.random() devuelve un valor aleatorio entre 0 y 1, si quieres un mayor valor, simplemente multiplicalo por la cantidad que deseas, el ejemplo de abajo me devuelve un 
número entre 0 y 9*/


//New Date
console.log(new Date())
/*Con el constructor, "new date" podemos crear una cadena de caracteres con la fecha del momento.*/

console.log(new Date(2022, 10, 05) + "Este día es mi cumpleaños")
/*Los valores que recibe cuentan a partir de año, mes, día, hora, minuto y segundo, en los meses, enero comienza a contar a partir de 0, por lo tanto el mes de
diciembre sería el mes 11*/


//getMonth(), getFullYear(), getDay()
//Nos retornan valores númericos dependiendo el més, año o día creado