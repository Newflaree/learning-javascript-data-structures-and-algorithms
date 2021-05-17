console.clear();
/*
Alcance de las variables con let
Para comprender cómo funcionan las variables declaradas con la palabra clave let, usemos el 
siguiente ejemplo (puede ejecutar el ejemplo usando la URL https://goo.gl/NbsVvg):
*/
let movie = 'Lord of the Rings';  // { 1 }
// Var movie = 'Batman v Superman';  // throws error, variable movie already declared

function starWarsFan() {
  let movie = 'Star Wars';  // { 2 }
  return movie;
}

function marvelFan() {
  movie = 'The Avengers';  // { 3 }
  return movie;
}

function blizzardFan() {
  let isFan = true;
  let phrase = 'Warcraft';  // { 4 }

  console.log( 'Before if:', phrase );

  if ( isFan ) {
    let phrase = 'initial text';  // { 5 }
    phrase = 'For the Horde!';  // { 6 }
    console.log( 'Inside if:', phrase );
  }

  phrase = 'For the Alliance!';  // { 7 }
  console.log( 'After if:', phrase );
}

console.log( movie );  // { 8 }
console.log( starWarsFan() );  // { 9 }
console.log( marvelFan() );  // { 10 }
console.log( movie );  // { 11 }
blizzardFan();  // { 12 }

/*
Ahora, discutiremos la razón por la que obtuvimos este resultado.

En la línea {1}, declaramos una variable movie con el valor "Lord of the Rings", y mostramos 
su valor en la línea {8}. Esta variable tiene alcance global, como aprendió en la sección Alcance 
variable de este capítulo.

En la línea {9}, ejecutamos la función starWarsFan. Dentro de esta función, también declaramos 
una variable llamada movie en la línea {2}. La salida de esta función es Star Wars porque la 
variable de la línea {2} tiene alcance local, lo que significa que solo es válida dentro de esta 
función.

En la línea {10}, ejecutamos la función marvalFan. Dentro de esta función, cambiamos el valor de 
la variable de película (línea {3}). Esta variable hacía referencia a la variable global declarada 
en la línea {1}. Es por eso que obtuvimos la salida de los Vengadores en la línea {10} y también 
en la línea {11}, donde generamos la variable global.

Finalmente, ejecutamos la función blizzardFan en la línea {12}. Dentro de esta función, declaramos 
una variable llamada frase (línea {4}) con el alcance de la función. Luego, en la línea {5}, 
nuevamente, declararemos una variable llamada frase, pero esta vez, esta variable solo tendrá un 
alcance dentro de la instrucción if.

En la línea {6}, cambiamos el valor de fase. Como todavía estamos dentro de la instrucción if, 
solo la variable declarada en la línea {5} tendría su valor cambiado.

Luego, en la línea {7}, cambiamos nuevamente el valor de la frase, pero como no estamos dentro 
del bloque de la instrucción if, se cambia el valor de la variable declarada en la línea {4}.

Nuevamente, este comportamiento de alcance es el mismo que en otros lenguajes de programación, 
como Java o C. Sin embargo, esto solo se introdujo en JS a través de ES6.
*/

/*
Resumen

*/ 
