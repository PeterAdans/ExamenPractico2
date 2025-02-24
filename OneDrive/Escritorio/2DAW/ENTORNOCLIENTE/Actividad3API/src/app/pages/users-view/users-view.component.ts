import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../interfaces/iuser';
import { BotoneraComponent } from "../../components/botonera/botonera.component";
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-users-view',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.css'
})
export class UsersViewComponent {
  usuarioService = inject(UsuariosService);
  activatedRoute = inject(ActivatedRoute);

  miUsuario!: Iuser;

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) => {
      let _id: string = params._id as string;

      try {
        this.miUsuario = await firstValueFrom(this.usuarioService.getById(_id));
      } catch (err) {
        console.log("Error al llamar a la API: " + err);
      }
    });
  }
}
