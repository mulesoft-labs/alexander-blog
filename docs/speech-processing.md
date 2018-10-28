# Procesamiento del Habla

**Objeto de estudio**: Habla.

**Que es el habla?** Audio. La vamos a interpretar como una onda.

## Tres elementos fundamentales en el procesamiento del habla:

- Reconocimiento automatico (hablo y la computadora reconoce las palabras, lo que hace despues es otro problema). Es el mas conocido.
- Sintesis de habla es lo opuesto, yo escribo algo y la computadora lo lee.
- Detectores de caracteristicas del hablante (vamos a tratar de a partir de una senial saber si la persona es un hombre o mujer, la edad, etc.)

## Reconocimiento automatico:

Habla -> secuencia de palabras. Tenemos una senial de audio proveniente de una grabacion. Al audio lo vamos a representar de alguna manera.

El audio son fluctuaciones de presion que generaron el habla (el medio sería el aire). Una manera de poder visualizar dichas fluctuaciones son mediante un **Espectograma**. El eje X es el tiempo y el eje Y son las frecuencias. **Nos muestra las frecuencias presentes en el habla**. Por ejemplo de 0 a 5000 hz. Los manchones son diferentes frecuencias presentes en el habla. El reconocimiento del habla se encarga de reconocer patrones en este espectro de frecuencias en el tiempo que se corresponden con distintas letras, fonemas. La s tiene un valor particular (ruido blanco). El ruido blanco no tiene ninguna frecuencia presente, todo desparramado al azar. La a tiene 4 formantes por ejemplos (4 manchones). En un instante de tiempo podemos ver que hay más de una frecuencia presente. Negro es que esa frecuencia esta con energia alta. Muy presente en la senial. Cuando decimos manta podemos estirar la a diciendo maaaaaanta, pero estirar la t cagamos la fruta. Lo que no es estirable es porque la t es como un golpe. Lo generamos con un flujo muy breve de aire por la boca. La t la b la d la g no se pueden estirar en el tiempo. Hay que ver tanto la presencia de frecuencias como la evolucion temporal.

A la senial hay que limpiarle el ruido, preprocesarla, etc. Todo esto es ing electronica. Tambien hay que segmentar los hablantes, la senial. De aca a aca esta hablando pepe y de aca a aca el pepo. No es nada trivial pasar de una secuencia de palabras (habla) a una secuencia de texto legible. Una vez que tenemos las palabras queremos poder hacer algo con esto. Por ejemplo generar una consulta a una base de datos o entender que me quieren decir.

## Sintesis:

Dado una secuencia de palabras quiero generar audio. Si yo llamo al 113 algo lee la hora y me lo dice oralmente. Por ejemplo se guardan los 24 valores desde 20 horas, 21 horas, etc y se van concatenando (sintesis concatenativa) con los de minutos. Si achicamos la unidad que usamos (donde corto) es mejor. Podemos decir mas cosas, generar mas cosas. Lo que se usa hoy en dia son **difonos**. Partis de la mitad de un sonido (**la parte estable de un sonido**) y vas hasta la parte estable del siguiente sonido. Tenemos una base de datos que para cada uno de estos pares de sonidos tenemos varias instancias, por ejemplo 4 instancias de la a. Como vamos concatenando? Generamos una secuencia que minimice las penalidades (como se pegotean los audios, puede ser que queramos decir hola mundo muy enfática entonces agarramos los difonos alegres, etc.)

- **Problema:**
  Todo lo que investigas para el espaniol no se pueda usar en otro lenguaje, o que con el tiempo el mismo lenguaje vaya cambiando. Nuevas frases, etc. Toda la teoria de un lenguaje suele cambiar.

- **Sintesis basada en formantes:**
  Es tratar de generar el habla con una caja negra. No trata de simular el tracto vocal y todas las cosas fisicas que ocurren sino directamente yendo al punto. Que hay que generar? Esta onda con esta caracteristica? Entonces dejame dibujartela y esto va a sonar como vos queres.

- **Sintesis basada en HMMs:**
  Se usa para reconocimiento del habla, cuando uno entrena esos modelos crea tambien un modelo generativo. Sirve para describir datos y para predecir pero tambien se puede dar vuelta y generar. Conociendo la secuencia de fonos que quiero generar, generame los espectogramas correspondientes. Es un modelo estadistico, no hay grabaciones como en sintesis concatenativa (esta atado a lo que grabo, solo puedo recortar y pegar). Podes cambiarle el tono de voz, la velocidad, etc.

