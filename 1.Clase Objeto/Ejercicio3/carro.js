//creacion de la clase
class Carro{

    constructor(marca, modelo, color, potencia){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.potencia = potencia;

    }
    mostrarDetalles(){
        document.write("<h3>AutoMoviles</h3><br>")
        document.write("Marca: " +this.marca +"<br>")
        document.write("Modelo: " + this.modelo + "<br>")
        document.write("Color: " + this.color + "<br>")
        document.write("Potencia: " + this.potencia + "<br>")
        document.write("<hr>")
    }

}
let carro1 = new Carro("Mazda", 2024, "Negro", "188 CV");
let carro2 = new Carro("Bugatti", 2022, "Azul", "1600 CV")
let carro3 = new Carro("KIA", 2019, "Amarillo", "900 CV")


carro1.mostrarDetalles()
carro2.mostrarDetalles()
carro3.mostrarDetalles()