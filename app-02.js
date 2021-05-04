console.clear();
/*
Variable Scope

Alcance (Scope) se refiere a dónde en el algoritmo podemos acceder a la variable 
(también puede ser una función cuando trabajamos con alcances de funciones). 
Hay variables locales y globales.
Veamos un ejemplo: 
*/

var myVariable = 'global';
myOtherVariable = 'globar';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log( myVariable );  // { 1 }
console.log( myFunction() );  // { 2 }

console.log( myOtherVariable );  // { 3 }
console.log( myOtherFunction() );  // { 4 }

console.log( myOtherVariable );  // { 5 }

/*
La línea {1} dará como resultado global porque nos referimos a una variable global.

La línea {2} generará una salida local porque declaramos la variable myVariable dentro 
de la función myFunction como una variable local, por lo que el alcance solo estará dentro 
de myFunction.

La línea {3} generará una salida global porque estamos haciendo referencia a la variable 
global llamada myOtherVariable que se inicializó en la segunda línea del ejemplo.

La línea {4} generará una salida local. Dentro de la función myOtherFunction, hacemos referencia 
a la variable global myOtherVariable y le asignamos el valor local porque no declaramos 
la variable usando la palabra clave var.

Por esta razón, la línea {5} dará como resultado local (porque cambiamos el valor de la 
variable dentro de myOtherFunction).
Es posible que escuche que las variables globales en JS son malas y esto es cierto. 
Por lo general, la calidad del código fuente de JS se mide por la cantidad de
variables y funciones globales (una gran cantidad es mala). Entonces, siempre 
que sea posible, intente evitar las variables globales.
*/

/*
Resumen

- Si definimos una variable nuevamente en una función y retornamos su valor, esta tendrá
  un valor local que sólo se existe dentro de la función.

- Si no definimos una variable existente en una función y retornamos su valor, esta 
  actualizará el valor de la variable local fuera de la función.

- Es buena práctica intentar evitar las variables globales, simpre que sea posible.
*/
