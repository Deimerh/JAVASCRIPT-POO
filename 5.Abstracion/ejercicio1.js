class FormaGeometrica {
    calcular_area() {
        throw new Error('El método calcular_area() debe ser implementado  <div class="alert alert-primary" role="alert">');
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcular_area() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcular_area() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases
const cuadrado = new Cuadrado(5);
document.write(`<h4>Area del cuadrado:</h4> <div class="alert alert-primary" role="alert"> ${cuadrado.calcular_area()}<br>`);

const circulo = new Circulo(5);
document.write(`<h4>Area del circulo:</h4>  <div class="alert alert-primary" role="alert"> ${circulo.calcular_area()}`);
