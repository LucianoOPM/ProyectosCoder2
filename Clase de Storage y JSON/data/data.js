let datos = [
    {"mercancia": "arroz", "precio": 50, "disponibilidad": true},
    {"mercancia": "aguacate", "precio": 80, "disponibilidad": true},
    {"mercancia": "platanos", "precio": 60, "disponibilidad": false},
    {"mercancia": "cargadores", "precio": 30, "disponibilidad": false}
]

localStorage.setItem("datos", JSON.stringify(datos))

const datosAlmacenados = localStorage.getItem("datos")
console.log(datosAlmacenados)
const datosAlmacenadosJSON = JSON.parse(datosAlmacenados)
console.log(datosAlmacenadosJSON)


for (let dato of datosAlmacenadosJSON){
    console.log(dato[0])
}