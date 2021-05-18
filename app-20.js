console.clear();
/*
Programación orientada a objetos con clases
ES6 también introdujo una forma más limpia de declarar clases. Aprendió que podemos declarar 
una clase llamada Libro en la sección de programación orientada a objetos de esta manera:
*/
function Book( title, pages, isbn ) {  // { 1 }
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

Book.prototype.printTitle = function() {
  console.log( this.title );
}

// Con ES6, podemos simplificar la sintaxis y usar el siguiente código:
class Book2 {  // { 2 }
  constructor( title, pages, isbn ) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log( this.isbn );
  }
}

/*
Simplemente podemos usar la palabra clave class y declarar una clase con una función 
constructora y otras funciones también, por ejemplo, la función printIsbn. El código para 
hte class Book declarado en la línea {1} tiene el mismo efecto y salida que el código 
declarado en la línea {2}:
*/
let book = new Book2( 'Shakishis', '123', 'isbn' );
console.log( book.title );  // outputs the book title
book.title = 'New Shaki';  // update the value of the book title
console.log( book.title );  // outputs the book title
