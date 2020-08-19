class Rombo
{
    diagonalVertical:number;
    diagonalHorizontal:number;
    calcularArea():string
    {
        var resultado:number=this.diagonalHorizontal*this.diagonalVertical;
        var cadena:string="Resultado es: ";
        return (cadena+resultado);
    };
    //creacion de constructor
    constructor( diagonalVertical:number, diagonalHorizontal:number)
    {
        this.diagonalHorizontal=diagonalHorizontal;
        this.diagonalVertical=diagonalVertical;
    }
}
let objeto = new Rombo(5,4);

document.getElementById("texto2").innerHTML="Vertical = 5";
document.getElementById("texto3").innerHTML="Horizontal = 4";
document.getElementById("texto").innerHTML=objeto.calcularArea();
//alert(objeto.calcularArea());
console.log(objeto.calcularArea());


