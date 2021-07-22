import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1:number=0
  num2:number=0
  res:number=0
  existe:boolean = false

  Sumar(){
    this.res=this.num1+this.num2
    this.existe=true

  }
  
  Restar(){
    this.res=this.num1-this.num2
    this.existe=true
  }

  Multiplicar(){
    this.res=this.num1*this.num2
    this.existe=true
  }

  Dividir(){
    this.res=this.num1/this.num2
    this.existe=true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
