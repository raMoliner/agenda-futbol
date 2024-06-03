import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PartidoService } from 'src/app/services/partido.service';
import { GoleadorService } from 'src/app/services/goleador.service';
import { Partido } from 'src/app/models/partido.model';
import { Goleador } from 'src/app/models/goleador.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  partidos$: Observable<Partido[]>;
  goleadores$: Observable<Goleador[]>;

  constructor(
    private partidoService: PartidoService,
    private goleadorService: GoleadorService,
    private authService: AuthService,
    private router: Router
  ) {
    this.partidos$ = new Observable<Partido[]>(); // Inicialización en el constructor
    this.goleadores$ = new Observable<Goleador[]>(); // Inicialización en el constructor
  }

  ngOnInit() {
    this.partidos$ = this.partidoService.getPartidos();
    this.goleadores$ = this.goleadorService.getGoleadores();
  }

  verEquipo(nombre: string) {
    this.router.navigate(['/informacion-equipo', nombre]);
  }

  verJugador(rut: string) {
    this.router.navigate(['/informacion-jugador', rut]);
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  irAAdministracion() {
    this.router.navigate(['/administracion']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Suponiendo que AuthService tiene un método isLoggedIn
  }
}