import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { IPrducts } from '../../interfaces/iprducts';
import { firstValueFrom } from 'rxjs';
import { BotoneraComponent } from "../../components/botonera/botonera.component";

@Component({
  selector: 'app-productos-view',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './productos-view.component.html',
  styleUrl: './productos-view.component.css'
})
export class ProductosViewComponent {
  productoService = inject(ProductosService);
  activatedRoute = inject(ActivatedRoute);

  miProducto!: IPrducts;

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) => {
      let _id: string = params._id as string;

      try {
        this.miProducto = await firstValueFrom(this.productoService.getById(_id));
      } catch (err) {
        console.log("Error al llamar a la API: " + err);
      }
    });
  }
}


