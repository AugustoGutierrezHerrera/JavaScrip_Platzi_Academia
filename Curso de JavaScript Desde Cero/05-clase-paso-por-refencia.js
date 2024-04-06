//Tipo de datos complejos - Paso por referencia

let frutas = {
    naranja: '🍊'
}

let vejetales = frutas
vejetales.naranja = '🍉'
console.log(vejetales)

let ropa = {
    blusa: '👚'
}

ropa.pantalon = '👖'
console.log(ropa)