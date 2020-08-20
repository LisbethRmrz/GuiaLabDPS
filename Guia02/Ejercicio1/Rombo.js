var Rombo = /** @class */ (function () {
    //creacion de constructor
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalHorizontal = diagonalHorizontal;
        this.diagonalVertical = diagonalVertical;
    }
    Rombo.prototype.calcularArea = function () {
        var resultado = this.diagonalHorizontal * this.diagonalVertical;
        var cadena = "Resultado es: ";
        return (cadena + resultado);
    };
    ;
    return Rombo;
}());
var objeto = new Rombo(5, 4);
document.getElementById("texto2").innerHTML = "Vertical = 5";
document.getElementById("texto3").innerHTML = "Horizontal = 4";
document.getElementById("texto").innerHTML = objeto.calcularArea();
//alert(objeto.calcularArea());
console.log(objeto.calcularArea());
