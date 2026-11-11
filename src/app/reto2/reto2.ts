import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-reto2',
  styleUrl: './reto2.css',
  templateUrl: './reto2.html',
})
export class Reto2 {
    productos = [
    { id: 1, nombre: 'Mouse Inalambrico', categoria: 'Perifericos', precio: 45000 },
    { id: 2, nombre: 'Teclado Mecanico RGB', categoria: 'Perifericos', precio: 135000 },
    { id: 3, nombre: 'Audifonos', categoria: 'Audio', precio: 90000 },
    { id: 4, nombre: 'Monitor 24"', categoria: 'Pantallas', precio: 480000 },
    { id: 5, nombre: 'Alfombrilla Mouse Pad XL', categoria: 'Accesorios', precio: 35000 }
  ];
}
