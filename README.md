
## Implementación de la página de cálculo de figuras geométricas

El objetivo de esta implementación es crear una página web que permita calcular el área y el perímetro de diferentes figuras geométricas.

### HTML

El código HTML define la estructura de la página. Incluye un título (`<h1>`) que muestra "Calculadora de Figuras Geométricas". Luego, hay un contenedor principal con el id "shape-container" que contiene los elementos necesarios para realizar los cálculos.

-   Selector de Figura: Se utiliza un elemento `<select>` con el id "shape-selector" que permite al usuario seleccionar la figura geométrica de la cual desea calcular el área y el perímetro. Cada opción tiene un valor asociado correspondiente al nombre de la figura.
-   Contenedor de Inputs: Se utiliza un `<div>` con el id "inputs-container" para mostrar los campos de entrada específicos de cada figura geométrica. Estos campos se agregarán dinámicamente según la figura seleccionada.
-   Botón de Calcular: Se utiliza un `<button>` con el id "calculate-button" y el texto "Calcular" para realizar los cálculos.
-   Contenedor de Resultado: Se utiliza un `<div>` con el id "result-container" para mostrar el resultado del cálculo de área y perímetro de la figura seleccionada.

### CSS

El código CSS, contenido en el archivo "styles.css", se utiliza para dar estilo a los elementos de la página. Estas son las reglas de estilo aplicadas ademas de clases de boostrap importadas por medio de CDN:

-   `h1`: Se centra el texto del título principal.
    
-   `#shape-container`: Se configura el contenedor principal para que sea un flexbox con dirección de columna y alineación central. También se establece un margen superior de 20 píxeles.
    
-   `#inputs-container`: Se configura el contenedor de inputs para que sea un flexbox con dirección de columna. Además, se establece un margen superior de 10 píxeles.
    
-   `#inputs-container input`: Se aplica un margen inferior de 5 píxeles a los inputs dentro del contenedor de inputs.
    
-   `#calculate-button`: Se establece un margen superior de 10 píxeles al botón de calcular.
    
-   `#result-container`: Se configura el contenedor de resultados para que el texto se alinee al centro y se establece un margen superior de 20 píxeles.
    

### JavaScript

El código JavaScript, contenido en el archivo "script.js", se encarga de implementar los patrones de diseño Abstract Factory Method y Singleton, así como de realizar los cálculos de área y perímetro.

-   Patrón Singleton: Se utiliza una función autoejecutable para crear la instancia única del Factory. Esto asegura que solo exista una única instancia de ShapeFactory.
    
-   Patrón Abstract Factory Method: Se implementa el método `createShape` dentro de ShapeFactory, el cual devuelve una instancia de la figura geométrica solicitada según el tipo especificado.
    
-   Clases de Figuras Geométricas: Se definen las clases para cada figura geométrica, como Triangulo, Cuadrado, Rombo, Trapecio, Círculo y Rectángulo. Cada clase tiene métodos para establecer las dimensiones de la figura y para calcular el área y el perímetro.
    
-   Eventos y cálculos: Se agregan eventos de escucha al selector de figura y al botón
