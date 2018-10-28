# Aprendizaje no supervisado

Cuando uno no tiene instancias etiquetadas, no puede hacer aprendizaje supervisado. Si queremos hacer algo con esos datos pasamos al modelo no supervisado. La gran estrella aqui es Clustering. Particionamos los datos en grupos cuando no hay categorias/clases disponibles.

Solo requiere instancias, pero no etiquetas. Sirve para entender y resumir los datos. Es un paso intermedio para después hacer algo mas.

Por ejemplo agarro la pelota verde y veo que son usuarios con mucho gasto pero pocos ingresos. Quiero entender a mis clientes, entonces puedo llamarlos y tratar de entender que es lo que esta pasando. Agarro algunos e investigo. Llamo por telefono y les pregunto cosas. Tal vez ahi encontramos un perfil interesante, por ejemplo son estudiantes, entonces ahora los pude catalogar a todos los de verde como estudiantes.

Tenemos datos, hacer mineria en los datos y encontrar informacion interesante.

El objetivo de clustering es encontrar grupos de instanicas tales que las instancias en un cluster sean similares entre si, y diferentes de las instancias en otros clusters.

AL minimizar la distancia intra-cluster aumento la cohesion, y maximizar la distancia inter-cluster es la separacion.
Ejemplos: agrupar genes y proteinas con similar funcionalidad, reducir el tamaño de conjuntos de datos grandes y organizarlos para su mejor visualizacion (ej: lluvias), agrupar documentos para explorarlos mas rapido (ej: google images).

Cuando tengo un clustering no es el fin. Tener los grupos no es el fin al que quiero llegar. Es un paso intermedio de un proceso de entender los datos, procesarlos, tomar decisiones mas informadas luego, etc. **Cluster** es un concepto ambiguo!

La mejor definicion de cluster depende de la naturaleza de los datos y los resultados deseados. Lo que tenemos son datos sucios, queremos encontrar ciertas agrupaciones de datos que despues van a tener ciertos sentido o me van a ayudar a entender mejor la realidad.

## K-Means:

Empezamos con datos que estan ahi, todos iguales. Lo primero que vamos a hacer es fijar un K. Es la cantidad de clusters a la cual vamos a apuntar. Poder ir probando variando el K y fijandote los resultados que da. Lo primero que hacemos es fijar dos centroides. Son el centro del cluster. Los tiro al azar al comienzo. Ahora reparto a los puntos en dos cluster. Eso es segun la cercania al centroide. Recalculamos los centroides en funcion de los nuevos cluster que tengo. Tengo 2 cluster y ahora los voy a llevar al punto medio, al centro de masa de los cluster que quedaron definidos. Muevo el centroide del cluster rojo al punto medio de todos sus puntos.
Goto 2 hasta que los centroides varien poco

Si tengo una masa de puntos rodeados por un anillo de puntos, K-means falla. Uno de los problemas que tiene es que busca cosas globulares, cosas que tengan forma de pelota.

## Distorsion del clustering:

Lo que vamos a querer es que J sea lo mas chico posible. Lo que tenemos aca es la suma para todas las instancias y todos los cluster vamos a sumar la distancia de la instancia n-esima al centroide k-esimo multiplicado por r_nk que es 1 cuando la instancia pertenece al cluster k y 0 sino. (la suma de distancias al cuadrado de cada instancia a su centroide)

Minimizamos J en dos pasos, en el paso 1) vamos a reasignar las pertenencias de las instancias a diferentes clusters. Eso es, en el paso 1 estamos minimizando la sumatoria cambiando los 0 y 1 de pertenencias (el r_nk). En el paso 2) lo minimizamos moviendo los centroides a lugares mas adecuados. Movemos los centroide para que la distancia de las instancias al centroide sea menor, es decir, minimiza J con respecto a los mu_k.

Es un ejemplo de EM.

- **Ventajas:** Simple, eficiente y general.
- **Desventajas:** Hay que especificar K. Sensible a ruido y outliers. Muy sensible a la eleccion de los centroides iniciales, no siempre puede solucionarse con multiples inicializaciones. Solo puede encontrar clusters globulares.

Para elegir el mejor K podemos usar métricas que te digan la separación entre clusters y la cohesión entre cada cluster.

## Mixtura de gaussianas:

Algo un poco mas general que K-Means. Tenemos un cluster gigantesco que tiene su media y su varianza y al lado un cluster chiquitito con una media y una varianza mas chica. Lo que hacemos con kmeans lo unico que tenemos de cada cluster es la media. Ahora con esto vamos a tener la media y la matriz de covarianzas. Vamos a suponer que cada uno de los cluster respeta una distribucion normal. El modelo que vamos a querer construir es para cada una de las instancias ahora yo no quiero la pertenencia univoca a un cluster sino que quiero una probabilidad de pertenencia.

Inicializo dos distribuciones al azar. En la foto arranco con dos anillos. No vamos a asignar cada instancia a un unico cluster sino que vamos a asignarle una probabilidad de pertenencia a cada uno de los cluster. El siguiente paso es redefinir las gauseanas. Como se redefinen? Computando sobre todos los datos la media y la matriz de covarianza.
El pi le da mas libertad al modelo, lo que hace es a cada una de las gauseanas le asigna una importancia. Puede haber una gauseana que sea mas preponderante que las demas. Una que sea mas absorbente.

## Clustering Jerarquico Aglomerativo:

Vamos a ir construyendo un dendograma. Arrancamos con un cluster por instancia. Lo que hacemos en cada paso es fusionar los dos clusters mas cercanos. Que es cercano? Hay muchas formas de definirlo. Hago esto hasta que quede un unico cluster.

