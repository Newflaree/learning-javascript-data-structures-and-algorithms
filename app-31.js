console.clear();
/*
Iterando los elementos de arreglos bidimensionales

Si queremos echar un vistazo a la salida de la matriz, podemos crear una función genérica 
para registrar su salida:
*/
var averageTemp = [];
averageTemp[ 0 ] = [ 72, 75, 79, 79, 81, 81 ];
averageTemp[ 1 ] = [ 81, 79, 75, 75, 73, 72 ];

function printMatrix( myMatrix ) {
  for ( var i = 0; i < myMatrix.length; i++ ) {
    for ( var j = 0; j < myMatrix[ i ].length; j++ ) {
      console.log( myMatrix[ i ][ j ] );
    }
  }
}

/*
Necesitamos recorrer todas las filas y columnas. Para hacer esto, necesitamos usar un bucle 
for anidado en el que la variable i representa filas y j representa las columnas.

Podemos llamar al siguiente código para echar un vistazo a la salida de la matriz averageTemp:
*/
printMatrix( averageTemp )
