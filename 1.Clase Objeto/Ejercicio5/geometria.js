// creacion de la clase

class Geometria{

    constructor(nombre, angulo, area, lados){
        this.nombre = nombre;
        this.angulo = angulo;
        this.area = area; 
        this.lados = lados;
        
    }
    //mostrar detalles
    detalles(){
        document.write("<h3>Figuras Geometricas</h3><br>")
        document.write("Nombre: " + this.nombre + "<br>")
        document.write("Angulo: " + this.angulo + "<br>")
        document.write("Area: " + this.area + "<br>")
        document.write("Lados: " + this.lados + "<br>")
        document.write("<hr>")
    }

}

let figura1 = new Geometria("Triangulo", "60°", "90cm2", "3 Lados")
let figura2 = new Geometria("Octagono", "70°", "100cm2", "8 Lados")
let figura3 = new Geometria("Rectangulo", "20°", "200 cm2", "4 Lados")

//llamar

figura1.detalles()
figura2.detalles()
figura3.detalles()