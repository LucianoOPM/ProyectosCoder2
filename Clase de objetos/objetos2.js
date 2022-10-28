//objeto literal
let facturas = { // las llaves "{}" representan objetos
    valor: 10,
    nombre: "Tacos",
    pagado: false
    //Para asignar un valor a una propiedad, se usan los dos puntos (:) y no el signo de igual (=).
    //Lo que está antes de los dos puntos, es la llave/key o propiedad del objeto.
    //Lo que está después de los dos puntos, es el valor de la propiedad del objeto.
}
console.log(facturas)

/*Los objetos, salvo en la consola, no se pueden leer

alert(facturas)
//[object Object]

document.write(facturas)
//[object Object]

*/

//Para acceder a la propiedad de un objeto, hay dos formas de emplearlo, Una es con un sintaxtis de punto (.) y la otra es con los corchetes ([""])

alert(facturas.nombre)
document.write(facturas["valor"])

/*Para agregar una propiedad más al objeto, se invoca el nombre del objeto, se le agrega un punto (.), se le define un nombre a la propiedad y se le agrega el valor.
En este caso, se usa el signo "=" y no los dos puntos ":" .*/

facturas.color = "negro"
console.log(facturas)

/*También se puede modificar los valores de las propiedades invocando el nombre del objeto, con el nombre de la propiedad y reasignandole un valor con el signo de igual (=)*/

facturas.valor = 50
console.log(facturas)

/*funcion constructora: Sirve como un molde, para crear nuevos productos/objetos según los parametros que le otorguemos*/
//recibe parametros de los argumentos de el nuevo objeto 
function OtraFactura(valor, nombre, pagado){
    this.valor = valor
    this.nombre = nombre
    this.pagado = pagado

    //this hace referencia al objeto que se está creando (En este caso, this es la función constructora "OtraFactura")
}

//Pasa argumentos y la funcion constructora recibe parametros
let factura2 = new OtraFactura(20, "pizza", true)
console.log(factura2)
//Aqui this, haría referencia a la variable constructora, en este caso sería "factura2"
let factura3 = new OtraFactura (60, "cerveza", false)
console.log(factura3)


//Metodos VS Funciones

//alert() es un ejemplo de una función porque como todas las funciones, al usar los dos parentesis, estás invocando una función
//Math.random() es un ejemplo de el objeto "Math" el cual está ejecutando una función llamada "random" que está dentro de su objeto
//Bajo el capó, todo es un metodo, ya que alert también se puede invocar como window.alert().


let sumandoDosNumeros = {
    x:5,
    y:10,
    suma: function(){
        return this.x + this.y
    }
}
console.log(sumandoDosNumeros.suma())
//Dentro de un objeto, también pueden haber funciones

let mayusculas = {
    nombre: "Luciano",
    haciendoMayusculas : function(){
        return (this.nombre).toUpperCase()
    }
}
console.log(mayusculas.haciendoMayusculas())
/*A las funciones también se le pueden agregar metodos, por ejemplo a la cadena de caracteres, le aplique el método "toUpperCase", el cual convierte mi cadena de caracteres en
letrás mayusculas*/



function NuevoPokemon(nombre, nivel, captura, genero){
    this.nombre = nombre
    this.nivel = nivel
    this. captura = captura 
    this.genero = genero
//En las funciones constructoras, también se pueden escribir funciones
    this.evolucion = function (){
        return "está evolucionando"
    }
}

let pokemon1 = new NuevoPokemon ("Gardevoir", 35, true, "femenino")

/*Las funciones que escribimos dentro de la función constructora, funcionan como una funcion normal, se ejecutan con los parentesis "()", y escribiendo el nombre de el objeto
constructor a la que hacemos referencia.*/
console.log(pokemon1.nombre)
console.log(pokemon1.evolucion())


//Metodos de busqueda

console.log("nombre" in pokemon1)
console.log("tacos" in pokemon1)
/*El operador "in" se usa para buscar si existe una propiedad en un objeto, si la afirmación es correcta, devuelve "true" y si no lo es, devuelve "false"
 (O sea, valores booleans)*/

for(const busqueda in pokemon1){
    console.log(busqueda)
}
/*Para revisar todas las propiedades que tiene un objeto, se utiliza el ciclo "for...in"*/

//Clases

/* 
Sintaxis de una clase
class NombreDeLaClase{
    constructor()
}
*/

class Mascota {
    constructor(nombre, raza, color, edad){
    //En el constructor van los parametros que va a llevar nuestro nuevo objeto, y se definen igual que en la funcion constructora, con "this."
        this.nombre = nombre
        this.raza = raza
        this.color = color
        this.edad = edad
    }
    ladrar(){
        console.log("guau")
        //Los métodos dentro de una clase, no se agregan en el constructor, se agregan dentro de la clase pero afuera del constructor.
    }
}
/*Las clases, son moldes para crear objetos, así como las funciones constructoras.*/


let elsin = new Mascota("Elsin", "Gato", "Gris", 8)
console.log(elsin)

let Ana = new Mascota("Ana", "Perrita", "Multicolor", 24)
for (prop in Ana){
    console.log(prop)//Si se quiere ver los valores de los parametros, se usaría "console.log(Ana[prop])"
}