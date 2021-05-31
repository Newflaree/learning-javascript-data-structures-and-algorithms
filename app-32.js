console.clear();
/*
Arreglo multidimensional

También trabajamos con arreglos multidimensionales en JS. Por ejemplo, creemos una matriz de 
3 x 3. Cada celda continúa la suma i (fila) + j (columna) + z (profundidad) de la matriz, de 
la siguiente manera:
*/
var matrix3x3x3 = [];

for ( var i = 0; i < 3; i++ ) {
  matrix3x3x3[ i ] = []; 
  for ( var j = 0; j < 3; j++ ) {
    matrix3x3x3[ i ][ j ] = [];
    for ( var z = 0; z < 3; z++ ) {
      matrix3x3x3[ i ][ j ][ z ] = i + j + z;
    }
  }
}

/*
No importa cuántas dimensiones tengamos en la estructura de datos; necesitamos recorrer cada 
dimensión para acceder a la celda. Podemos representar una matriz de 3 x 3 x 3 con un diagrama 
de cubo, de la siguiente manera:
*/

/*
Para generar el contenido de esta matriz, podemos usar el siguiente código:
*/
for ( var i = 0; i < matrix3x3x3.length; i++ ) {
  for ( var j = 0; j < matrix3x3x3[ i ].length; j++ ) {
    for ( var z = 0; z < matrix3x3x3[ i ][ j ].length; z++ ) {
      console.log( matrix3x3x3[ i ][ j ][ z ] );
    }
  }
}

/*
Si tuviéramos una matriz de 3 x 3 x 3 x 3, tendríamos cuatro declaraciones for anidadas en 
nuestro código y así sucesivamente.
*/
