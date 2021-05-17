console.clear();
/*
Funciones
Las funciones son muy importantes cuando se trabaja con JS. También usaremos muchas funciones 
en nuestros ejemplos.

El siguiente código demuestra la sintaxis básica de una función. No tiene argumentos ni la 
declaración de retorno:
*/
function sayHello() {
  console.log( 'Hello!' );
}

// Para llamar a este código, simplemente usamos la siguiente llamada:
sayHello();

/*
También podemos pasar argumentos a una función. Los argumentos son variables con las que se 
supone que una función hace algo. El siguiente código demuestra cómo usar argumentos con 
funciones:
*/
function output( text ) {
  console.log( text );
}

// Para usar esta función, podemos usar el siguiente código:
output( 'Hello!!' );

// Puede utilizar tantos argumentos como desee, de la siguiente manera:
output( 'Hello!!!', 'Other text' );
// En este caso, la función solo usa el primer argumento y el segundo se ignora.

// Una función también puede devolver un valor, como sigue:
function sum( num1, num2 ) {
  return num1 + num2;
}

/*
Esta función calcula la suma de dos números dados y devuelve su resultado. Podemos usarlo 
de la siguiente manera:
*/
var result = sum( 1, 2 );
output( result );


/*
Resumen

- Las funciones son MUY utilizadas en JS

- Si podimos x argumentos en una función, al momento de enviar más argumentos cuando la 
  función es llamada, sólo se toman en cuenta los argumento que la función necesita, los
  demás los ignora.

- Le pueden enviar argumentos a una función y guardarlos el una variable para después usar
  ese resultado en otra función.
*/
