console.clear();
/*
Herencia
Como tenemos una nueva forma de declarar clases, también hay una sintaxis simplificada para 
usar la herencia entre clases. Echemos un vistazo a un ejemplo:
*/
class Book {
  constructor( title, pages, isbn ) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log( this.isbn );
  }
}

class ITBook extends Book {  // { 1 } 
  constructor( title, pages, isbn, technology ) {
    super( title, pages, isbn );  // { 2 }
    this.technology = technology;
  }

  printTechnology() {
    console.log( this.technology );
  }
}

let jsBook = new ITBook( 'Learning JS Algorithms', '200', '12234567890', 'JavaScript' );
console.log( jsBook.title );
console.log( jsBook.printTechnology() );

/*
Podemos extender otra clase y heredar su comportamiento usando las palabras clave extends
(línea {1}). Dentro del constructor, también podemos referirnos a la superclase del constructor 
usando la palabra clave super (línea {2}).

Aunque la sintaxis de esta nueva forma de declarar clases en JS es muy similar a la de otros 
lenguajes de programación como Java y C / C ++, es bueno recordar que los programmins creados 
con objetos JS se realizan a través de un prototipo.
*/


