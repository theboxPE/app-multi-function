import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  constructor() { }

  num1: number = 0;
  resultado: string = "";

  traducir() {
    if (this.num1 > 1000) {
      this.resultado = "El profesor dijo que era hasta el 1000";
    } else {
      this.resultado = this.convertirNumeroALetras(this.num1);
    }
  }

  convertirNumeroALetras(numero: number): string {
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  
    if (numero === 0) {
      return 'cero';
    }
  
    if (numero < 10) {
      return unidades[numero];
    }
  
    if (numero < 16) {
      return especiales[numero - 10];
    }
  
    if (numero < 20) {
      return `dieci${unidades[numero - 10]}`;
    }
  
    if (numero < 100) {
      const decena = Math.floor(numero / 10);
      const unidad = numero % 10;
      if (unidad === 0) {
        return decenas[decena];
      } else {
        return `${decenas[decena]} y ${unidades[unidad]}`;
      }
    }
  
    if (numero === 100) {
      return 'cien';
    }
  
    if (numero < 1000) {
      const centena = Math.floor(numero / 100);
      const resto = numero % 100;
      if (resto === 0) {
        return centenas[centena];
      } else {
        return `${centenas[centena]} ${this.convertirNumeroALetras(resto)}`;
      }
    }
  
    return 'mil'; 
  }

  ngOnInit() {
  }

}
