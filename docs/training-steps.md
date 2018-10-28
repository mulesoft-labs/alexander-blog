# Entrenamiento y validacion:

PONER GRAFIQUITO DE ENTRENAMIENTO Y VALIDACION

Vamos a entrenar un algoritmo (algun tipo de modelo de clasificacion) con las instancias de entrenamiento que separamos. Construimos un modelo que funcione bien para los datos de entrenamiento. Y lo vamos a validar sobre el conjunto de instancias restantes. Esto se llama validacion cruzada.

Notar que algo muy importante es hacer esta separacion de datos de test y datos de entrenamiento de manera azarosa. Pero que puede pasar si tenemos mucha mala suerte al separarlos?

**k-Fold Cross Validation**

Desordenar los datos
Separar en k folds del mismo tamaño
Para i = 1..k
Entrenar sobre todos los folds menos en el i
Evaluar sobre el fold i

## PONER GRAFIQUITO DE K-FOLD VALIDATION

Con esto safo del problema de tener suerte o no al separar datos de entrenamientos. Si k = 5 entrene 5 veces al modelo con 5 separaciones distintas. Tengo 5 medidas de accuracy distintas. Con esas 5 medidas podemos calcular el promedio y su varianza a ver que tal anda.

Podes sacar conclusiones de por ejemplo, la profundidad sea 6 y postpruning sea tal otra cosa.
Bueno, entonces queremos comparar dos hipotesis (2 modelos) $h*{1}$ y $h*{2}$. Tenemos dos opciones:

- Comparar solo la exactitud media de c/u
  Contra: no podemos saber si diferencias pequeñas son en realidad una consecuencia del azar.

- Comparar los ectores de resultados de los k folds con un test estadistico.

K fold CV para h1 -> <...>

k fold CV para h2 -> <...>

Test apareado entre ambos vectores por ejemplo output del test con p-valor.

Con esto voy sacando conclusiones sobre mis hiperparametros y voy ajustando a mis datos. Puede ser que esto tambien me de informacion de que me estan faltando atributos. Voy y meto mas atributos y vuelvo a hacer k-Fold. Voy manoseando los datos muchisimo y al final de todo este proceso me sobre ajuste a otro nivel a los datos. La metodologia me hace sobreajustar.

**Escenario frecuente:**

- Conseguimos un dataset.
- Experimentamos mucho: extraemos y elegimos atributos, probamos algoritmos, ajustamos parámetros.
- Llegamos a un modelo que funciona “bien”.
- Lo ponemos a funcionar con datos nuevos, y los resultados son bastante peores.
- ¿Qué falló?

**Otro nivel de sobreajuste.**

- Sobreajustamos nuestra experimentación a los datos.

**¿Solución?**

- Lo antes posible, hay que separar un conjunto de datos de test (test set), y NO TOCARLOS hasta el final.
- Todas las pruebas y ajustes se hacen sobre el conjunto de datos de desarrollo (dev set).
- Cuando termina el desarrollo, se evalúa sobre los datos de test separados. La estimación de performance será más realista.
- ¡No volver atrás!

PONER FOTITO DE DESARROLLO Y TEST
