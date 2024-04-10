// NULL
const snoopy=null
console.log(snoopy)
console.log(typeof snoopy)

//UNDEFINED
let name
console.log(name)

//SYMBOL(valores que no queremos que cambie)
const uniqueId=Symbol('id')
const symbol1=Symbol(1)
const symbol2=Symbol(1)
console.log(symbol1===symbol2)

const ID=Symbol('id')
let user={}
user[ID]='1234'
console.log(user)

//BIGINT(se utiliza para numeros o expreciones grandes)
const bigNumber=109823746783982764567847654782374n
console.log(bigNumber)
const numberOfParticlesInTheUniverse=10000000000000000000n
console.log(numberOfParticlesInTheUniverse)