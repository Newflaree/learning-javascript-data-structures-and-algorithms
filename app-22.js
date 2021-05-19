console.clear();
/*
Trabajando con getters y setters
Con la nueva sintaxis de clase, también es posible crear funciones getter y setter para el 
atributo de clase. Aunque los atributos de clase no son privados como en otros lenguajes 
orientados a objetos (el concepto de encapsulación), es bueno seguir un patrón de nomenclatura.

El siguiente es un ejemplo de una clase que declara una función get y set junto con su uso:
*/
class Person {
  constructor( name ) {
    this._name = name;  // { 1 }
  }

  get name() {  // { 2 }
    return this._name;
  }

  set name( value ) {  // { 3 }
    this._name = value;
  }
}

let lotrChar = new Person( 'Frodo' );
console.log( lotrChar.name );  // { 4 }
lotrChar.name = 'Gandalf';  // { 5 }
console.log( lotrChar.name );  
lotrChar._name = 'Sam';  // { 6 }
console.log( lotrChar.name );  

/*
Para declarar una función get y set, simplemente necesitamos usar la palabra clave get o set 
delante de la función name (líneas {2} y {3}), que es el nombre que queremos exponer y usar. 
Podemos declarar los atributos de clase con el mismo nombre, o podemos usar un guión bajo 
delante del nombre del atributo (línea {1}) para que parezca que el atributo es privado.

Luego, para echar un vistazo a las funciones get o set, podemos simplemente referirnos a sus 
nombres como si fuera un atributo simple (líneas {4} y {5}).

También es bueno recordar que el atributo _name no es realmente privado y aún podemos hacer 
referencia a él. Sin embargo, hablaremos de esto más adelante en este libro. Este ejemplo 
se puede ejecutar en https://goo.gl/SMRYsv.
*/
