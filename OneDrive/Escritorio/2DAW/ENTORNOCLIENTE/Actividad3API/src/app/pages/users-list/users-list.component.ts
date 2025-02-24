import { Component, inject } from '@angular/core';
import { Iuser } from '../../interfaces/iuser';
import { UsuariosService } from '../../services/usuarios.service';
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { lastValueFrom } from 'rxjs';
import { Root } from '../../interfaces/root';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  private usuarioService = inject(UsuariosService);

  arrUsuarios: Iuser[];
  arrRoot: Root [];


  constructor() {
    this.arrUsuarios = [];
    this.arrRoot = [];
  }

  ngOnInit() {
    this.cargarUsuarios(); 

    }

   cargarUsuarios() {

    this.usuarioService.getAllWithObservables().subscribe((data) => {
    this.arrUsuarios = data.results;
    });
  }  
  



  }



      

  

