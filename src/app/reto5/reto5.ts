import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-reto5',
  styleUrl: './reto5.css',
  templateUrl: './reto5.html',
})
export class Reto5 {

  nombre: string = '';
  cantidad: number | null = null;
  precio: number | null = null;

  productos: { id: number; nombre: string; cantidad: number; precio: number }[] = [];
  siguienteId = 1;
  mensajeError: string = '';

  agregarProducto() {
    if (!this.nombre.trim() || this.cantidad === null || this.precio === null || this.cantidad < 0 || this.precio < 0) {
      this.mensajeError = 'Por favor, complete todos los campos correctamente. No se permiten cantidades o precios negativos.';
      return;
    }

    this.mensajeError = '';
    this.productos.push({
      id: this.siguienteId++,
      nombre: this.nombre.trim(),
      cantidad: this.cantidad,
      precio: this.precio
    });

    this.nombre = '';
    this.cantidad = null;
    this.precio = null;
  }

  eliminar(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }

}
