import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-reto4',
  styleUrl: './reto4.css',
  templateUrl: './reto4.html',
})
export class Reto4 {
  // Variable para almacenar el estado actual de la luz
  luz: 'rojo' | 'amarillo' | 'verde' | '' = '';
}
