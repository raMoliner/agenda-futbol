import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  rut: string = '';
  password: string = '';
  equipo: string = '';
  equipos: any[];

  constructor(private authService: AuthService, private equipoService: EquipoService, private router: Router) {
    this.equipos = [];
  }

  ngOnInit() {
    this.equipos = this.equipoService.getEquipos();
  }

  onRegister() {
    const user = {
      nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      rut: this.rut,
      password: this.password,
      equipo: this.equipo
    };

    if (this.authService.register(user)) {
      this.router.navigate(['/login']);
    } else {
      alert('Error al registrar el usuario');
    }
  }
}