Si me dicen 110 no se si decir ciento diez o uno uno cero.

- **Sintesis articulatoria:**
  Trata de simular mediante tubos el tracto vocal usando la fisica.
  Si queremos trabajar para reservar vuelos por ejemplo, tengo que pasar el habla a una consulta SQL y decirle si queda o no lugar.

## Acustica:

El sonido son fluctuaciones de presion en el medio causadas por fuentes (un instrumento musical, etc) y llegan al oido. Es el encargado de estas fluctuaciones transformarlas en lo que nosotros interpretamos como sonido.

Ejemplo para entender la propagacion de una onda: tenemos un monton de particulas esperando en una cola de banco. Cuando uno se va, tiene un vacio adelante y pum se va para adelante. Todos los de atras de el tambien se van para adelante, el vacio se propaga en el medio. Si uno empuja a otro (le aplica una variacion de presion) ese otro se va a llevar por delante al siguiente y asi. Ojo que se va disipando la onda expansiva. En algun momento dejo de empujar al siguiente. Ejemplo de los vasos con el piolin tenso! Esta variacion en la presion es un solo numero, lo que viaja es un numerito nada mas! Entonces con ese numero ya tengo todo para representar al sonido. En la pc tengo que ver como samplearlo (muchas veces por segundo ya que pasan miles de veces por segundo). Tenemos que medir esas fluctuaciones. Cada un rango de tiempo tomo una muestra y la dibujo. Eso es lo unico que necesito para grabar. La gracia de esto es que se puede descomponer en un monton de frecuencias. Esta senial se puede estudiar en mas detalle.

Los sonidos se pueden descomponer en **periodicos o aperiodicos**.

- **Ondas periodicas simples o senoidales:**
  Son la piedra fundamental de la acustica. Una onda senoidal es sin(x). Da un tono puro, cuanto mas alta es la frecuencia mas agudo se escucha. Ciclo es hasta donde repito, periodo es la duracion del ciclo. La frecuencia es 1/periodo. Estas ondas senoidales se pueden combinar y generar ondas complejas. Las ondas simples se pueden sumar.
- **Ondas complejas:**
  Es una onda ciclica formada por la suma de un monton de funciones senoidales. Cada una con distintas caracteristicas. Por ejemplo con dos senoidales de 100 y 1000 hz.
  Los sonidos aperiodicos no tienen un patron, no podemos hablar de frecuencia ni de ciclo. Nada que se repita. Vamos a hablar de dos tipos, ruido blanco (fluctuaciones aleatorias de presion) no hay informacion, no sirve de nada. A nosotros nos interesa porque aparece en la S y en la F. Y ondas transitorias.

- **Sonidos aperiodicos:**
  **Ruido blanco:**
  Fluctuacion aleatoria de presion. El espectro es plano, igual amplitud para todas las frecuencias.
  **Ondas transitorias:**
  Fluctuaciones subitas de presion que no se sostienen ni se repiten. Portazos, disparos, mouse clicks, [p][t]

## Interpretacion de ondas:

**Analisis de fourier:** lo que hace es agarrar la onda (por ejemplo una compuesta) y decirnos que frecuencias estan presentes en esa onda y la amplitud de cada frecuencia presente. Nos da una estimacion. Esto es el espectro energetico en un punto o intervalo de tiempo. Lo vamos a usar para el espectograma. El espectro es una linita en el espectograma. El espectrograma es una descomposicion de la longitud de las frecuencias en el tiempo. El habla entra entre 0 y 5 khz. Puede ser que en una ventanita encuentre cierta periodicidad en un sonido aperiodico, pero lo que me define la aperiodicidad es que no la puedo extender en el tiempo.

## Seniales:

La senial en el mundo real es analogica. Es continua tanto en el tiempo como en amplitud de la onda. Pero necesitamos mudarnos a un mundo discreto. Ambas componentes hay que discretizar. El tiempo sampleamos cada cierto intervalo. La conversion analogica digital tiene por un lado el muestreo que discretiza el tiempo que me define el sampling rate, cuantas veces por segundo voy a tomar muestras. Por el teorema del sampleo, tengo que samplear a mas del doble de la frecuencia. Cuantización: para la amplitud hay que definir cuantos bits vamos a usar. Un int? Un long? Se usan 16 bit en general.

- **Amplitud:**
  Maxima variacion de presion por sobre la presion atmosferica normal.

