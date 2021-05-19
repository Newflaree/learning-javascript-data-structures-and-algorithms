console.clear();
/*
Acceder a elementos e iterar una matriz
Para acceder a una determinada posición del arreglo, también podemos utilizar corchetes, 
pasando el índice de la posición a la que nos gustaría acceder. Por ejemplo, digamos que 
queremos generar todos los elementos de la matriz daysOfWeek. Para hacerlo, necesitamos hacer 
un bucle en la matriz e imprimir los elementos, de la siguiente manera:
*/
var daysOfWeek = [
  'Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednes day', 
  'Thursday', 
  'Friday', 
  'Saturday' 
];

for ( var i = 0; i < daysOfWeek.length; i++ ) {
  console.log( daysOfWeek[ i ] );
}

/*
Echemos un vistazo a otro ejemplo. Digamos que queremos averiguar los primeros 20 números de 
la secuencia de Fibonacci. Los dos primeros números de la secuencia de Fibonacci son 1 y 2, 
y cada número subsiguiente es la suma de los dos números anteriores:
*/
var fibonacci = [];  // { 1 }
fibonacci[ 1 ] = 1;  // { 2 }
fibonacci[ 2 ] = 1;  // { 3 }

for ( var i = 3; i < 20; i++ ) {
  fibonacci[ i ] = fibonacci[ i - 1 ] + fibonacci[ i - 2 ];  //// { 4 }
}

for ( var i = 1; i < fibonacci.length; i++ ) {  // { 5 }
  console.log( fibonacci[ i ] );  // { 6 }
}

/*
Entonces, en la línea {1}, declaramos y creamos una matriz.

En las líneas {2} y {3}, asignamos los dos primeros números de la secuencia de Fibonacci a la 
segunda y tercera posiciones de la matriz (en JS, la primera posición del array siempre está 
referenciada por 0, y como no hay 0 en la secuencia de Fibonacci, lo omitiremos).

Entonces, todo lo que tenemos que hacer es crear del tercero al vigésimo número de la secuencia 
(como ya conocemos los dos primeros números). Para hacerlo, podemos usar un ciclo y asignar la 
suma de las dos posiciones anteriores de la matriz a la posición actual (línea {4}, comenzando 
desde el índice 3 de la matriz hasta el índice 19).

Luego, para echar un vistazo a la salida (línea {6}), solo necesitamos hacer un bucle de la 
matriz desde su primera posición hasta su longitud (línea {5}).

Podemos usar console.log para generar cada índice de la matriz (líneas {5} y {6}), o también 
podemos usar console.log (fibonacci) para generar la matriz en sí. La mayoría de los navegadores 
tienen una buena representación de matriz en console.log.

Si desea generar más de 20 números de la secuencia de Fibonacci, simplemente cambie el número 
20 por el número que desee.
*/
