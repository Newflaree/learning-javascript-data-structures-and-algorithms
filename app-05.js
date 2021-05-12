console.clear();
/*
Equal operator functions (== and ===)

Los dos operadores iguales admitidos por JS pueden causar un poco de confusión al 
trabajar con ellos.

Cuando se usa ==, los valores pueden considerarse iguales incluso cuando son de 
diferentes tipos. Esto puede resultar confuso incluso para un desarrollador senior de JS. 
Analicemos cómo funciona == usando la siguiente tabla:

Type( x )         | Type( y )         | Result

null                Undefined           true
undefined           null                true  
Number              String              x == toNunber( y )
String              Number              toNumber( x ) == y
Boolean             Any                 toNumber( x ) == y
Any                 Boolean             x == toNunber( y ) 
String or Number    Object              x == toPrimitive( y )
Object             String or Number    toPrimitive( x ) == y
*/
console.log( '==============================' );
const typeX = 'hola';
const typeY = [ 'hola' ];

console.log( typeX == typeY );
console.log( '==============================' );
/*
Si xey son de algún tipo, entonces JS usará el método equals para comparar los dos 
valores u objetos. Cualquier otra combinación que no esté listada en la tabla da un 
resultado falso.

Los métodos toNumber y toPrimitive son internos y evalúan los valores de acuerdo con 
las tablas que siguen.

El método toNumber se presenta aquí:
Value type   |  Result
undefined    =  this is NaN
null         =  this is +0
Boolean      =  Si el valor es verdadero, el resultado es 1; si el valor es falso, 
                el resultado es +0.
Number       =  Este es el valor del número
String       =  Esto analiza la cadena en un número. Si la cadena consta de caracteres 
                alfabéticos, el resultado es NaN; si la cadena consta de números, se 
                transforma en un número.
Object       =  Este es toNumber (toPrimitive (valor)).

Finalmente, toPrimitive se presenta aquí:
Value type   |  Result
Object       =  Si valueOf devuelve un valor primitivo, devuelve el valor primitivo; 
                de lo contrario, si toString devuelve un valor primitivo, este devuelve 
                el valor primitivo y, en caso contrario, devuelve un error.

Verifiquemos los resultados de algunos ejemplos. Primero, sabemos que la salida del 
*/

// siguiente código es verdadera (longitud de la cadena> 1):
console.log( 'packt' ? true : false );

// Ahora, ¿qué pasa con el siguiente código? Vamos a ver:
console.log( 'packt' == true );

/*
La salida es falsa, así que entendamos por qué:
- Primero, convierte el valor booleano usando toNumber. entonces tenemos packt == 1.
- Luego, convierte el valor de la cadena usando toNumber. Como la cadena consta de 
  caracteres alfabéticos, devuelve NaN, por lo que tenemos NaN == 1, que es falso.

¿Qué pasa con el operador ===? Es mucho más fácil. Si comparamos dos valores de diferentes 
tipos, el resultado siempre es falso. Si tienen el mismo tipo, se comparan de acuerdo con 
la siguiente tabla.
Type( x )  |  Values                                       |  Result
Number        x tiene el mismo valor que y (pero no NaN)      true    
String        x e y son caracteres idénticos                  true
Boolean       x e y son ambos verdaderos o ambos falsos       true
Object        x e y hacen referencia al mismo objeto          true

Si x e y son de diferentes tipos, el resultado es falso.
Consideremos algún ejemplo:
*/
console.log( 'packt' === true );  // false
console.log( 'packt' === 'packt' );  // true
var person1 = { name: 'John' };
var person2 = { name: 'John' };
console.log( person1 === person2 );  // false, different objects 

/*
Resumen

- El operador == hace que el programa convierta las variables a un tipo de 
  dato comparable. 1 == '1' es true.

- El operador === compara el valor y el tipo de dato. Si son diferentes, de inmediato es false. 

- En lo posible, utilizar == lo menos posible
*/
