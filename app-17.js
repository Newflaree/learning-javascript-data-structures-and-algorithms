console.clear();
/*
Valores de parámetros predeterminados para funciones
Con ES6, también es posible definir valores de parámetros predeterminados para funciones. 
Lo siguiente es un ejemplo:
*/
function sum1 ( x = 1, y = 2, z = 3 ) {
  return x + y + z;
};

console.log( sum1( 4, 2 ) );  // outputs 9

/*
Como no estamos pasando z como parámetro, tendrá el valor 3 por defecto. 
Entonces, 4 + 2 + 3 == 9.

Antes de ES6, tendríamos que escribir la función anterior como el siguiente código:
*/
function sum2 ( x, y, z ) {
  if ( x === undefined ) x = 1;
  if ( y === undefined ) y = 2;
  if ( z === undefined ) z = 3;

  return x + y + z;
};

console.log( sum2( 4, 2 ) );  // outputs 9

/*
Con ES6, podemos guardar algunas líneas de código utilizando la funcionalidad de valores 
de parámetros predeterminados.
*/



