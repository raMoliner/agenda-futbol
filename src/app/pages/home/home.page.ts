import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartidoService } from 'src/app/services/partido.service';
import { Partido } from 'src/app/models/partido.model';
import { Goleador } from 'src/app/models/goleador.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  partidos: Partido[] = [];
  goleadores: Goleador[] = [];

  constructor(private partidoService: PartidoService, private router: Router) { }

  ngOnInit() {
    this.partidos = this.partidoService.getPartidos();
    this.goleadores = this.partidoService.getGoleadores();
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
}