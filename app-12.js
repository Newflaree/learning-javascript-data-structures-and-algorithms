console.clear();
/*
Funciones de ECMAScript 6
En este tema, demostraremos cómo usar algunas de las nuevas funcionalidades de ES6, que pueden ser 
útiles en la codificación JS diaria y que también serán útiles para simplificar los ejemplos 
presentados en los siguientes capítulos de este libro. Entre las funcionalidades, cubriremos las 
siguientes:
- let y const
- Template literales
- Desestructuración
- Operador de propagación ( Spread )
- Función de flecha usando =>
- Clases

Declarar variables con let en lugar de var
Hasta ES5, podíamos declarar variables en cualquier lugar de nuestro código, incluso si 
sobrescribíamos la declaración de variable, como en el siguiente código:
*/
var framework = 'Angular';
var framework = 'React';
console.log( framework );

/*
La salida del código anterior es React ya que a la última variable declarada, denominada framework, 
se le asignó este valor. En el código anterior, teníamos dos variables con el mismo nombre; esto 
es muy peligroso y podría llevar el código a una salida incorrecta.

Otros lenguajes, como C, Java y C #, no permiten este comportamiento. Con ES6, se introdujo una 
nueva palabra clave, llamada let. Let es la nueva palabra clave var, lo que significa que 
simplemente podemos sustituir la palabra clave var por let. En el siguiente código, tenemos un 
ejemplo:
*/
let language = 'JavaScript'; // { 1 }
//let language = 'Ruby'; // { 2 } - throws error
console.log( language );

/*
La línea {2} arrojará un error porque una variable llamada language ya está declarada en el 
mismo ámbito (línea {1}). Discutiremos el alcance de las variables let y en el siguiente tema.

- El código anterior se puede probar y ejecutar en la URL https://goo.gl/he0udZ
*/

/*
Resumen

- Hasta ES5, podíamos declarar variables en cualquier lugar de nuestro código, incluso si 
  sobrescribíamos la declaración de variable

- Let es la nueva palabra clave var, lo que significa que simplemente podemos sustituir 
  la palabra clave var por let.

- Utilizando let, no es posible definir nuevamente una misma variable. 
*/ 
