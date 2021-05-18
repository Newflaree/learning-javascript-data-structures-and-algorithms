console.clear();
/*
Template literals
Los literales de plantilla son realmente agradables porque podemos crear cadenas sin la necesidad 
de concatenar los valores.

Por ejemplo, considere el siguiente ejemplo escrito con ES5:
*/
var book = {
  name: 'Larning JavaScript DataStructures and Algorithms'
};

console.log( 'Yor are reading ' + book.name + '.,\n and this is a new line\n and so is this.' );

// Podemos mejorar la sintaxis de la salida anterior de console.log con el siguiente código:
console.log( `You are reading ${ book.name }.,
and this is a new lane
and so is this.` );


/*
Los literales de plantilla están endosados por comillas invertidas (`). Para interpolar el valor 
de una variable, simplemente estableceremos el valor de la variable dentro de un signo de dólar 
con llaves ($ {}), como hicimos con book.name.

Los literales de plantilla también se pueden utilizar para cadenas de varias líneas. Ya no es 
necesario utilizar \ n. Simplemente presione Enter en el teclado para llevar la cadena a una 
nueva línea, como se hizo con y esta es una nueva línea en el ejemplo anterior.

¡Esta funcionalidad será muy útil en nuestros ejemplos para simplificar la salida!

Los ejemplos anteriores se pueden ejecutar en https://goo.gl/PTqnw0.
*/

/*
Resumen

- Para interpolar el valor de una variable, simplemente estableceremos el valor de la variable 
  dentro de un signo de dólar con llaves ($ {})
*/ 

