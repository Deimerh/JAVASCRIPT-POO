class Empleado {
    calcular_salario() {
        throw new Error('El método calcular_salario() debe ser implementado');
    }
}

class EmpleadotieompoCompleto extends Empleado {
    constructor(tiempo) {
        super();
        this.tiempo = tiempo;
    }

    calcular_salario() {
        return this.tiempo * 20000;
    }
}

class EmpleadoporHoras extends Empleado {
    constructor(horas) {
        super();
        this.horas = horas;
    }

    calcular_salario() {
        return this.horas * 5000;
    }
}

// Uso de las clases
const empleadotieompoCompleto = new EmpleadotieompoCompleto(3);
document.write(`<h4 class="text-white">Salario por tiempo completo: ${empleadotieompoCompleto.calcular_salario()}</h4>`);

const empleadoporHoras = new EmpleadoporHoras(5);
document.write(`<h4 class="text-white">Salario por horas: ${empleadoporHoras.calcular_salario()}</h4>`);
