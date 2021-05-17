console.clear();
/*
Presentación de ECMAScript
Si sigue las noticias y las últimas tendencias sobre JS, es posible que haya escuchado la 
exageración sobre ECMAScript 6 y ECMAScript 7. ¿Qué tiene que ver ECMAScript con JS y hay 
alguna diferencia?

ECMAScript es una especificación de lenguaje de secuencias de comandos. JS es una implementación 
de esta especificación, al igual que Jscript y ActionScript.

ECMAScript 6 y ECMAScript 7
Como sabemos, JS es un lenguaje que se ejecuta principalmente en navegadores (también en servidores 
que usan NodeJS), y cada navegador puede implementar su propia versión de las funcionalidades 
disponibles de JS (como aprenderá más adelante en este libro). Esta implementación específica 
se basa en ECMAScript.
Por lo tanto, los navegadores ofrecen casi las mismas funciones (nuestro código JS se ejecutará 
en todos los navegadores); sin embargo, el comportamiento de cada funcionalidad puede ser un 
poco diferente de un navegador a otro.

Todo el código presentado en este capítulo hasta ahora se basa en ECMAScript 5, que se convirtió 
en estándar en diciembre de 2009. La versión más reciente de ECMAScript, en el momento en que se 
está escribiendo este libro, es ECMAScript 6, que se estandarizó en julio de 2015. casi 6 años 
después de su versión anterior. El comité responsable de redactar las especificaciones de 
ECMAScript tomó la decisión de pasar a un modelo anual para definir nuevos estándares, donde se
agregarían nuevas características a medida que fueran aprobadas. Por esta razón, la sexta edición 
de ECMAScript pasó a llamarse ECMAScript 2015 (ES6). Hay una nueva versión que también se está 
preparando para ser lanzada en el verano de 2016, que se llama ECMAScript 2016 o ECMAScript 7 (ES7).

En este tema, cubriremos algunas de las nuevas funcionalidades introducidas en ES6 y ES7.

La tabla de compatibilidad:
Es importante saber que, aunque ES6 ya se ha lanzado, es posible que sus funciones no sean 
compatibles con todos los navegadores. Para una mejor experiencia, es mejor utilizar la última 
versión disponible para el navegador que elija (Firefox o Chrome).

En los siguientes enlaces, puede verificar qué funciones están disponibles en cada navegador:
- ES6: http://kangax.github.io/compat-table/es6/
- ES7: http://kangax.github.io/compat-table/es7/

Incluso si las características aún no están disponibles, podemos comenzar a usar nuevas systax 
y nuevas funcionalidades hoy.

De forma predeterminada, Firefox agrega soporte a ES6 y ES7 a medida que su equipo envía la 
implementación de las funcionalidades.

En Google Chrome, puede habilitar las funcionalidades habilitando la bandera JS experimental 
abriendo la URL chrome: // flags, como se muestra en la siguiente imagen:

Incluso con la marca Habilitar JS experimental habilitada, es posible que algunas de las funciones 
de ES6 no sean compatibles con Chrome. Lo mismo se puede aplicar a Firefox. Para saber exactamente 
qué funciones ya son compatibles con cada navegador, consulte la tabla de compatibilidad.

Usando Babel.js
Babel (https://babeljs.io) es un transpilador JS, también conocido como compilador de fuente a 
fuente. Convierte código JS con características de lenguaje ES6 y ES7 en código equivalente que 
usa solo características de lenguaje de la especificación ES5 ampliamente soportada.

Hay muchas formas diferentes de usar Babel.js. Uno de ellos lo está instalando según su 
configuración (https://babeljs.id/docs/setup/). Otro es usarlo directamente en el navegador a 
través de su opción Pruébelo (https://babeljs.io/repl/), como se muestra en la siguiente captura 
de pantalla:

Junto con cada ejemplo de ES6 y ES7 que se presentará en los siguientes temas, también 
proporcionaremos un enlace para que pueda ejecutar y probar los ejemplos en Babel.
*/

/*
Resumen

- ECMAScript es una especificación de lenguaje de secuencias de comandos. JS es una implementación 
  de esta especificación, al igual que Jscript y ActionScript.

- Babel (https://babeljs.io) es un transpilador JS, también conocido como compilador de fuente a 
  fuente. Convierte código JS con características de lenguaje ES6 y ES7 en código equivalente que 
  usa solo características de lenguaje de la especificación ES5 ampliamente soportada.

- Hay muchas formas diferentes de usar Babel.js. Uno de ellos lo está instalando según su 
  configuración (https://babeljs.id/docs/setup/). Otro es usarlo directamente en el navegador a 
  través de su opción Pruébelo (https://babeljs.io/repl/), como se muestra en la siguiente captura 
  de pantalla:
*/
