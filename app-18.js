console.clear();
/*
Declaración de los operadores de propagación y descanso
En ES5, podemos convertir matrices en parámetros usando la función apply (). ES6 tiene el 
operador de propagación (...) para este propósito. Por ejemplo, considere la función suma 
que declaramos en el tema anterior. Podemos ejecutar el siguiente código para pasar los 
parámetros x, y y z:
*/
const sum = ( x = 1, y = 2, z = 3 ) => x + y + z;

var params = [ 3, 4, 5 ];
console.log( sum( ...params ) );

// El código anterior es el mismo que el código escrito en ES5, como sigue:
console.log( sum.apply( undefined, params ) );

/*
El operador de propagación (...) también se puede usar como un parámetro de descanso en 
funciones para reemplazar argumentos. Considere el siguiente ejemplo:
*/
const restParameterFunction = ( x, y , ...a ) => ( x + y ) * a.length;
console.log( restParameterFunction( 1, 2, 'hello', true, 7 ) );  // outputs 9

// El código anterior es el mismo que el siguiente:
function restParameterFunction2 ( x, y ) {
  var a = Array.prototype.slice.call( arguments, 2 );
  return ( x + y ) * a.length;
}

console.log( restParameterFunction2( 1, 2, 'hello', true, 7 ) );  // outputs 9


/*
Resumen

- con el operador spread ( ... ) podemos barrer todo el contenido de una arreglo

- También se puede usar como parámetro de descanso en una función para reemplazar argumentos
*/ 
