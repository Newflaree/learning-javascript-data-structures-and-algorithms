console.clear();
/*
Agregar y eliminar elementos de una posición específica
Hasta ahora, ha aprendido a agregar elementos al final y al principio de una matriz, y también 
ha aprendido a eliminar elementos del principio y del final de una matriz.
¿Qué pasa si también queremos agregar o eliminar elementos de cualquier posición particular 
de nuestra matriz?
¿Cómo podemos hacer esto?

Podemos usar el método de empalme para eliminar un elemento de una matriz simplemente especificando 
la posición / índice del que nos gustaría eliminar y cuántos elementos nos gustaría eliminar, 
de la siguiente manera:
*/
var numbers = [ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
console.log( numbers );

numbers.splice( 5, 3 )
console.log( numbers );

/*
Este código eliminará tres elementos, comenzando desde el índice 5 de nuestra matriz. Esto 
significa que los números [5], los números [6] y los números [7] se eliminarán de la matriz 
de números. El contenido de nuestra matriz será -3, -2, -1, 0, 1, 5, 6, 7, 8, 9, 10, 11 y 12 
(ya que los números 2, 3 y 4 se han eliminado).

Al igual que con las matrices y objetos JS, también podemos usar el operador de eliminación 
para eliminar un elemento de la matriz, por ejemplo, eliminar números [0]. Sin embargo, la 
posición 0 de la matriz tendrá el valor indefinido, lo que significa que sería lo mismo que 
hacer números [0] = indefinido. Por esta razón, siempre debemos usar los métodos splice, pop 
o shift (que aprenderá a continuación) para eliminar elementos.

Ahora, digamos que queremos insertar los números 2 a 4 nuevamente en la matriz, comenzando desde 
la posición 5. Podemos usar nuevamente el método de empalme para hacer esto:
*/
numbers.splice( 5, 0, 2, 3, 4 );
console.log( numbers );

/*
El primer argumento del método es el índice del que queremos eliminar o insertar elementos. 
El segundo argumento es la cantidad de elementos que queremos eliminar (en este caso, no queremos 
eliminar ninguno, por lo que pasaremos el valor 0 (cero)). Un tercer argumento (en adelante) 
son los valores que nos gustaría insertar en la matriz (los elementos 2, 3 y 4). 
El resultado será valores de -3 a 12 nuevamente.

Finalmente, ejecutemos el siguiente código:
*/
numbers.splice( 5, 3, 2, 3, 4 );
console.log( numbers );

/*
La salida serán valores de -3 a 12. Esto se debe a que estamos eliminando tres elementos, 
comenzando desde el índice 5, y también estamos agregando los elementos 2, 3 y 4, comenzando 
en el índice 5.
*/

