//Creacion de la clase
class Moto{

    //iniciamos constructor
    constructor(nombre, modelo, capacidad, velocidad_final, torque){
        this.nombre = nombre;
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.velocidad_final = velocidad_final;
        this.torque = torque;
    }
     // mostrar detalles
    detalles(){
        document.write("<h3>Motos</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Modelo: "+this.modelo+"<br>")
        document.write("Capacidad: "+this.capacidad+"<br>")
        document.write("Velocidad Final: "+this.velocidad_final+"<br>")
        document.write("Torque: "+this.torque+"<br>")
        document.write("<hr>")
    }
}

let moto1 = new Moto("Boxer", 2009, "2 personas", "95 KM", "8.9 NM")
let moto2 = new Moto("Yamaha XTZ", 2022, "2 personas", "133 KM", "14.5 NM")
let moto3 = new Moto("BMW S100RR", "2019", "2 personas", "299 KM", "49 NM")


moto1.detalles()
moto2.detalles()
moto3.detalles()