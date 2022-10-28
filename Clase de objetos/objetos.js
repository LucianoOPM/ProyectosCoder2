class RegistroDeFacturas{
    constructor(nombre, costo, fecha, vencido){
        this.nombre = nombre
        this.costo = costo
        this.fecha = fecha
        this.vencido = vencido
    }
}
let confirmar;
do{
    let recibo = prompt("¿Qué factura quiere registrar?")
    let valor = Number(prompt("¿De cuanto fue el valor total de la factura?"))
    let fecha = prompt("¿Cuál es la fecha de vencimiento de la factura?")
    let vencimiento = confirm("Está vencido la factura?")
    
    confirmar = confirm("¿Desea agregar más productos?")

    let registro1 = new RegistroDeFacturas(recibo, valor, fecha, vencimiento)
    console.log(registro1)
    console.log(registro1.costo)
}while(confirmar === true)