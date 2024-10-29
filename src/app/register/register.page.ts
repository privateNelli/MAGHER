import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario = {

      nombre:"",
      apellido:"",
      correo:"",
      rut:"",
      telefono:"",
      contrasena:"",
      contrasena2:"",

  }

  constructor(private nCtrl: NavController) { }

  ngOnInit() {
  }


  sendToProfile(){
    
    let nExtras: NavigationExtras = {
      queryParams:{
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        correo: this.usuario.correo,
        rut: this.usuario.rut,
        telefono: this.usuario.telefono,
        contrasena: this.usuario.contrasena,
        contrasena2: this.usuario.contrasena2
      }
    }

    this.nCtrl.navigateForward(['/profile'], nExtras);

  }

}
