// Implementación del patrón Singleton para el Factory
const ShapeFactory = (() => {
    let instance;

    function crearForma(type) {
        switch (type) {
            case 'triangulo':
                return new Triangulo();
            case 'cuadrado':
                return new Cuadrado();
            case 'rombo':
                return new Rombo();
            case 'trapecio':
                return new Trapecio();
            case 'circulo':
                return new Circulo();
            case 'rectangulo':
                return new Rectangulo();
            default:
                throw new Error('Figura no soportada');
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = crearForma;
            }
            return instance;
        }
    };
})();

// Definición de las clases para las figuras geométricas
class Triangulo {
    constructor() {
        this.ladoA = 0;
        this.ladoB = 0;
        this.ladoC = 0;
    }

    setLados(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    getArea() {
        const semiperimetro = (this.ladoA + this.ladoB + this.ladoC) / 2;
        return Math.sqrt(
            semiperimetro *
            (semiperimetro - this.ladoA) *
            (semiperimetro - this.ladoB) *
            (semiperimetro - this.ladoC)
        );
    }

    getPerimetro() {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}

// Clase Cuadrado
class Cuadrado {
    constructor() {
        this.lado = 0;
    }

    setLado(lado) {
        this.lado = lado;
    }

    getArea() {
        return this.lado * this.lado;
    }

    getPerimetro() {
        return 4 * this.lado;
    }
}

// Clase Rombo
class Rombo {
    constructor() {
        this.diagonalMayor = 0;
        this.diagonalMenor = 0;
    }

    setDiagonales(diagonalMayor, diagonalMenor) {
        this.diagonalMayor = diagonalMayor;
        this.diagonalMenor = diagonalMenor;
    }

    getArea() {
        return (this.diagonalMayor * this.diagonalMenor) / 2;
    }

    getPerimetro() {
        console.log(this.diagonalMayor, this.diagonalMenor);
        // Suponiendo que todos los lados del rombo son iguales
        const lado = Math.sqrt(
            Math.pow(this.diagonalMayor / 2, 2) +
            Math.pow(this.diagonalMenor / 2, 2)
        );
        return 4 * lado;
    }
}


// Clase Trapecio
class Trapecio {
    constructor() {
        this.baseMayor = 0;
        this.baseMenor = 0;
        this.altura = 0;
        this.ladoA = 0;
        this.ladoB = 0;
    }

    setMedidas(baseMayor, baseMenor, altura, ladoA, ladoB) {
        this.baseMayor = baseMayor;
        this.baseMenor = baseMenor;
        this.altura = altura;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
    }

    getArea() {
        return ((this.baseMayor + this.baseMenor) * this.altura) / 2;
    }

    getPerimetro() {
        console.log(this.baseMayor ,this.baseMenor , this.ladoA ,this.ladoB);
        const perimetro = this.baseMayor + this.baseMenor + this.ladoA + this.ladoB;
        return perimetro;
    }
}


// Clase Círculo
class Circulo {
    constructor() {
        this.radio = 0;
    }

    setRadio(radio) {
        this.radio = radio;
    }

    getArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    getPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

// Clase Rectángulo
class Rectangulo {
    constructor() {
        this.ladoA = 0;
        this.ladoB = 0;
    }

    setLados(ladoA, ladoB) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
    }

    getArea() {
        return this.ladoA * this.ladoB;
    }

    getPerimetro() {
        return 2 * (this.ladoA + this.ladoB);
    }
}


// Implementación del patrón Abstract Factory Method
const botonCalcular = document.getElementById('calculate-button');
const selectorFigura = document.getElementById('shape-selector');
const contenedorInputs = document.getElementById('inputs-container');
const contenedorResultado = document.getElementById('result-container');

selectorFigura.addEventListener('change', () => {
    // Eliminar los campos de entrada anteriores
    while (contenedorInputs.firstChild) {
        contenedorInputs.firstChild.remove();
    }

    const figuraSeleccionada = selectorFigura.value;
    const figura = ShapeFactory.getInstance()(figuraSeleccionada);

    // Agregar los campos de entrada específicos de la figura seleccionada
    if (figuraSeleccionada === 'triangulo') {
        for (let i = 1; i <= 3; i++) {
            const formGroup = document.createElement('div');
            formGroup.classList.add('form-group');

            const label = document.createElement('label');
            label.setAttribute('for', `lado${i}`);
            label.textContent = `Lado ${i}`;

            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add('form-control');
            input.setAttribute('id', `lado${i}`);

            formGroup.appendChild(label);
            formGroup.appendChild(input);

            contenedorInputs.appendChild(formGroup);
        }
    } else if (figuraSeleccionada === 'cuadrado' || figuraSeleccionada === 'circulo') {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const label = document.createElement('label');
        label.setAttribute('for', 'lado');
        label.textContent = 'Lado';

        const input = document.createElement('input');
        input.type = 'number';
        input.classList.add('form-control');
        input.setAttribute('id', 'lado');

        formGroup.appendChild(label);
        formGroup.appendChild(input);

        contenedorInputs.appendChild(formGroup);
    } else if (figuraSeleccionada === 'rombo') {
        const formGroupDiagonalMayor = document.createElement('div');
        formGroupDiagonalMayor.classList.add('form-group');

        const labelDiagonalMayor = document.createElement('label');
        labelDiagonalMayor.setAttribute('for', 'diagonalMayor');
        labelDiagonalMayor.textContent = 'Diagonal Mayor';

        const inputDiagonalMayor = document.createElement('input');
        inputDiagonalMayor.type = 'number';
        inputDiagonalMayor.classList.add('form-control');
        inputDiagonalMayor.setAttribute('id', 'diagonalMayor');

        formGroupDiagonalMayor.appendChild(labelDiagonalMayor);
        formGroupDiagonalMayor.appendChild(inputDiagonalMayor);

        const formGroupDiagonalMenor = document.createElement('div');
        formGroupDiagonalMenor.classList.add('form-group');

        const labelDiagonalMenor = document.createElement('label');
        labelDiagonalMenor.setAttribute('for', 'diagonalMenor');
        labelDiagonalMenor.textContent = 'Diagonal Menor';

        const inputDiagonalMenor = document.createElement('input');
        inputDiagonalMenor.type = 'number';
        inputDiagonalMenor.classList.add('form-control');
        inputDiagonalMenor.setAttribute('id', 'diagonalMenor');

        formGroupDiagonalMenor.appendChild(labelDiagonalMenor);
        formGroupDiagonalMenor.appendChild(inputDiagonalMenor);

        contenedorInputs.appendChild(formGroupDiagonalMayor);
        contenedorInputs.appendChild(formGroupDiagonalMenor);
    } else if (figuraSeleccionada === 'trapecio') {
        for (let i = 1; i <= 5; i++) {
            const formGroup = document.createElement('div');
            formGroup.classList.add('form-group');

            const label = document.createElement('label');
            label.setAttribute('for', `lado${i}`);
            label.textContent = `Lado ${i}`;

            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add('form-control');
            input.setAttribute('id', `lado${i}`);

            formGroup.appendChild(label);
            formGroup.appendChild(input);

            contenedorInputs.appendChild(formGroup);
        }
    } else if (figuraSeleccionada === 'rectangulo') {
        const formGroupA = document.createElement('div');
        formGroupA.classList.add('form-group');

        const labelA = document.createElement('label');
        labelA.setAttribute('for', 'ladoA');
        labelA.textContent = 'Lado A';

        const inputA = document.createElement('input');
        inputA.type = 'number';
        inputA.classList.add('form-control');
        inputA.setAttribute('id', 'ladoA');

        formGroupA.appendChild(labelA);
        formGroupA.appendChild(inputA);

        const formGroupB = document.createElement('div');
        formGroupB.classList.add('form-group');

        const labelB = document.createElement('label');
        labelB.setAttribute('for', 'ladoB');
        labelB.textContent = 'Lado B';

        const inputB = document.createElement('input');
        inputB.type = 'number';
        inputB.classList.add('form-control');
        inputB.setAttribute('id', 'ladoB');

        formGroupB.appendChild(labelB);
        formGroupB.appendChild(inputB);

        contenedorInputs.appendChild(formGroupA);
        contenedorInputs.appendChild(formGroupB);
    }
});





botonCalcular.addEventListener('click', (event) => {
    event.preventDefault();
    const figuraSeleccionada = selectorFigura.value;
    const figura = ShapeFactory.getInstance()(figuraSeleccionada);

    // Obtener los valores de los campos de entrada
    const valoresInputs = Array.from(contenedorInputs.getElementsByTagName('input')).map(input => parseFloat(input.value));

    // Establecer los valores en el objeto de la figura
    if (figuraSeleccionada === 'triangulo') {
        figura.setLados(...valoresInputs);
    } else if (figuraSeleccionada === 'cuadrado') {
        figura.setLado(valoresInputs[0]);
    } else if (figuraSeleccionada === 'rombo') {
        figura.setDiagonales(...valoresInputs);
    } else if (figuraSeleccionada === 'trapecio') {
        figura.setMedidas(...valoresInputs);
    } else if (figuraSeleccionada === 'circulo') {
        figura.setRadio(valoresInputs[0]);
    } else if (figuraSeleccionada === 'rectangulo') {
        figura.setLados(...valoresInputs);
    }

    // Calcular el área y el perímetro
    const area = figura.getArea();
    const perimetro = figura.getPerimetro();

    // Mostrar el resultado
    const contenedorResultado = document.getElementById('result-container');
const resultadoAlert = document.createElement('div');
resultadoAlert.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'show');
resultadoAlert.setAttribute('role', 'alert');

const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.classList.add('close');
closeButton.setAttribute('data-dismiss', 'alert');
closeButton.setAttribute('aria-label', 'Close');
closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';

const areaTexto = `Área: ${area.toFixed(2)}`;
const perimetroTexto = `Perímetro: ${perimetro.toFixed(2)}`;

resultadoAlert.innerHTML = `<strong>${areaTexto}, ${perimetroTexto}</strong>`;
resultadoAlert.appendChild(closeButton);

contenedorResultado.innerHTML = '';
contenedorResultado.appendChild(resultadoAlert);

});
