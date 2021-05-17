console.clear();
/*
Bucles
Los bucles se utilizan con mucha frecuencia cuando trabajamos con matrices (que son el tema 
del próximo capítulo). Específicamente, usaremos el bucle for en nuestros algoritmos.

El bucle for es exactamente el mismo que en C y Java. Consiste en un contador de bucle al que 
generalmente se le asigna un valor numérico, luego la variable se compara con otro valor 
(el script dentro del bucle for se ejecuta mientras esta condición es verdadera), y finalmente 
el valor numérico aumenta o disminuye.

En el siguiente ejemplo, tenemos un bucle for. Muestra el valor de i en la consola, mientras 
que i es menor que 10; i se inicia con, por lo que el siguiente código generará los valores 
de 0 a 9:
*/
for ( var i = 0; i < 10; i++ ) {
  console.log( 'for:', i );
}

/*
La siguiente construcción de bucle que veremos es el bucle while. El script dentro del ciclo 
while se ejecuta mientras la condición es verdadera. En el siguiente código, tenemos una variable, 
i, iniciada con el valor, y queremos que se genere el valor de i mientras que i es menor que 10 
(o menor o igual que 9).
La salida serán los valores de 0 a 9:
*/
var i = 0;

while ( i < 10 ) {
  console.log( 'while:', i );
  i++;
}

/*
El bucle do ... while es muy similar al bucle while. La única diferencia es que en el ciclo while, 
la condición se evalúa antes de ejecutar el script, y en el ciclo do ... while, la condición se 
evalúa después de ejecutar el script. El bucle do ... while asegura que el script se ejecute al 
menos una vez. El siguiente código también genera los valores de 0 a 9:
*/
i = 0;

do {
  console.log( 'do-while:', i );
  i++
} while ( i < 10 );


/*
Resumen

- Los bucles se utilizan con mucha frecuencia cuando trabajamos con Arrays.

- Al utilizar while o do...while, SIEMPRE hay que modificar el valor de i al final de la
  instrucción. De lo contrario, esto generará un loop infinito ya que nunca cambiará, por lo
  que nunca se cumplirá la condición.

- El bucle do...while siempre se ejecuta al menos una vez, luego evalua la condición y, finalmente,
  Continua o no iterando el código.
*/

