import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ FormsModule],
  selector: 'app-reto3',
  styleUrl: './reto3.css',
  templateUrl: './reto3.html',
})
export class Reto3 {

nombre: string = '';
  programa: string = '';
  edad: number | null = null;
  
  estudiantes: { id: number; nombre: string; programa: string; edad: number }[] = [];
  siguienteId = 1;
  mensajeError: string = '';

  registrar() {
    const nombreTrim = this.nombre.trim();
    const programaTrim = this.programa.trim();

    // Validar que no esten vacios y que la edad sea valida (> 0)
    if (!nombreTrim || !programaTrim || this.edad === null || this.edad <= 0) {
      this.mensajeError = 'Por favor, complete todos los campos con datos válidos.';
      return;
    }

    this.mensajeError = '';
    this.estudiantes.push({
      id: this.siguienteId++,
      nombre: nombreTrim,
      programa: programaTrim,
      edad: this.edad
    });

    // Limpiar el formulario
    this.nombre = '';
    this.programa = '';
    this.edad = null;
  }

}
