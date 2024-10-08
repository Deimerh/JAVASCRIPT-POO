class Reloj {
    // Constructor
    constructor(marca, modelo, precio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
    }

    // Método para mostrar la información básica del reloj
    mostrarInformacion() {
        document.write("<hr>");
        document.write("INFORMACIÓN DEL RELOJ<br>");
        document.write("<hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Precio: $" + this.precio + "<br>");
        document.write("Color: " + this.color + "<br>");
    }
}

class RelojInteligente extends Reloj {
    // Constructor
    constructor(marca, modelo, precio, color, duracionBateria) {
        super(marca, modelo, precio, color);  // constructor de la superclase
        this.duracionBateria = duracionBateria;
        let sistemaOperativo = prompt("Ingrese el sistema operativo del reloj (iOS o Android):");

        // Validación con if y else simple, sin toLowerCase
        if (sistemaOperativo === "iOS") {
            this.sistemaOperativo = "iOS";
        } else {
            this.sistemaOperativo = "Android";
        }
    }

    // Método para mostrar la información específica del reloj 
    mostrar() {
        this.mostrar();  // Utiliza el método de la clase base
        document.write("Sistema Operativo: " + this.sistemaOperativo + "<br>");
        document.write("Duración de la Batería: " + this.duracionBateria + " horas<br>");
    }
}

// Instanciando la clase Reloj
let relojInteligente = new RelojInteligente('ROLEX', 'Watch Series 8', 399, 'Negro', 18);
relojInteligente.mostrar();
