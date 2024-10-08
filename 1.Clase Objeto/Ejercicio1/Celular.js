// Defino la clase

    //Metodo constructor
class Celular{

    constructor(modelo, marca, color, bateria, camara, precio){
        this.modelo = modelo; // Propiedades para la instancia
        this.marca = marca;
        this.color = color;
        this.bateria = bateria;
        this.camara = camara;
        this.precio = precio;

    }

    // Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Dispositivo Movil</h3><br>")
        document.write("Modelo: "+this.modelo+"<br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("Bateria: "+this.bateria+"<br>")
        document.write("Camara: "+this.camara+"<br>")
        document.write("Precio: "+this.precio+"<br>")
        document.write("<hr>")
    }
    encender(){
        //Definir el atributo privado energia
        let energia = parseInt(prompt("Digite la carga del celular"));

        if(energia > 0){
            document.write("EL celular :"+ this.modelo + " Se puede encernder <br>");
            document.write('||||||||||| ${energia} % de carga <br>')
            document.write("<br>")
        } else{
            document.write("El celular :" + this.modelo + " no se puede encender");
            document.write('|||||||||| ${energia} % de carga <br>')
            document.write("<hr>")
        }
    
    }

}

let celular1 = new Celular("Xiaomi Mi 14Tpro","Xiaomi", "Negro", "5000mAH","68mpx",1350000);
let celular2 = new Celular("Samsung S23 Ultra", "SAMSUNG", "Azul","5500mAH", "108mpx", 4500000)
let celular3 = new Celular("Iphone 15", "APPLE", "Blanco", "64mpx", "4000mAH",5000000)

// Mostrar detalles de cada objeto

celular1.mostrarDetalles()
celular1.encender()
celular2.mostrarDetalles()
celular2.encender()
celular3.mostrarDetalles()
celular3.encender()