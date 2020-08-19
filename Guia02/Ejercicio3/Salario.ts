/*Crear una clase Empleado, con las propiedades nombre, salario, añadiremos un
constructor al que le pasaremos los valores anteriores cuando instanciemos el
objeto. Y también debe de tener un método que calcule deducciones salariales,
Este método devolverá el salario después de los descuentos.*/
class Empleado
{
    nombre:string;
    salario:number;
    calcularSalario():string
    {
        var nombre:string=this.nombre;
        var salario:number=this.salario;
        var afp=0.0775;
        var isss=0.03;
        var neto:number=(salario)-((salario*afp)+(salario*isss));
        return ("Nombre es:"+nombre+" Salario Neto: $"+neto);
    };
    constructor( nombre:string, salario:number)
    {
        this.nombre=nombre;
        this.salario=salario;
    }
}
let objeto = new Empleado("Manuel Gámez",600.00);

document.getElementById("texto2").innerHTML="Manuel Gámez";
document.getElementById("texto3").innerHTML="600.00";
document.getElementById("texto").innerHTML=objeto.calcularSalario();
console.log(objeto.calcularSalario());