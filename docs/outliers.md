## Métodos formales para la detección de outliers

En la bibliografía se han propuesto una serie de métodos formales para la detección de los mismos. Éstos se pueden agrupar en distintos grupos dependiendo las hipotesis que asumamos:
¿Cuál es el modelo que explica la distribución de los datos? Vamos a limitarnos a pruebas que suponen que los datos siguen una distribución aproximadamente normal.

Ahora bien, ¿Está la prueba diseñada para un solo outlier o está diseñada para múltiples outliers?
Si la prueba está diseñada para múltiples outliers, ¿es necesario especificar exactamente el número de outliers o podemos especificar un límite superior?

Las siguientes son algunas de las pruebas de valores más comunes que se utilizan para los datos distribuidos normalmente. Las pruebas dadas aquí se basan esencialmente en el criterio de "distancia a la media". Este no es el único criterio que se podría utilizar. Por ejemplo, la prueba de Dixon, se basa en un valor demasiado grande (o pequeño) en comparación con su vecino más cercano.

### Prueba de Grubbs:

Esta es la prueba recomendada cuando se realiza la prueba de un solo outlier.

### Prueba de Tietjen-Moore:

Esta es una generalización del test de Grubbs al caso de más de un outlier. Tiene la limitación de que el número de outliers debe especificarse exactamente.

### Generalized Extreme Studentized Deviate (ESD):

Esta prueba sólo requiere un límite superior en el número sospechoso de outliers y es la prueba recomendada cuando se desconoce el número exacto de outliers.

Algo más basico seria utilizar **Z-score**, $Z_i=\frac{Y_i-\bar{Y}}{std}$. En otras palabras, los datos se dan en unidades de cuántas desviaciones estándar están de la media.

Aunque es una práctica común utilizar Z-scores para identificar outliers, esto puede ser engañoso (particularmente para muestras pequeñas) debido al hecho de que la puntuación Z es como máximo $\frac{(n-1)}{\sqrt{n}}$
