class Electronico {
    // Constructor
    constructor(marca, modelo, precio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
    }

    // Método mostrar la información
    mostrarInformacion() {
        document.write("<br><hr>");
        document.write("INFORMACIÓN DEL ELECTRÓNICO<br>");
        document.write("<br><hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Precio: $" + this.precio + "<br>");
        document.write("Color: " + this.color + "<br>");
        
    }
}

class Laptop extends Electronico {
    // Constructor
    constructor(marca, modelo, precio, color, tamañoPantalla, capacidadBateria) {
        super(marca, modelo, precio, color);
        this.tamañoPantalla = tamañoPantalla;
        this.capacidadBateria = capacidadBateria;
    }

    // Método para mostrar la información específica de la laptop
    mostrarInformacionLaptop() {
        this.mostrarInformacion();  // Utiliza el método de la clase base
        document.write("Tamaño de Pantalla: " + this.tamañoPantalla + " pulgadas<br>");
        document.write("Capacidad de Batería: " + this.capacidadBateria + " mAh<br>");
    }
}

// Instanciando la clase Laptop
let laptop = new Laptop('HP', 'XPS 13', 1200, 'Plata', 13.3, 5000);
laptop.mostrarInformacionLaptop();
