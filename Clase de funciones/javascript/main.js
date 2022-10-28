/*Existen varías formas de declarar funciones, la primera de ellas es escribiendo la palabra reservada function, el nombre de la funcion y luego se escribe parentesis "()"
Después de eso, se le agrega el scope que es el bloque donde va a interactuar la variable.*/

/*Las funciones se tienen que definir antes de ser llamadas*/



function hacerAlgo(){
    document.write("Hola")
}

hacerAlgo()
//La forma de invocar a una función, es con el nombre de la función y un doble parenteris "()"

function restarNumeros(num1, num2){
    console.log(`El total de su resta es: ${num1 - num2}`)
}
//Los párametros son valores que va a recibir la función para hacer determinada tarea con esos valores
restarNumeros(1,2)
restarNumeros(2,1)
/*Cuando se invoque una función, dentro de los parentesis, tiene que ir los valores o el valor con los que la función va a trabajar, los valores que se introducen, tienen que 
ir en el orden en está escrito dentro de los párametros, sin importar el tipo de dato que se le otorgue, cadena de caracteres, number, boolean, o funciones*/

let num1 = 20
let num2 = 50
restarNumeros(num1,num2)
/*Dentro de los valores que recibe la función, también puede ir una variable que recibe un valor*/


let medicina = "Pepto"
let lapso = "Cada 8 hrs"

function tomarMedicina(string1, string2){
    return `tome su ${medicina} en un lapso de ${lapso}`
}
console.log(tomarMedicina())
/*Las variables globales pueden acceder a una función*/


function saludar(nombre="Empty", apellido="Empty"){
    return `Hola ${nombre} ${apellido}, un saludo`
}
console.log(saludar("María", "Santos"))
console.log(saludar())
/*A una función se le pueden asignar valores por defecto a los parametros, para cuando no obtengan datos se muestre un valor por defecto*/

function devolverAlgo(){
    console.log(`hola ${medicina} comiste ${lapso}`)
}

let res = devolverAlgo
console.log(res)
res = devolverAlgo()
console.log(res)
//Una función que no devuelve algo, siempre va a devolver un "undefined" como valor.

function devolverAlgo2(){
    console.log(`hola ${medicina} comiste ${lapso}`)
    return 5
}
let res2 = devolverAlgo2()
console.log(res2)
/*Para que una función devuelva un valor, se le tiene que agregar la palabra "return"*/

/*La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función, en el ejemplo de arriba, res va a devolver 5
porque en la función estoy retornando el valor de 5*/

//Se puede llamar a la ejecucion de una función dentro de otra función, este proceso se le conoce como, encadenamiento de funciones


//Scope

let saldo= 5000;

function consultar(){
    console.log(saldo)
    let importe= 2000
    return importe
}
//console.log(importe)

/*El scope es el ámbito donde vive una variable, una variable casi siempre funciona de afuera para adentro, pero casi nunca de adentro hacía afuera. En el ejemplo de arriba
Yo dentro de la función puedo acceder a saldo, ya que es una variable global, pero afuera de la función, no puedo acceder a importe, porque esa variable solo existe dentro
de la función*/

let nuevoImporte= consultar()

console.log(nuevoImporte)

/*Una forma de poder sacar un valor o una variable dentro de una funcion, es con la palabra reservada "return" y asignando la función a una variable.*/

let suma= 0;
function sumaDeValores (num1, num2){
    suma= num1 + num2
}

sumaDeValores(5,9)
console.log(suma)

let saludo2= ""
function saludar2(mensaje){
    saludo2 = mensaje
}

saludar2("Hola, me llamo Luciano, mucho gusto")
console.log(saludo2)

let boolean = false
function falseando(valor9){
    boolean = valor9
}

falseando(true)
console.log(boolean)

/*Una función puede cambiar el valor de una variable, cuando se ejecuta la función y se le da valor a los parametros*/


//Funciones anonimas y funciones flecha


//Función anonima
let funcionesAnonimas = function(){
    return `Esta es una función anonima`
}
console.log(funcionesAnonimas())
//Una función anonima se puede declarar dentro de una variable, y esa variable pasa a ser el nombre de la función

//Funcion flecha
let funcionFlecha = (valor1,valor2) =>{
    return `Esta es una función flecha ${valor1 + valor2}`
}

console.log(funcionFlecha(90,50))

let funcionFlecha2 = valor1 =>{
    return `Esta es una función flecha con un solo parametro ${valor1}`
}

console.log(funcionFlecha2(true))
/*Una función flecha es similar a una función anonima, solo que la palabra "function" no se le escribe, se escriben directamente los parametros y después de los parametros
se le pone la simbologia de "=>" y se abren los corchetes "{}", si la función tiene un solo parametro, se pueden quitar los parentesis de la función "()"*/

let funcionFlecha3 = (num1,num2)=> `El valor de su suma es: ${num1 + num2}`

console.log(funcionFlecha3(25,35))

/*Cuando una función flecha es de una sola linea, los corchetes "{}" no son necesarios y el return ya viene establecido por defecto*/

let comprar = () => `Usted a comprado una consola con éxito`

console.log(comprar())
//Cuando una función flecha, no tiene parametros, se pueden poner los parentesis vacios "()", o simplemente ponerle un guión bajo "_"