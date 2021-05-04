console.clear();
/*
Operators
Necesitamos operadores al realizar cualquier operación en un lenguaje de programación. 
JS también tiene operadores aritméticos, de asignación, comparación, lógicos, bit a bit 
y unarios, entre otros. Echemos un vistazo a estos:
*/
var num = 0;  // { 1 }
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;

num += 1;  // { 2 }
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log( 'num == 1 :', ( num == 1 ) );  // { 3 }
console.log( 'num === 1 :', ( num === 1 ) );
console.log( 'num != 1 :', ( num != 1 ) );
console.log( 'num > 1 :', ( num > 1 ) );
console.log( 'num < 1 :', ( num < 1 ) );
console.log( 'num >= 1 :', ( num >= 1 ) );
console.log( 'num <= 1 :', ( num <= 1 ) );

console.log( 'true && false :', ( true && false ) );  // { 4 }
console.log( 'true || false :', ( true || false ) );
console.log( '!true :', ( !true ) );

/*
En la línea {1}, tenemos los operadores aritméticos. 
En la siguiente tabla, tenemos los operadores y sus descripciones:
-----------------------------------------------------
Arithmetic Operators
+    =   Addition
-    =   Subtraction
*    =   Multiplication
/    =   Division
%    =   Modulus ( remainder of a division operation )
++   =   Increment
--   =   Decrement
-----------------------------------------------------

En la línea {2}, tenemos los operadores de asignación. 
En la siguiente tabla, tenemos los operadores y sus descripciones:
-----------------------------------------------------
Assignment Operators
=    =   Assignment
+=   =   Addition Assignment ( x += y ) = ( x = x + y ) 
-=   =   Subtraction Assignment ( x -= y ) = ( x = x - y ) 
*=   =   Multiplication Assignment ( x *= y ) = ( x = x * y ) 
/=   =   Division Assignment ( x /= y ) = ( x = x / y ) 
%=   =   Remainder Assignment ( x %= y ) = ( x = x % y ) 
-----------------------------------------------------

En la línea {3}, tenemos los operadores de comparación. 
En la siguiente tabla, tenemos los operadores y sus descripciones:
-----------------------------------------------------
Comparison Operators
==   =   Equal to
===  =   Equal to ( value and object type both )
!=   =   No equal to
>    =   Greater than
>=   =   Greater than or equal to
<    =   Less than
<=   =   Less than or equal to
-----------------------------------------------------

Finalmente, en la línea {4}, tenemos los operadores lógicos. 
En la siguiente tabla, tenemos los operadores y sus descripciones:
-----------------------------------------------------
Logical Operators
&&   =   And
||   =   Or
!    =   Not
-----------------------------------------------------
*/

/*
JS también admite operadores bit a bit, que se muestran a continuación:
*/
console.log( '5 & 1 :', ( 5 & 1 ) )
console.log( '5 | 1 :', ( 5 | 1 ) )
console.log( '~5 :', ( ~5 ) )
console.log( '5 ^ 1 :', ( 5 ^ 1 ) )
console.log( '5 << 1 :', ( 5 << 1 ) )
console.log( '5 >> 1 :', ( 5 >> 1 ) )

/*
La siguiente tabla contiene una descripción más detallada de los operadores bit a bit:
-----------------------------------------------------
Bitwise Operators
&   =   And
|   =   Or
~   =   Not
^   =   Xor
<<  =   Left shift
>>  =   Right shift
-----------------------------------------------------
*/

/*
El operador typeof devuelve el tipo de variable o expresión. 
Por ejemplo, eche un vistazo al siguiente código:
*/
console.log( 'typeof num :', typeof num );
console.log( 'typeof Packt :', typeof 'Packt' );
console.log( 'typeof true :', typeof true );
console.log( 'typeof [ 1, 2, 3 ] :', typeof [ 1, 2, 3 ] );
console.log( 'typeof { name: John } :', typeof { name: 'John' } );

/*
JS también admite los operadores de eliminación, que eliminan una propiedad de un objeto. 
Eche un vistazo al siguiente código:
*/
var myObj = {
  name: 'John',
  age: 21
};

delete myObj.age;
console.log( myObj );  // Outputs Object { name: 'John' } 
