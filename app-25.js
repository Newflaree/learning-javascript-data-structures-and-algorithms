console.clear();
/*
Crear e inicializar matrices
Declarar, crear e inicializar una matriz en JS es simple, como se muestra a continuación:
*/
var daysOfWeek = new Array();  // { 1 }
var daysOfWeek = new Array( 7 );  // { 2 }
var daysOfWeek = new Array( 
  'Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednes day', 
  'Thursday', 
  'Friday', 
  'Saturday' 
);  // { 3 }

/*
Simplemente podemos declarar e instanciar una nueva matriz usando la palabra clave 
new (línea {1}). Además, usando la palabra clave new, podemos crear una nueva matriz 
especificando la longitud de la matriz (línea {2}). Una tercera opción sería pasar los 
elementos de la matriz directamente a su constructor (línea {3}).

Sin embargo, utilizar la nueva palabra clave no es una práctica recomendada. Si desea crear 
una matriz en JS, podemos asignar corchetes vacíos ([]), como en el siguiente ejemplo:
*/
var daysOfWeek = [];

// También podemos inicializar la matriz con algunos elementos, de la siguiente manera:
var daysOfWeek = [
  'Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednes day', 
  'Thursday', 
  'Friday', 
  'Saturday' 
];

/*
Si queremos saber que hay muchos elementos en la matriz (su tamaño), podemos usar la propiedad 
length. El siguiente código dará una salida de 7:
*/
