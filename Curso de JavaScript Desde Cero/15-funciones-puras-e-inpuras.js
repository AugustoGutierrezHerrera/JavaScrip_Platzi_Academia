
/*1. Funcion Pura: Dada una misma entrada se obtiene la misma salida, no producen efectos secundarios. */

/*Funcion impura: genera lo que son los Side Efects:
    1. Modificar variables globales.
    2. Modificar parametros en una funcion
    3. Solicitudes HTTP
    4. Imprimir mensajes en la pantalla o en consola.
    5. Manipulacion del DOM 
    6.Obtener la hora actual.*/


//Función pura
function sum(a, b) {
  return a + b;
}

//Función Impura: imprime mensajes
function sum(a, b) {
  console.log("A: ", a);
  return a + b;
}

//Función Impura: modifica variables glovales
let total = 0;
function sumWithSideEffect(a) {
  total += a;
  return total;
}

//Función Pura
function square(x) {
  return x * x;
}

//Función Pura
function addTen(y) {
  return y + 10;
}

//Función Pura: combinacion de dos funciones puras
const number = 5;
const finalResut = addTen(square(number));
console.log(finalResut);