Como definir la distancia entre clusters?
La distancia minima entre instancias de cada clusters puede ser una manera. La distancia maxima tambien. Tomar el promedio de todas las distancias posibles del uno al otro. Tambien se puede tomar la distancia entre el punto de masa de cada cluster.

Esta elección cambia mucho la forma del dendograma. Tiene sus pro y sus contras respecto de la sensibilidad a ruido y outliers, y a la forma de los clusters que pueden manejar.

Es bottom-up este metodo. Existe una version top-down que se llama clustering jerárquico divisivo.

- **Ventajas:**
  No hay que especificar K

**Dendograma:** util para crear taxonomias (como la de especies animales)

- **Desventajas:**
  No busca optimizar una funcion objetivo global. Toma solo decisiones locales
  Cato computacionalmente
  Sensible a ruido y outliers

Por ejemplo el dendograma de los genes, nos muestra que hay dos familias claramente identificadas.

## DBSCAN

**Density-based spatial clustering of applications with noise**
La idea es en vez de buscar globos, romper esa idea y tratar de recorrer los bordes de los posibles clusters. Definimos una vecindad de un punto A, esfera centrada en A y de radio Eps. Y la densidad de un punto A se define como la cantidad de puntos dentro de su vecindad.

Vamos a definir 3 tipos de puntos:

- **Core points:** puntos con densidad mayor que la constante MinPts.
- **Border points:** puntos que no son core, pero son vecinos de algun punto core
- **Noise points:** puntos que no son core ni border

### Algoritmo:

Etiquetar cada punto como core, border o noise
Eliminar todos los puntos noise
Poner una arista entre cada par de puntos core que son vecinos entre si
Cada componente conexa corresponde a un cluster
Asignar los puntos border a uno de los clusters vecinos (puede ser necesario desempatar entre 2+ clusters)
Complejidad (N = #instancias)
tiempo : O(N \* tiempo de búsqueda en la vecindad), O(N^2) en el peor caso, O(N log N) si se puede usar k-d trees.
Espacio: O(N)

- **Ventajas:**
  No hay que especificar K. Puede encontrar clusters de formas arbitrarias. Es robusto al ruido.

- **Desventajas:**
  Hay que elegir Eps y MinPts. Hay que probar. Puede requerir tener conocimiento de los datos, y ser dificil en casos de alta dimensionalidad.
  Funciona mal con datos con densidad variable

Los cluster que queremos identificar son A, B, C y D. Ahora, el nivel de gris mas oscuro es mas denso. Con constantes bien elegidas puedo elegir el A y el B y todo lo demas es ruido (tapando el cuadrado donde esta C y D). Lo mismo para C y D, si tapo el cuadrado de A y B, puedo identificar con constantes bien elegidas a C y D. CUando corro DBSCAN sobre todo junto con constantes globales, si la densidad del ruido de la izquierda es igual a la densidad de los cluster C y D se me van a escapar como ruido. SI ajusto la constante para poder reconocer a A y B y lo demas como ruido, C y D lo veo como ruido. Ahora si ajusto las constantes para reonocer C y D, todo el cuadrado de la izquierda va a ser un unico cluster.
Esto se debe a que los parametros son globales. Pero yo cuando me tiran las nubes de puntos no tengo idea de las densidades y como estan formados. Complicado…
Si haces un grid search para los parametros, quiza para una combinacion de parametros te aparecen como cluster A y B y para otra C y D y te podes ir dando cuenta mas o menos que onda.

## Evaluacion de clusters

En clasificacion y regresion, como tenemos los target podemos dividir en set de entrenamiento y test y bajo alguna metrica ver cuanto error tengo. Aca no tengo nada de eso.

- **Matriz de similitud:**
  Es una matriz cuadrada y simetrica que tenemos las instancias. En cada uno de los casilleros vamos a poner un valor entre 0 y 1 con la similitud entre pares de instancias.

Tenemos una funcion de similitud definida en el dominio. Lo interesante de esto es ordenar esta matriz segun los cluster llegado a una cosa asi. Al ordenar las filas y columnas segun el cluster de las instancias, el clustering es bueno si la MS es diagonal por bloques.

Lo que deberia pasar si el cluster es bueno, es que dentro de un mismo cluster, las instancias de un mismo cluster se parecen entre si. Nos va a mostrar que los cluster tienen instancias similares, cierta cohesion. Y ademas son distintas al resto.

Otra manera es una forma numerica que nos va a tratar de capturar la cohesion (cuan relacionados entre si estan los elementos de un mismo cluster) y la separacion (cuanto se separan los clusters). Esto lo vamos a lograr con el coeficiente de Silhouette.

- **Coefiicente de Silhouette:**
  Para cada punto vamos a calcular la distancia media de ese punto a los de su cluster. Esto es a.
  Ahora calculamos b que es la distancia media a todos los puntos de los otros cluster y me quedo con la minima. Calculo las distancias medias del cluster 1, del cluster 2, y me quedo con la minima.
  En un clustering bueno b deberia ser mucho mayor que a. Eso es lo que queremos calcular. Ese es s.

Lo que se ve es que los puntitos que estan dentro de un cluster, bien adentro, tienen buen coeficiente de silhouette y a medida que se acercan a la frontera son mas oscuros, ya que no tienen bien definido su pertenencia. Una vez que tengo estos numeritos que son por instancia, uno puede calcular un valor para todo un cluster y tener en un solo numerito que nos diga si es bueno el cluster o no. Ese numerito es una combinación de separacion y cohesion.
