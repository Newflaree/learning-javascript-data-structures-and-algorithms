console.clear();
/*
Truth and falsehood 
En JS, verdadero y falso son un poco complicados. En la mayoría de los lenguages, 
los valores booleanos verdadero y falso representan los resultados verdadero / falso. 
En JS, una cadena como "Packt" tiene el valor verdadero, por ejemplo.
La siguiente tabla puede ayudarnos a comprender mejor cómo funcionan el verdadero y 
el falso en JS:

Value      |  Result

Undefined  =  False
null       =  False
Boolean    =  True is true and false is false
Number     =  The result is false for +0, -0, or NaN; otherwise the result is true
String     =  The result is false if the string is empty (the length is 0); otherwise 
              the result is true (length > 1)
Object     =  True

Consideremos algunos ejemplos y verifiquemos su salida:
*/

function testTruthy( val ) {
  return val 
    ? console.log( `truthy` ) 
    : console.log( `falsy` );
}

testTruthy( true );  // true 
testTruthy( false );  // false
testTruthy( new Boolean( false ) );  // true ( object is always true )

testTruthy( '' );  // false
testTruthy( 'Packt' );  // true
testTruthy( new String( '' ) );  // true ( object is always true )

testTruthy( 1 );  // true
testTruthy( -1 );  // true
testTruthy( NaN );  // false
testTruthy( new Number( NaN ) );  // true ( object is always true )

testTruthy( {} );  // true ( object is always true )

var obj = { name: 'John' };
testTruthy( obj );  // true
testTruthy( obj.name );  // true
testTruthy( obj.age );  // false ( age does not exist ) 

/*
Resumen

- Undefined y null es igual false

- Los Boolean tienen su respectivo valor

- Los números tienen valor true cuando n > 1. Cuando n = 0 o n = NaN, n es false.

- Los String tienen valor true cuando s.length > 1. Cuando s.length = 0, s es false.

- Los Objetos siempre tienen un valor de true
*/

