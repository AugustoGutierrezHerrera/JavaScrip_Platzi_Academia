
//String Primitivo #1
const stringPrimitivo='Soy un string primitivo'
console.log(typeof stringPrimitivo)

//String Primitivo #2
const stringPrimitivoTambien=String('Soy un string primitivo tambiÃ©n')
console.log(typeof stringPrimitivoTambien)

//String Objeto (uso de palabra clave NEW)
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres
const saludo='Hola. Â¿CÃ³mo estÃ¡s?'
console.log(saludo[2])

console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('CÃ³mo'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))//te envia el texto segun un rango de inicio y final + 1
console.log(saludo.length)//cantidad total de la cadena
console.log(saludo.toLocaleUpperCase())//texto en mayusculas
console.log(saludo.toLocaleLowerCase())//texto en minusculas

const saludoDividido=saludo.split(' ')//divide la cadena usando los espacios
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios=' Hola Mundo '
const saludoSinEspacios=saludoConEspacios.trim()//quita los espacios
console.log(saludoSinEspacios)

const saludoOriginal='Hola Mundo'
const nuevoSaludo=saludoOriginal.replace('Mundo','ðŸ©µ')//Remplaza un texto
console.log(nuevoSaludo)