import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/models/partido.model';
import { Goleador } from 'src/app/models/goleador.model';
import { PartidoService } from 'src/app/services/partido.service';
import { AuthService } from 'src/app/services/auth.service';
import { GoleadorService } from 'src/app/services/goleador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  partidos$ = new Observable<Partido[]>;
  goleadores$ = new Observable<Goleador[]>;

  constructor(private partidoService: PartidoService, private goleadorService: GoleadorService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.partidos$ = this.partidoService.getPartidos();
    this.goleadores$ = this.goleadorService.getGoleadores();
  }

  verEquipo(equipo: string) {
    this.router.navigate(['/informacion-equipo', equipo]);
  }

  verJugador(rut: string) {
    this.router.navigate(['/informacion-jugador', rut]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  irAAdministracion() {
    this.router.navigate(['/administracion']);
  }
}