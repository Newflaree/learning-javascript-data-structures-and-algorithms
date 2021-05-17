console.clear();
/*
Object-oriented programming in JS
Los objetos JS son colecciones muy simples de pares nombre-valor. Hay dos formas de crear 
un objeto simple en JS. La primera forma es la siguiente:
*/
var obj_1 = new Object();

// Y la segunda forma es la siguiente:
var obj_2 = {};

// También podemos crear un objeto por completo, de la siguiente manera:
var obj_3 = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
}

/*
Como podemos ver, para declarar un objeto JS, se utilizan pares [clave, valor], donde la clave 
puede considerarse un atributo del objeto y el valor es el valor del atributo. Todas las clases 
que crearemos en este libro son objetos JS, como Stack, Set, LinkeList, Dictionary, Tree, Graph, 
etc.

En la programación orientada a objetos (OOP), un objeto es una instancia de una clase. Una clase 
define las características del objeto. Para nuestros algoritmos y estructuras de datos, crearemos 
algunas clases que los representarán. así es como podemos declarar una clase que representa un 
libro:
*/
function Book( title, pages, isbn ) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

// Para instanciar esta clase, podemos usar el siguiente código:
var book = new Book( 'Book Name', '2234', 'isbn!!' );

// Luego, podemos acceder a sus atributos y actualizarlos de la siguiente manera:
console.log( book.title );  // outputs the book title

book.title = 'New Title'; // updates the value of the book title
console.log( book.title );  // outputs the updates value

/* 
Una clase también puede contener funciones. Podemos declarar y usar una función como lo demuestra 
el siguiente código:
*/
Book.prototype.printTitle = function() {
  console.log( this.title );
}

// También podemos declarar funciones directamente dentro de la definición de clase:
function Book( title, pages, isbn ) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.pritIsbn = function() {
    console.log( this.isbn );
  }
}

book.pritIsbn();
/*
En el ejemplo de prototipo, la función printTitle se compartirá entre todas las instancias 
y solo se creará una copia. Cuando usamos una definición basada en clases, como en el ejemplo 
anterior, cada instancia tendrá su propia copia de la función. El uso del método de prototipo 
ahorra memoria y costos de procesamiento con respecto a la asignación de funciones a la 
instancia. Sin embargo, solo puede declarar funciones y propiedades públicas mediante el método 
de prototipo. Con una definición basada en clases, puede declarar funciones y propiedades 
privadas y el otro método dentro de la clase también puede acceder a ellas. ECMAScript 6 
introduce una sintaxis simplificada muy similar al ejemplo basado en clases y está basado en 
prototipos. Discutiremos más sobre esto más adelante en el capítulo.
*/

/*
Resumen

- Para declarar un objeto JS, se utilizan pares [clave, valor], donde la clave puede 
  considerarse un atributo del objeto y el valor es el valor del atributo.

- En la programación orientada a objetos (OOP), un objeto es una instancia de una clase. 
  Una clase define las características del objeto.

- Con una definición basada en clases, puede declarar funciones y propiedades privadas 
  y el otro método dentro de la clase también puede acceder a ellas.
*/