- **Fase:**
  Timing de la forma de onda relativo a algun punto de referencia.

- **Ondas periodicas complejas:**
  Ondas ciclicas formadas por multiples ondas senoidales

- **Muestreo (sampling rate):**
  Discretizacion del tiempo

- **Cuantizacion:**
  Discretizacion de la amplitud

- **Saturacion digital (clipping):**
  La amplitud de la senial es mayor al rango representable.

- **Frecuencia fundamental (F0):**
  Frecuencia mas baja de una onda periodica (patrón complejo mas chico).

- **Metodo de autocorrelacion:**
  Deslizar una copia de la onda hacia la derecha, hasta encontrar un punto de maxima correlacion. El offset encontrado corresponde a la duracion del periodo (T). La inversa (1/T) es la F0.

- **Funciona bien:**
  Para fonos sonoros: vocales [m][b] [l] (ondas periodicas compuestas)

- **Funciona mal:**
  Para fricativas, oclusivas sordas, etc. [s][f][t][k][tsigma] (sonidos aperiodicos)

Algo copado, la diferencia entre 200 y 300 mhz es mucho mas grande que de 1200 a 1300 mhz. Parecen sonidos que estan igual de separados pero los notamos totalmente distintos. No es lineal nuestra percepcion de acuerdo a como sube y baja la onda en un intervalo de tiempo. Hay una escala que es logaritmica, escala MEL. Es una escala mas cercana a nuestra forma de percibir las diferencias de tonos en distintas partes del espectro.

## Tono:

Lo que le da el tono a una onda es la cantidad de veces que le pegamos al timpano por segundo.

