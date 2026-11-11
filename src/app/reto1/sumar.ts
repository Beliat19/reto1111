import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-sumar',
  styleUrl: './sumar.css',
  templateUrl: './sumar.html',
})

export class Sumar {
  // Declaracion de variables permitiendo que sean nulas o numeros
  num1: number | null = null;
  num2: number | null = null;
  resultado: number | null = null;
  mensajeError: string = '';

  // Metodo para validar que los campos tengan valores numericos validos
  private validar(): boolean {
    if (this.num1 === null || this.num2 === null || isNaN(this.num1) || isNaN(this.num2)) {
      this.mensajeError = 'Por favor, ingresa ambos numeros correctamente.';
      this.resultado = null;
      return false;
    }
    this.mensajeError = '';
    return true;
  }

  // Operacion de Suma
  sumar() {
    if (this.validar() && this.num1 !== null && this.num2 !== null) {
      this.resultado = this.num1 + this.num2;
    }
  }

  // Operacion de Resta
  restar() {
    if (this.validar() && this.num1 !== null && this.num2 !== null) {
      this.resultado = this.num1 - this.num2;
    }
  }

}

