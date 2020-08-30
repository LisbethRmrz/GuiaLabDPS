import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import {BrowserModule}from '@angular/platform-browser'
@Component({
  selector: 'app-salario-neto',
  templateUrl: './salario-neto.component.html',
  styleUrls: ['./salario-neto.component.css']
})
export class SalarioNetoComponent implements OnInit {
//Creamos variables  variables
registro=[];
trabajador:any;
 nombre:string; 
  salario:number; 
  afp:number;
  isss:number;
  renta:number;
  neto:number;
  contador:number;
  constructor() { }

  ngOnInit() {
    //inicializamos variables
    this.salario=0; this.nombre=''; this.afp=0;this.isss=0;this.renta=0;this.neto=0;this.contador=0;
  }
  ingresar()
  {
    if(this.salario>0)
    {
      this.afp=this.salario*0.051;
      this.isss=this.salario*0.073;
      this.renta=this.salario*0.11;
      this.neto=(this.salario)-(this.afp+this.isss+this.renta);
      this.trabajador={"nombre":this.nombre,"salario":this.salario,"afp":this.afp,"isss":this.isss,"renta":this.renta,"neto":this.neto}; 
      this.registro.push(this.trabajador); 
      this.contador++;
    }
    
  }

}
