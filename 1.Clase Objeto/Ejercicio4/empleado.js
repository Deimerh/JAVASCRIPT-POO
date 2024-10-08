//creacion de la clase
class Empleado{

    constructor(nombre, edad, profesion, cargo){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.cargo = cargo;

    }
    detalles(){
       document.write("<h3>Lista de Empleados</h3><br>")
       document.write("Nombre: " + this.nombre + "<br>")
       document.write("Edad: " + this.edad + "<br>")
       document.write("Profesion: " + this.profesion + "<br>")
       document.write("Cargo: " + this.cargo + "<br>")
       document.write("<hr>")
    }
}


let empleao1 = new Empleado("Luis Ruiz", "32 años", "Asistente Administrativo", "Secretario");
let empleao2 = new Empleado("Wilmer Siolo","35 años","Ing. Sistemas", "Develpment");
let empleao3 = new Empleado("Valeria Ortiz", "23 años", "Psicologia", "Psicologa")

empleao1.detalles()
empleao2.detalles()
empleao3.detalles()