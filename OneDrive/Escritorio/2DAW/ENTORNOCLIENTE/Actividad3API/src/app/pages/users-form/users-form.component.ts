import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../../interfaces/iuser';
import { Root } from '../../interfaces/root';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {


  router = inject(Router);
  usuariosService = inject(UsuariosService);
  activatedRoute = inject(ActivatedRoute);

  usersForm: FormGroup;
  tipo: string = "Nuevo Usuario";
  _id: string = ""; //guardamos el ID del usuario para actualizarlo
  updateForm: boolean = false;

  constructor() {

    this.usersForm = new FormGroup({
      _id: new FormControl(''),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      image: new FormControl('', [Validators.required])

    },
      []);
  }

  ngOnInit() : void {
    this.activatedRoute.params.subscribe(params  => {
      const userResponse = params['_id']; //obtenemos el id de la url


      if (userResponse) {
        this.tipo = "Actualizar Usuario";
        this._id = userResponse;
        this.updateForm = true; //modo actualizacion

        //peticion al servicio getById para obtener datos del usuario
        this.usuariosService.getById(userResponse).subscribe((data) => {
          console.log("Cargando usuario:", data);


              //primero, usamos pathValue para llenar los datos del formulario
          this.usersForm.patchValue(data);

             //segundo, sobreescribimos el fromgroup cpn el nuevo objeto

          this.usersForm = new FormGroup({
            _id: new FormControl(data._id, []),
            first_name: new FormControl(data.first_name, [Validators.required]),
            last_name: new FormControl(data.last_name, [Validators.required]),
            email: new FormControl(data.email, [Validators.required, Validators.email]),
            image: new FormControl(data.image, [Validators.required])
      
          }, []);
        });
      }else {
        this.tipo = "Nuevo Usuario";
        this.updateForm = false; //modo creacion
      }
      
    });
}

//implementar llamadas al post y put del servicio
getDataForm() {
  const user: Iuser = this.usersForm.value; // Obtener datos del formulario

  if (this.tipo === "Nuevo Usuario") { // Si es un nuevo usuario, hacemos un POST
      this.usuariosService.insert(user).subscribe((response) => {
          alert(`Usuario "${response.first_name} ${response.last_name}" creado correctamente.`);
          console.log("Nuevo usuario creado:", response);
          this.router.navigate(['/users']); // Redirige al listado de usuarios
      });

      // 🔹 Esto es solo para la prueba en consola, NO se guarda realmente en la API
      this.usersForm.patchValue({ _id: "asdasdadsd" });

  } else { // Si es una actualización, hacemos un PUT
      user._id = this._id; // Asegurar que tenga el ID correcto antes de enviarlo

      this.usuariosService.update(user).subscribe((response) => {
          alert(`Usuario "${response.first_name} ${response.last_name}" actualizado correctamente.`);
          console.log("Usuario actualizado:", response);
          this.router.navigate(['/users']); // Redirige al listado de usuarios
      });

      // 🔹 Esto es solo para la prueba en consola, NO se guarda realmente en la API
      this.usersForm.patchValue({ _id: this._id });
  }
}
  










}