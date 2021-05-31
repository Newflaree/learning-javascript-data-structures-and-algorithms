console.clear();
/*
Eliminar elementos
Hasta ahora, ha aprendido a agregar valores al final y al comienzo de una matriz. 
Echemos un vistazo a cómo podemos eliminar un valor de una matriz.

Para eliminar un valor al final de una matriz, podemos usar el método pop:
*/
var numbers = [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
console.log( numbers );

numbers.pop();
console.log( numbers );

/*
Los métodos push y pop permiten que una matriz emule una estructura de datos de pila básica, 
que es el tema del próximo capítulo.

La salida de nuestra matriz serán los números de -4 a 12. La longitud de nuestra matriz es 17.
*/
console.log( numbers.length );

/*
Eliminar un elemento de la primera posición
Para eliminar un valor del principio de la matriz, podemos usar el siguiente código:
*/
for ( var i = 0; i < numbers.length; i++ ) {
  numbers[ i ] = numbers[ i + 1 ];
}

console.log( numbers );
console.log( numbers.length );

/*
Cambiamos todos los elementos una posición a la izquierda. Sin embargo, la longitud de la 
matriz sigue siendo la misma (17), lo que significa que todavía tenemos un elemento adicional 
en nuestra matriz (con un valor indefinido). La última vez que se ejecutó el código dentro del 
ciclo, i + 1 era una referencia a una posición que no existe. En algunos lenguajes como 
Java, C / C ++ o C #, el código arrojaría una excepción y tendríamos que terminar nuestro ciclo 
en numbers.length -1.

Como puede observar, solo hemos sobrescrito los valores originales de la matriz, y realmente no 
eliminamos el valor (ya que la longitud de la matriz sigue siendo la misma y tenemos este 
elemento adicional udefined).
*/

/*
Usando el método de cambio
Para eliminar un elemento del principio de la matriz, podemos usar el método de desplazamiento, 
de la siguiente manera:
*/
numbers.shift();
console.log( numbers );
console.log( numbers.length );

/*
Entonces, si consideramos que nuestra matriz tiene el valor -4 a 12 y una longitud de 17, 
después de ejecutar el código anterior, la matriz contendrá los valores -3 a 12 y tendrá 
una longitud de 16.

Los métodos shift y unshift permiten que una matriz emule una estructura de datos de cola básica, 
que es el tema del Capítulo 4, Colas.
*/





