// PRIMERA PARTE
// PRIMERA PARTE
// PRIMERA PARTE

//Caracteres de escape
const primeraOpcion = 'comillas simples'
const segundaOpcion = "comillas dobles"
const terceraOpcion = `comillas inversas`

// 1. Concatenacion: Operador +
const direccion = 'El Solar de Cayma'
const ciudad = 'Arequipa'
const direccionCompleta = 'Mi dirección completa es: '+ direccion + ciudad
console.log('Sin espacios:' + direccionCompleta)

const direccionCompletaConEspacios = 'Mi direccion completa es: ' + direccion + ' ' + ciudad 
console.log('Con espacio: ' + direccionCompletaConEspacios)

// 2. Concatenacion: Templeas Literals
const nombre = 'Augusto'
const pais = '🇵🇪'
const presetacion = `Hola, soy ${nombre} de ${pais}`
console.log(presetacion)

// 3. Concatenación: Join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente'
const terceraParte = '🇵🇪'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

// 4. Concatenación: concat()
const hobbie1 = 'correr'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbie = 'Mis hobbies son: '.concat(hobbie1,', ', hobbie2,', ', hobbie3)
console.log(hobbie)

// SEGUNDA PARTE
// SEGUNDA PARTE
// SEGUNDA PARTE
//Caracteres de escape

//1. Escape Alternaativo
const escapeAlternativo="I'm Software Engineer"

//2. Barra invertica
const escapeBarraInvertida='I\'m Software Engineer'

//3. Template literals
const escapeComillaInvertida=`I'm Software Engineer`

//Escritura de string largos
const poema='Las rosas son rojas,\n'+
'Las violetas son azules,\n'+
'Caracter inesperado,\n'+
'En la lÃ­nea 86.'
console.log(poema)

const poema2='Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la lÃ­nea 86.'
console.log(poema2)

const poema3=`Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la lÃ­nea 86.`
console.log(poema3)