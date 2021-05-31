console.clear();
/*
Arreglos bidimensionales y multidimensionales
Al comienzo de este capítulo, usamos el ejemplo de medición de temperatura. Ahora usaremos este 
ejemplo una vez más. Consideremos que necesitamos medir la temperatura cada hora durante unos 
días. Ahora que ya sabemos que podemos usar un arreglo para almacenar las temperaturas, podemos 
escribir fácilmente el siguiente código para almacenar las temperaturas durante dos días:
*/
var averageTempDay1 = [ 72, 75, 79, 79, 81, 81 ];
var averageTempDay2 = [ 81, 79, 75, 75, 73, 72 ];
console.log( averageTempDay1 )
console.log( averageTempDay2 )

/*
Sin embargo, este no es el mejor enfoque; ¡Podemos escribir un código mejor! Podemos usar una 
matriz (arreglo bidimensional) para almacenar esta información, en la que cada fila representará 
el día y cada columna representará una medición de temperatura por hora, como sigue:
*/
var averageTemp = [];
averageTemp[ 0 ] = [ 72, 75, 79, 79, 81, 81 ];
averageTemp[ 1 ] = [ 81, 79, 75, 75, 73, 72 ];
console.log( averageTemp )

/*
JS solo admite arreglos unidimensionales; no admite matrices. Sin embargo, podemos implementar 
matrices o cualquier arreglo multidimensional usando un arreglo de arreglos, como en el código 
prious. El mismo código también se puede escribir de la siguiente manera:
*/
console.log( '---------------------------------' );
// day 1
averageTemp[ 0 ] = [];
averageTemp[ 0 ][ 0 ] = 72;
averageTemp[ 0 ][ 1 ] = 75;
averageTemp[ 0 ][ 2 ] = 79;
averageTemp[ 0 ][ 3 ] = 79;
averageTemp[ 0 ][ 4 ] = 81;
averageTemp[ 0 ][ 5 ] = 81;

// day 2
averageTemp[ 1 ] = [];
averageTemp[ 1 ][ 0 ] = 81;
averageTemp[ 1 ][ 1 ] = 79;
averageTemp[ 1 ][ 2 ] = 75;
averageTemp[ 1 ][ 3 ] = 75;
averageTemp[ 1 ][ 4 ] = 73;
averageTemp[ 1 ][ 5 ] = 72;
console.log( averageTemp )

/*
En el código anterior, especificamos el valor de cada día y hora por separado. También podemos 
representar este ejemplo en un diagrama similar al siguiente:

       [ 0 ]    [ 1 ]    [ 2 ]    [ 3 ]    [ 4 ]    [ 5 ]
[ 0 ]   72       75       79       79       81       81
[ 1 ]   81       79       75       75       73       73

Cada fila representa un día y cada columna representa una hora del día (temperatura).
*/

