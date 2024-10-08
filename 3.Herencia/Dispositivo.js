class Dispositivo {
    // Constructor
    constructor(marca, modelo, precio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
        this.almacenamiento = parseInt(prompt("Ingrese el almacenamiento en GB:"));
    }

    // Método público
    registrar() {
        document.write("<br>");
        document.write('<div class="alert alert-danger" role="alert"><h3>DISPOSITIVO MOVIL<br> <hr></h3>');
        document.write("<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Precio: $" + this.precio + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Almacenamiento: " + this.almacenamiento + "GB<br>");
    }
}

class Smartphone extends Dispositivo {  // Subclase Smartphone
    // Constructor
    constructor(marca, modelo, precio, color, sistemaOperativo) {
        super(marca, modelo, precio, color);  // Llamada al constructor de la superclase
        this.sistemaOperativo = sistemaOperativo;
        this.camaraMegapixeles = parseInt(prompt("Ingrese la cámara en megapíxeles:"));
    }

    // Método privado
    detallesCamara() {
        document.write("Sistema Operativo: " + this.sistemaOperativo + "<br>");
        if (this.camaraMegapixeles >= 64) {
            document.write("<br><hr>");
            document.write("El dispositivo " + this.modelo + " tiene una cámara de alta calidad<br>");
        } else {
            document.write("<br><hr>");
            document.write("El dispositivo " + this.modelo + " tiene una cámara estándar<br>");
        }
    }
}

// Instanciando la subclase Smartphone
let objetoSmartphone = new Smartphone('Samsung', 'Galaxy S23', 799, 'Negro', 'Android');
objetoSmartphone.registrar();
objetoSmartphone.detallesCamara();

