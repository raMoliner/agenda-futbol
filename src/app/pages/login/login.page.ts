import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  rut: string = '';
  password: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router,
    private alertController: AlertController
  ) {}

  async onLogin() {
    if (this.authService.login(this.rut, this.password)) {
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Credenciales incorrectas.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}