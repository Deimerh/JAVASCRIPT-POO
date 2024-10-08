class Instrumento {
    // Constructor
    constructor(tipo, marca, materialFabricacion, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.materialFabricacion = materialFabricacion;
        this.precio = precio;
        this.tamano = parseFloat(prompt("Ingrese el tamaño del instrumento en cm:"));
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write("INSTRUMENTO REGISTRADO<br>");
        document.write("<hr>");
        document.write("Tipo: " + this.tipo + "<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Material de fabricación: " + this.materialFabricacion + "<br>");
        document.write("Precio: $" + this.precio + "<br>");
        document.write("Tamaño: " + this.tamano + " cm<br>");
    }
}

class Guitarra extends Instrumento {  // Subclase Guitarra
    // Constructor
    constructor(tipo, marca, materialFabricacion, precio, numeroCuerdas) {
        super(tipo, marca, materialFabricacion, precio);  // Llamada al constructor de la superclase
        this.numeroCuerdas = numeroCuerdas;
    }

    // Método privado
    detallesCuerdas() {
        document.write("<hr>");
        document.write("La guitarra " + this.marca + " tiene " + this.numeroCuerdas + " cuerdas<br>");
    }
}

// Instanciando la subclase Guitarra
let objetoGuitarra = new Guitarra('Eléctrica', 'Fender', 'Madera', 890000, 6);
objetoGuitarra.registrar();
objetoGuitarra.detallesCuerdas();

