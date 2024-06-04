import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apellidoPaterno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apellidoMaterno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      rut: ['', [Validators.required, Validators.pattern(/^\d{1,8}-[\dkK]$/)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registroForm.valid) {
      this.authService.register(this.registroForm.value).subscribe(
        (success) => {
          if (success) {
            this.router.navigate(['/login']);
          } else {
            alert('Error en el registro');
          }
        },
        (error) => {
          alert('Error en el registro: ' + error.message);
        }
      );
    } else {
      alert('Por favor, complete el formulario correctamente.');
    }
  }
}