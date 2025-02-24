import { Component, inject, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router, RouterLink } from '@angular/router';
import { Iuser } from '../../interfaces/iuser';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {


  usuariosService = inject(UsuariosService);
  router = inject(Router);

  @Input() _id: string;
  @Input() parent: string;

  constructor() {
    this._id = "";
    this.parent = "";
  }


  borrarUsers(_id: string) {
    let confirmacion = confirm(' Esta seguro de que quiere eliminar el usuario: '+this._id);

    if (confirmacion) {
      this.usuariosService.delete(_id).subscribe(() => {
      alert("El Usuario ha sido eliminado correctamente.")

       // Mostrar en consola el ID del usuario eliminado
       console.log(`Usuario eliminado correctamente: ID → ${_id}`);



      if(this.parent == 'view') {
        this.router.navigate(['/users'])
      }
      else if(this.parent == "card") {
        location.reload();
      }
      
    },
    (error) => {
      console.error(" Error al eliminar usuario:", error);
      alert("Error al eliminar usuario.");
  });
}
}
}
