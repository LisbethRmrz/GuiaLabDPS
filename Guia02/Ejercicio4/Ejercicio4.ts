/*Crear una clase Calculadora, con las propiedades numero1, numero2.
Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el
objeto. Y también debe de tener un método operaciones básicas (+ , -, * , /), Este
método debe imprimir en pantalla todas las operaciones realizadas.*/

class Calculadora{
    numero1:number;
    numero2:number;

    constructor(num1:number, num2:number){
        this.numero1=num1;
        this.numero2=num2;
    }

   Operacionesbasicas():string{
       var numero1:number=this.numero1;
       var numero2:number=this.numero2;
        var suma:number=numero1+numero2;
        var resta:number=numero1-numero2;
        var multiplicacion:number=numero1*numero2;
        var division:number=numero1/numero2;
        return("Suma: " +suma+", Resta: "+resta+", Multiplicación: "+multiplicacion+", División:  "+division);
    };

}

let Operaciones = new Calculadora(8,2);

document.getElementById("num1").innerHTML="8";
document.getElementById("num2").innerHTML="2";
document.getElementById("resultado").innerHTML=Operaciones.Operacionesbasicas();
console.log(Operaciones.Operacionesbasicas());
