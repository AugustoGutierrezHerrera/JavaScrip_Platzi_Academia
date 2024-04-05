// Tipos de datos primitivos -Inmutables
let numero = 43
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipos de datos complejos - Mutables
let usuario = {nombre: 'Pedro', edad:150}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'platano'
console.log(frutas)

function cambiarNombre(objeto){
    objeto.nombre = 'Nuevo Nombre'
}

let persona = {nombre:'Antonio'}
cambiarNombre(persona)
console.log(persona)