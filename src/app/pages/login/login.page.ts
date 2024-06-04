import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      rut: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.rut, this.loginForm.value.password)
        .subscribe(
          (success) => {
            if (success) {
              this.router.navigate(['/home']);
            } else {
              alert('Error en el inicio de sesión');
            }
          },
          (error) => {
            alert('Error en el inicio de sesión: ' + error.message);
          }
        );
    } else {
      alert('Por favor, complete el formulario correctamente.');
    }
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}