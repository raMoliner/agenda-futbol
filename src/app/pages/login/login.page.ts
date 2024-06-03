import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  rut: string = '';
  password: string ='';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.rut, this.password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Error al iniciar sesión');
    }
  }
}