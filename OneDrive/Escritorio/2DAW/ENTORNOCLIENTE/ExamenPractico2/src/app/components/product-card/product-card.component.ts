import { Component, Input } from '@angular/core';
import { IPrducts } from '../../interfaces/iprducts';
import { BotoneraComponent } from "../botonera/botonera.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() miProducto!: IPrducts;

}
