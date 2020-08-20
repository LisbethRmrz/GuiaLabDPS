/*Crear una clase Empleado, con las propiedades nombre, salario, añadiremos un
constructor al que le pasaremos los valores anteriores cuando instanciemos el
objeto. Y también debe de tener un método que calcule deducciones salariales,
Este método devolverá el salario después de los descuentos.*/
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.calcularSalario = function () {
        var nombre = this.nombre;
        var salario = this.salario;
        var afp = 0.0775;
        var isss = 0.03;
        var neto = (salario) - ((salario * afp) + (salario * isss));
        return ("Nombre es:" + nombre + " Salario Neto: $" + neto);
    };
    ;
    return Empleado;
}());
var objeto = new Empleado("Manuel Gámez", 600.00);
document.getElementById("texto2").innerHTML = "Manuel Gámez";
document.getElementById("texto3").innerHTML = "600.00";
document.getElementById("texto").innerHTML = objeto.calcularSalario();
console.log(objeto.calcularSalario());
