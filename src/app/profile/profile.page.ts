import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usuario = {

    nombre:"",
    apellido:"",
    correo:"",
    rut:"",
    telefono:"",
    contrasena:"",
    contrasena2:"",

}

  constructor(private aRoute: ActivatedRoute) { }

  ngOnInit() {

    this.aRoute.queryParams.subscribe(params => {
      this.usuario.nombre = params['nombre']
      this.usuario.apellido = params['apellido']
      this.usuario.correo = params['correo']
      this.usuario.rut = params['rut']
      this.usuario.telefono = params['telefono']
      this.usuario.contrasena = params['contrasena']
      this.usuario.contrasena2 = params['contrasena2']
    });

  }

}
