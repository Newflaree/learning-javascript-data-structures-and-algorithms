console.clear();
/*
Control Structures
JS tiene un conjunto similar de estructuras de control como los lenguajes C y Java. 
Las declaraciones condicionales son compatibles con if ... else y switch. Los bucles son 
compatibles con las construcciones while, do ... while y for.

Declaraciones condicionales
La primera declaración condicional que veremos es la construcción if ... else. Hay algunas 
formas en que podemos usar la construcción if ... else. Podemos usar la instrucción if si 
queremos ejecutar un script solo si la condición es verdadera, como sigue:
*/
var num1 = 1;

if ( num1 === 1 ) {
  console.log( 'num is equal to 1' );
}

/*
Podemos usar la declaración if ... else si queremos ejecutar un script y la 
condición es verdadera u otro script en caso de que la condición sea falsa (else), como sigue:
*/
var num2 = 0;

if ( num2 === 1 ) {
  console.log( 'num is equal to 1' );
} else {
  console.log( 'num is not equal to 1, the value of num is', num2 );
}

/*
La instrucción if ... else también se puede representar mediante un operador ternario. 
Por ejemplo, eche un vistazo a la siguiente declaración if ... else:
*/
if ( num2 === 1 ) {
  num2--;
} else {
  num2++;
}

console.log( num2 );

// También se puede representar de la siguiente manera:
( num2 === 1 ) 
  ? num2-- 
  : num2++;

console.log( num2 );

/*
Además, si tenemos varios scripts, podemos usar if ... else varias veces para ejecutar 
diferentes scripts basados en diferentes condiciones, como sigue:
*/
var month = 4;

if ( month === 1 ) {
 console.log( 'January' );
} else if ( month === 2 ) {
 console.log( 'February' );
} else if ( month === 3 ) {
 console.log( 'March' );
} else {
 console.log( 'Month is not January, February or March' );
}

/*
Finalmente, tenemos la declaración de switch. Si la condición que estamos evaluando 
es la misma que la anterior (sin embargo, se está comparando con diferentes valores), 
podemos usar la instrucción switch:
*/ 
month = 3;

switch ( month ) {
  case 1:
    console.log( 'January' );
    break;
  case 2:
    console.log( 'February' );
    break;
  case 3:
    console.log( 'March' );
    break;
  default:
    console.log( 'Month is not January, February or March' );
}

/*
Una cosa que es muy importante en una declaración switch es el uso de las palabras clave 
case y break. La cláusula case determina si el valor de switch es igual al valor de la cláusula 
case. La instrucción break evita que la instrucción switch ejecute el resto de la instrucción 
(de lo contrario, ejecutará todos los scripts de todas las cláusulas de caso debajo del caso 
coincidente hasta que se encuentre una instrucción de ruptura en una de las cláusulas de caso). 
Finalmente, tenemos la declaración predeterminada, que se ejecuta de forma predeterminada 
si ninguna de las declaraciones de caso es verdadera (o si la declaración de caso ejecutada no 
tiene la declaración de interrupción).
*/

/*
Resumen

- Las estructuras de control, nos sirven para evaluar una condición y tomar un comportamiento
  de acuerdo al resultado.

- Se puede escribir un if de que sólo tenga un else de la forma corta
  ( condition ) 
    ? if 
    : else;

- La keyword break, evita que el switch ejecute el resto de las instrucciones.
*/
