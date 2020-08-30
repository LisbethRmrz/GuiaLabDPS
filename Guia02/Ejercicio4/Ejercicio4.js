/*Crear una clase Calculadora, con las propiedades numero1, numero2.
Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el
objeto. Y también debe de tener un método operaciones básicas (+ , -, * , /), Este
método debe imprimir en pantalla todas las operaciones realizadas.*/
var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    Calculadora.prototype.Operacionesbasicas = function () {
        var numero1 = this.numero1;
        var numero2 = this.numero2;
        var suma = numero1 + numero2;
        var resta = numero1 - numero2;
        var multiplicacion = numero1 * numero2;
        var division = numero1 / numero2;
        return ("Suma: " + suma + ", Resta: " + resta + ", Multiplicación: " + multiplicacion + ", División:  " + division);
    };
    ;
    return Calculadora;
}());
var Operaciones = new Calculadora(8, 2);
document.getElementById("num1").innerHTML = "8";
document.getElementById("num2").innerHTML = "2";
document.getElementById("resultado").innerHTML = Operaciones.Operacionesbasicas();
console.log(Operaciones.Operacionesbasicas());
