console.clear();
/*
Propiedades de objeto mejoradas
ES6 introdujo un concepto llamado desestructuración de matrices, que es una forma de inicializar 
variables a la vez. Por ejemplo, considere lo siguiente:
*/
var [ x, y ] = [ 'a', 'b' ];

// Ejecutar el código anterior es lo mismo que hacer lo siguiente
var x = 'a';
var y = 'b';

/*
La desestructuración de matrices también se puede realizar para intercambiar valores a la vez 
sin la necesidad de crear variables temporales, como sigue
*/
[ x, y ] = [ y, x ];

// El código anterior es el mismo que el siguiente:
var temp = x;
x = y;
y = temp;

/*
Esto será muy útil cuando aprenda algoritmos de clasificación, ya que este intercambio de 
valores es muy común.

También hay otra funcionalidad, llamada propiedad abreviada, que es otra forma de realizar 
la desestructuración de objetos. Por ejemplo, coside el siguiente ejemplo:
*/
var [ x, y ] = [ 'a', 'b' ];
var obj= { x, y };

console.log( obj );  // { x: 'a', y: 'b' } 

// El código anterior es el mismo que hace lo siguiente:
var x = 'a';
var y = 'b';
var obj2 = { x: x, y: y };

console.log( obj2 );  // { x: 'a', y: 'b' } 

/*
La última funcionalidad que discutiremos en este tema se llama propiedad del método. Esto 
permite a los desarrolladores declarar funciones en objetos como si fueran propiedades. 
Lo siguiente es un ejemplo:
*/
var hello = {
  name: 'abcdef',
  printHello() {
    console.log( 'Hello' );
  }
}

console.log( hello.printHello() );

// El código anterior también se puede escribir de la siguiente manera:
var hello2 = {
  name: 'abcdef',
  printHello: function printHello() {
    console.log( 'Hello' );
  }
};

console.log( hello2.printHello() );

/*
Resumen

- La desestructuración de matrices también se puede realizar para intercambiar valores a la vez 
  sin la necesidad de crear variables temporales
*/ 
