console.clear();
/*
Funciones de flecha
Las funciones de flecha son una gran manera de simplificar la sintaxis de funciones en ES6. 
Considere el siguiente ejemplo:
*/
var circleArea = function circleArea( r ) {
  var PI = 3.14;
  var area = PI * r * r; 
  return area;
}

console.log( circleArea( 2 ) );

// Podemos simplificar la sintaxis del código anterior al siguiente código:
let circleArea2 = ( r ) => {  // { 1  }
  const PI = 3.14;
  let area = PI * r * r;
  return area;
}

console.log( circleArea2( 2 ) );

/*
La principal diferencia está en la línea {1} del ejemplo, en la que podemos omitir la palabra 
clave functin usando =>.

Si la función tiene una declaración única, también podemos usar una versión más simple, omitiendo 
la palabra clave return. Eche un vistazo a lo siguiente:
*/ 
let circleArea3 = ( r ) => 3.14 * r * r;
console.log( circleArea3( 2 ) );

/*
Resumen

- La principal diferencia entre una función normal y un de flecha es que omitimos la palabra 
  function

- Si la función tiene una declaración única, podemos escribir la función en una sola línea 
  utilizando la versión corta de la de función de flecha ( a, b ) => a + b;
*/ 