El microfono convierte estas osilaciones de presion en el aire en osilaciones de voltaje. Transforma esos cambios de presion en voltaje. Se puede guardar directamente en manera analogica estos voltajes. La PC lo que hace es convertirlo en 1s y 0s. El muestreo es la discretizacion en el tiempo y la cuantizacion es la discretizacion de la amplitud. La primera pregunta que aparece es cada cuanto hay que tomar muestras en la senial. El teorema de Shannon. Si tenemos una onda con frecuencia f, necesitamos una tasa de muestreo mayor que 2f. Necesitamos poder medir una parte de la onda que sube y una parte de la onda que baja. Sino no estariamos capturando la periodicidad de una funcion. Si hago exactamente el doble puedo caer en los 0s de la funcion periodica =(. Lo que queremos siempre es poder grabar algo. No queremos usar todas las frecuencias posibles porque reviento la memoria. Usar lo menos posible, la frecuencia mas baja posible que me permita capturar lo que queramos capturar.

Queremos muestrear la mayor cantidad posible guardando lo menor posible. Para habla tambien neceitamos 44 khz? No amigo. La empresa bell eligió 8Khz. Hay problemas con el habla, la S y la F se complican! La S tiene frecuencias mas altas! 16 Khz anda barbaro para habla. Podriamos capturar hasta 8khz pero en habla casi no hay frecuencias presentes arriba de los 6 Khz.

- **Aliasing:**
  Ocurre cuando la senial contiene frecuencias mayores a la frecuencia de sampleo, por ejemplo cuando en la ruta vemos las ruedas de los autos yendo a mas de 100 km/h. Tenemos una frecuencia de sampleo que no alcanza para capturar la periodicidad de la onda (de la rueda girando, de la turbina, etc).

A veces cuando grabamos hay frecuencias altisimas que ni escuchamos pero el microfono si! Es una onda que se le agrega al audio. Una frecuencia que no deberia haber estado (por ejemplo una frecuencia supersónica). Y cuando la escuchamos hay un ruido muy agudo. Esta habiendo aliasing. Seniales fantasmas que eran otra cosa en la vida real. La solucion a esto es un filtro anti aliasing. Yo te pido que me grabes a 8 Khz pero internamente graba a todo lo que le de y filtra las frecuencias mas altas y me da las frecuencias dentro del rango que yo quiero.

Los filtros tienen 3 sabores, los pasa bajos, pasa altos y los pasa banda. Es bloquear las componentes mayor a un umbral, menor o fuera de una banda.

Veamos otro tipo de problema que se puede presentar:

La cuantizacion es otro de los origenes de errores. Aliasing viene de la discretizacion del tiempo. Cuando discretizamos la amplitud, la energia hay que ver cuantos bit dedicarle a esto. Cuantos niveles es necesario distinguir es a prueba y error. Llevamos una curva a algo escalonado.

- **Saturacion digital (clipping):**
  La amplitud de la senial es mayor al rango representable. Para solucionar esto se puede redefinir los niveles de amplitud o disminuir la amplitud de la fuente (le pido a la persona que baje el microfono).

## Variables acusticas que se pueden medir:

- **Intensidad:**
  Intensidad: la onda es mas grande cuando hablo mas fuerte, la presion es mayor. Eso quiere decir que la amplitud de la onda es mayor donde grito mas. Eso es lo que quiero medir cuando vea intensidad. Quiero capturar esa amplitud, no punto a punto sino en una palabra. En la palabra hola, la primera silaba comparada a la segunda, cual pronuncio con mas intensidad. Mido cuan fuerte fue la fluctuacion en el aire. Se puede medir en Pascales, el microfono puede medirlo en Voltaje, aunque lo mas comun son los decibeles (es una escala bastante particular ya que es una comparacion, no es una unidad de por si. Los voltios, centimetros, son todas unidades absolutas. Los decibeles son una comparacion del estilo, comparo contra el silencio. 20 log (p / p0) db, agarro la presion en pascales, la divido por el silencio. Me lo lleva a magnitudes manejables. Divido fluctuaciones de presion, no presiones.)

Volumen, amplitud, energia, intensidad, para nosotros es todo lo mismo.

Para calcular intensidad lo que hacemos es, tomamos N muestras de amplitud de una senial. Y lo que hacemos para calcular la RMS la norma solo que a los xi los divido por N. Esto nos queda en una unidad de medida, entonces lo dividimos por P0 que es el nivel de referencia del silencio le aplicamos log10 y multiplicamos por 20.

Cuando grite o susurre voy a ver cambios en la intensidad, en los decibeles.

- **Tono de voz:**
  Tambien conocido como **Nivel Tonal** (Pitch, es la altura de la senial, si suena aguda o mas grave).
  **Frecuencia fundamental (F0)** es la frecuencia mas baja de una onda periodica (la mas larga). Buscar el patron complejo mas chico. Una vez que tengo el ciclo fundamental, tengo que ver a cuan frecuentemente se repite. Si el patron se repite muchas veces y muy rapido tengo algo mas agudo. Ver cuan frecuentemente se repite es calcular el Pitch Tracking. Como se hace esto? Hay muchas formas, el mas comun y que mejor resultados da es el metodo de auto-correlacion. Si dos ondas se comportan parecido van a tener una correlacion cercana a 1, sino mas cercana a -1 si es lo opuesto. Con 0 es que no tienen nada que ver. Entonces lo que hacemos aca es partir de la base que una onda periodica se relaciona consigo misma porque cada ciclo se parece mucho al ciclo siguiente. Cada uno de estos ciclos por deficion se parece mucho al que viene despues. Si agarro y deslizo una copia de la onda para la derecha en algun momento voy a matchear. La auto correlacion de la senial consigo misma va a tener un punto maximo cuando llegamos al primer ciclo. Deslizo la ventana hasta encontrar un punto de maximo correlacion. Cuando encuentro ese punto encontre el periodo divido 1/periodo y tengo la frecuencia fundamental. Como se cuando parar? Si empiezo a seguir encuentro mas puntos, tengo muchos pitch.

- **Errores de halving y dalving:**
  Le pifiamos por el doble o por la mitad al pitch. Puede ser que la senial sea muy parecida a mitad de camino y tenes otro pico de correlacion. Puede ser que si te da un valor de pitch de 500 hz y el que habla es alguien con una voz muy grave se que nunca puede tener 500 hz de pitch, de los candidatos que tenia me quedo con el mas grave. Con el metodo de autocorrelacion podemos ir midiendo instante a instante (pitch track). Esto esta fuertemente relacionado al nivel tonal.

Los armonicos son multiplos de la frecuencia fundamental (armonicos de la guitarra, del saxo, etc).

Esto funciona muy bien para fonos sonoros (todos los sonidos que producimos en los cuales vibran las cuerdas vocales). La b vs la p es que vibran las cuerdas vocales, la p hace todo lo mismo pero no vibran las cuerdas vocales (todo en el tracto vocal es lo mismo). Las consonantes sordas son las que tienen problemas para el pitch tracker, porque producen o bien ruido blanco o sonidos transitorios (todos los tipos de sonidos aperiodicos). Si no tengo periodicidad como encuentro un patron? El metodo de correlacion va a fallar. Y peor, si tenemos mala suerte nos puede dar cualquier fruta!.
