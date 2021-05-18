console.clear();
/*
Constantes
ES6 también introdujo la palabra clave const. Su comportamiento es el mismo que el de la palabra 
clave let; la única diferencia es que una variable definida como constante tiene un valor de solo 
lectura, es decir, un valor constante.

Cuando intentamos asignar un nuevo valor a PI o incluso intentamos volver a declararlo como var 
PI o dejar PI, el código arrojará un error diciendo que PI es de solo lectura.

El código anterior se ejecutará en https://goo.gl/4xuWrC
*/
"use strict";

// EcmaScript 6 Constants
const PI = 3.141593;
PI = 3.0;  //throws error

console.log( PI );

/*
Resumen

- Una variable definida como constante tiene un valor de solo 
  lectura, es decir, un valor constante.
*/ 
