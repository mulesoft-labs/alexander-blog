# An introduction to Machine Learning and Speech processing:

![title](./images/mozart.png)

::: tip
Address -> Moco
:::

## Preparation

Definition: A computer program is said to learn from experience E with respect to some class of task T and performance measure P, if its performance at task in T, as measured by P, improves with experience E.

For example, a computer program that learns to play checkers might improve its performance as measured by its ability to win at the class of tasks involving playing checkers games, through experience obtained by playing games against itself. In general, to have a well-defined learning problem, we must identity these three features: the class of tasks, the measure of performance to be improved, and the source of experience:

**A checkers learning problem:**

- **Task T:** playing checkers
- **Performance measure P:** percent of games won against opponents
- **Training experience E:** playing practice games against itself

**A handwriting recognition learning problem:**

- **Task T:** recognizing and classifying handwritten words within images
- **Performance measure P:** percent of words correctly classified
- **Training experience E:** a database of handwritten words with given classifications

One useful perspective on machine learning is that it involves searching a very large space of possible hypotheses to determine one that best fits the observed data and any prior knowledge held by the learner. For example, consider the space of hypotheses that could in principle be output by the above checkers learners. This hypothesis space consists of all evaluation functions that can be represented by some choice of parameters.

The hypothesis space is defined by some underlying representation (eg. linear functions, logical descriptions, decision trees, artificial neural networks). These different hypotheses representations are appropriate for learning different kind of target functions. For each of these hypothesis representations, the corresponding learning algorithm takes advantage of a different underlying structure to organize the search through the hypothesis space.

Un ejemplo trivial es tener puntos (rojos y azules) en R^2 y tratar de separarlos. Si usamos una recta, es decir algo de la forma f(x) = aX+b, entonces a y b son parámetros de nuestro modelo. Los colores son también parámetros (son nuestras clases). Estamos ajustando un modelo a estos datos. Puede tener diferentes formas el modelo.
Ejemplos: una foto tiene una dimensión por cada pixel, y cada foto seria un punto en nuestro espacio de representación.

Un programa en machine learning se puede dividir en tres partes:

- **Tarea**
- **Experiencia**
- **Medida de performance**
