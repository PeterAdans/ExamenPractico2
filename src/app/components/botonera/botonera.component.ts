import { Component, inject, Input } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  productosService = inject(ProductosService);
  router = inject(Router);

  @Input() _id: string;
  @Input() parent: string;


  constructor() {
    this._id = "";
    this.parent = "";
    
  }

}
