import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuarioServices: UsuarioService,
              public router: Router) {}

  canActivate() {
    if (this._usuarioServices.estaLogueado()) {
      console.log('Paso por el loginguard');
      return true;
    } else {
      console.log('Bloqueado por el loginguard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
