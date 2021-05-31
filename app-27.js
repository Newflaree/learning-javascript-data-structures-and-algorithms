console.clear();
/*
Agregar elementos
Agregar y eliminar elementos de una matriz no es tan difícil; sin embargo, puede resultar 
complicado. Para los ejemplos que usaremos en esta sección, consideremos que tenemos la 
siguiente matriz de números inicializada con números del 0 al 9:
*/
var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

/*
Si queremos agregar un nuevo elemento a esta matriz (por ejemplo, el número 10), todo lo que 
tenemos que hacer es hacer referencia a la última posición libre de la matriz y asignarle 
un valor:
*/
numbers[ numbers.length ] = 10;

console.log( numbers );

/*
En JS, una matriz es un objeto mutable. Podemos agregarle nuevos elementos fácilmente. El objeto 
crecerá dinámicamente a medida que le agreguemos nuevos elementos. En muchos otros lenguajes, 
como C y Java, necesitamos determinar el tamaño de la matriz, y si necesitamos agregar más 
elementos a la matriz, necesitamos crear una matriz completamente nueva; no podemos simplemente 
agregarle nuevos elementos cuando los necesitemos.
*/

/*
Usando el método push
Sin embargo, también existe un método llamado push que nos permite agregar nuevos elementos al 
final de la matriz. Podemos agregar tantos elementos como queramos como argumentos al método push:
*/
numbers.push( 11 );
console.log( numbers );

numbers.push( 12, 13 );
console.log( numbers ); // The output of the numbers array wiil be numbers from 0 to 13.

/*
Insertar un elemento en la posición más adecuada
Ahora, digamos que necesitamos agregar un nuevo elemento a la matriz y nos gustaría insertarlo en 
la primera posición, no en la última. Para hacerlo, primero, necesitamos liberar la primera 
posición desplazando todos los elementos hacia la derecha. Podemos recorrer todos los elementos 
de la matriz, comenzando desde la última posición + 1 (longitud) y desplazando el elemento 
anterior a la nueva posición para finalmente asignar el nuevo valor que queremos a la primera 
posición (-1). Ejecute el siguiente código para esto:
*/
for ( var i = numbers.length; i >= 0; i-- ) {
  numbers[ i ] = numbers[ i - 1 ];
}

numbers[ 0 ] = -1;
console.log( numbers );

/*
Usando el método de unshift

La clase de matriz JS también tiene un método llamado unshift, que inserta los valores pasados 
en los argumentos del método al comienzo de la matriz:
*/
numbers.unshift( -2 );
numbers.unshift( -4, -3 );
console.log( numbers );

/*
Entonces, usando el método unshift, podemos agregar el valor -2 y luego -3 y -4 al comienzo de 
la matriz de números. La salida de esta matriz serán los números de -4 a 13.
*/
