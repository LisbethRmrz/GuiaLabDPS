import { Component, OnInit } from '@angular/core';

import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  gasolina;
  opcionSeleccionado: string ;
  valorgaso:number;
  valorapagar:number;
  constructor() { }

  ngOnInit(){
this.gasolina = ["Regular","Especial","Diesel"];
this.opcionSeleccionado="Selecciona";
this.valorgaso=0;
this.valorapagar=0;
  }

  capturar() {
    switch(this.opcionSeleccionado){
    case'Regular':
    this.valorapagar=this.valorgaso* 4.05;
    break;
    case'Especial':
    this.valorapagar=this.valorgaso*4.25;
    break;
    case'Diesel':
    this.valorapagar=this.valorgaso*3.96;
    break;
    }
    }

}
