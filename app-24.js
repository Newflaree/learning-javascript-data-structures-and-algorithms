console.clear();
/*
Matrices
Una matriz es la estructura de datos de memoria más simple. Por esta razón, todos los lenguajes 
de programación tienen un tipo de datos de matriz incorporado. JS también admite matrices, nos 
sumergiremos en la estructura de datos de la matriz y sus capacidades.

Una matriz almacena valores secuencialmente que son todos del mismo tipo de datos. Aunque JS nos 
permite crear matrices con valores de diferentes tipos de datos, seguiremos las mejores prácticas 
y asumiremos que no podemos hacer esto (la mayoría de los lenguajes no tienen esta capacidad).

¿Por qué deberíamos usar matrices?
Consideremos que necesitamos almacenar la temperatura promedio de cada mes del año de la ciudad 
en la que vivimos. Podríamos usar algo similar a lo siguiente para almacenar esta información:
*/
var averageTempJan = 31.9;
var averageTempFeb = 35.3;
var averageTempMar = 42.4;
var averageTempApr = 52;
var averageTempMay = 60.8;

/*
Sin embargo, este no es el mejor enfoque. Si almacenamos la temperatura durante solo un año, 
podríamos gestionar 12 variables. Sin embargo, ¿qué pasa si necesitamos almacenar la temperatura 
promedio durante más de un año? Afortunadamente, esta es la razón por la que se crearon las 
matrices, y podemos representar fácilmente la misma información mencionada anteriormente de la 
siguiente manera:
*/
var averageTemp = [];
averageTemp[ 0 ] = 31.9;
averageTemp[ 1 ] = 35.3;
averageTemp[ 2 ] = 42.4;
averageTemp[ 3 ] = 52;
averageTemp[ 4 ] = 60.8;





