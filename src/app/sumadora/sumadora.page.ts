import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  constructor() { }

  num1: number = 0;
  num2: number = 0;
  resul: string = "";

  sumar(){
    this.resul = (this.num1 + this.num2).toString();
  }

  ngOnInit() {
  }

}
