// Creacion de la clase

class Animal{

        //Metodo constructor
    constructor(nombre, lugar, habitad, años){
        this.nombre = nombre;
        this.lugar = lugar;
        this.habitad = habitad;
        this.años = años;

    }
    mostrar(){
        document.write("<h3>Animales</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>");
        document.write("Lugar: "+this.lugar+"<br>")
        document.write("Habitad: "+this.habitad+"<br>")
        document.write("Años: "+this.años+"<br>")
        document.write("<hr>")

    }
    carnivoro(){
        //creacion de variable privada
        let carne = document.write(prompt("El animal es carnivoro?"))
        //Evaluamos si es carnivoro
        if ("si" == "si"){
            document.write(" Es carnivoro<br>");
        } else{
            document.write(" No es carnivoro<br>")
        }
    }
         
    hervi(){
        //elemento privado llamdado carne
         let hierva = document.write(prompt("El animal es un hervivoro? "));
        //evalumos si es o no es
        if ("si" == "si"){
            document.write("Es hervivoro <br>");
        } else{
            document.write("No es hervivoro<br>");
        }
           
    }
  

}

let animal1 = new Animal("Gato", "Monte o Casa", "Zonas Verdes", 2," años");
let animal2 = new Animal("Erizo", "Zonas Rocosas", "Bosques", 4, " Años");
let animal3 = new Animal("Cerdo", "Zona Domestica", "Humedos, frios, soleado", 6, " Años")

//mostrar detalles de cada objeto
animal1.mostrar()
animal1.carnivoro()
animal2.mostrar()
animal2.hervi()
animal3.mostrar()
