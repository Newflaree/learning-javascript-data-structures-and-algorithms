console.clear();
/*
Variables

Las variables almacenan datos que se pueden configurar, actualizar y 
recuperar cuando sea necesario. Los valores asignados a una variable pertenecen a un tipo. 
En JS, los tipos disponibles son números, cadenas, valores booleanos, 
funciones y objetos. También tenemos undefined y null, junto con Arrays, 
fechas y expresiones regulares.

Aunque JS tiene diferentes tipos de variables disponibles, no es un lenguaje fuertemente 
tipado como C / C ++, C #, Java. En lenguajes fuertemente tipados, necesitamos declarar 
el tipo de la variable junto con su declaración (en Java, por ejemplo, para declarar una 
variable entera, usamos 'int num = 1;'). En JS, solo necesitamos usar la palabra clave var, 
y no necesitamos declarar el tipo de variable. Por esta razón, JS no es un lenguaje 
fuertemente tipado.
*/

var num = 1;  //{ 1 }
num = 3;  //{ 2 }
var price = 1.5  // { 3 }
var name = 'Packt';  // { 4 }
var trueValue = true;  // { 5 }
var nullVar = null  // { 6 }
var und;  // { 7 }

/*
En la línea {1}, tenemos un ejemplo de cómo declarar una variable en JS (estamos declarando 
un número). Aunque no es necesario utilizar la declaración de la palabra clave var, es una 
buena práctica especificar siempre cuándo declaramos una nueva variable.

En la línea {2}, actualizamos una variable existente. JS no es un lenguaje fuertemente tipado. 
Esto significa que puede declarar una variable, inicializarla con un número y luego actualizarla 
con una cadena o cualquier otro tipo de datos. Asignar un valor a una variable que sea diferente 
de su tipo original tampoco es una buena práctica.

En la línea {3}, también declaramos un número, pero esta vez es un punto flotante decimal. 
En la línea {4}, declaramos una cadena; en la línea {5}, declaramos un booleano. 
En la línea {6}, declaramos un valor nulo, y en la línea {7}, declaramos una variable indefinida. 
Un valor nulo significa que no hay valor, y no definido significa que se ha declarado una 
variable pero aún no se le ha asignado un valor. Eche un vistazo a lo siguiente:
*/

console.log( 'num:', num );
console.log( 'name:', name );
console.log( 'trueValue:', trueValue );
console.log( 'price:', price );
console.log( 'nullVar:', nullVar );
console.log( 'und:', und );

/*
Tenemos tres formas de generar valores en JS que podemos usar con los ejemplos de este libro. 
El primero es alert ('Mi texto aquí'), que genera una ventana de alerta en el navegador, 
y la segunda es console.log ('Mi texto aquí'), que genera texto en la pestaña Consola de la 
herramienta de depuración (Google Developer Tools o Firebug, según el navegador que esté 
utilizando). La tercera forma es generar el valor directamente en la página HTML que el 
navegador representa usando document.write ('Mi texto aquí'). Puede utilizar la opción con 
la que se sienta más cómodo.
*/

/*
Resumen

- JS NO es un lenguaje de tipado fuerte 
- En buena práctica especificar siempre cuando inicializamos una variable.
- Siempre asignar un único tipo de dato a una variable una vez inicializada.
*/
