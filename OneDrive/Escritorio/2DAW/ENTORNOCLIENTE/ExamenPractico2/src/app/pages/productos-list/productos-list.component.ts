import { Component, inject } from '@angular/core';
import { IPrducts } from '../../interfaces/iprducts';
import { Root } from '../../interfaces/root';
import { ProductosService } from '../../services/productos.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-productos-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.css'
})
export class ProductosListComponent {

  private productosService = inject(ProductosService);

  arrProductos: IPrducts[];
  arrRoot: Root [];

  constructor() {
    this.arrProductos = [];
    this.arrRoot = [];
}

ngOnInit() {
  this.cargarProductos(); 

  }

cargarProductos() {

  this.productosService.getAllWithObservables().subscribe((data) => {
  this.arrProductos = data.results;
  });
}














}