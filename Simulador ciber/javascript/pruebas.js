let peticionEntrada = Number(prompt(`Bienvenido/a al ciber Paquita, si quiere rentar un ordenador pulse 1, si quiere copias pulse 2, y si quiere rentar una consola pulse 3?`))
let filtro;

class Ordenadores{
    constructor(identificador, disponible, descompuesta){
        this.identificador=identificador
        this.disponible= disponible
        this.descompuesta= descompuesta
    }
}
class Consolas{
    constructor(identificador, disponible, descompuesta, tipoconsola){
        this.identificador=identificador
        this.disponible=disponible
        this.descompuesta=descompuesta
        this.tipoconsola=tipoconsola
    }
}

let ordenador1= new Ordenadores("Computadora 1", true, true)
let ordenador2= new Ordenadores("Computadora 2", true, false)
let ordenador3= new Ordenadores("Computadora 3", false, false)
let ordenador4= new Ordenadores("Computadora 4", true, false)
let ordenador5= new Ordenadores("Computadora 5", false, false)

let consola1 = new Consolas("consola 1", false, false, "xbox")
let consola2 = new Consolas("consola 2", true, false, "xbox")
let consola3 = new Consolas("consola 3", true, false, "xbox")
let consola4 = new Consolas("consola 4", false, false, "xbox")
let consola5 = new Consolas("consola 5", true, true, "play station")

let ordenadoresCiber = [ordenador1, ordenador2, ordenador3, ordenador4, ordenador5];
let consolasCiber = [consola1, consola2, consola3, consola4, consola5]

let entradaCiber = servicio=>{
    if (servicio){
        switch(servicio){
            case 2:
                let copias = Number(prompt("¿Cuantas copias va a querer?"))
                    if(copias > 1){
                        alert(`Aqui tiene sus ${copias} copias, un placer atenderle`)
                    }else if(copias<1){
                        alert(`Aqui no se entregan copias negativas`)
                    }else{
                        alert(`Aqui tiene su copia, un placer atenderle.`)
                    }
            break
            case 1:
                filtro = ordenadoresCiber.filter(item=>item.disponible==true)
                for(let item of filtro){
                    alert(`Nuestras computadoras disponibles son: ${item.identificador}`)
                }
            break
            case 3:
                filtro = consolasCiber.filter(item=>item.disponible==true)
                for(let item of filtro){
                    alert(`Nustras consolas disponibles son: ${item.identificador}`)
                }
            break
        default: `No se eligió un valor correcto, por favor reinicie la página y comience de nuevo.`}
        }
    }
entradaCiber(peticionEntrada)