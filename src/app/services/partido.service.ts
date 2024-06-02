import { Injectable } from '@angular/core';
import { Partido } from '../models/partido.model';
import { Goleador } from '../models/goleador.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private partidos: Partido[] = [];
  private goleadores: Goleador[] = [];

  constructor() {
    // Datos de ejemplo
    this.partidos = [
      { equipo1: 'Equipo 1', equipo2: 'Equipo 2', fecha: new Date(), hora: '10:00' },
      { equipo1: 'Equipo 3', equipo2: 'Equipo 4', fecha: new Date(), hora: '12:00' },
     
    ];

    this.goleadores = [
      { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', rut: '11111111-1', goles: 5 },
      { nombre: 'Pedro', apellidoPaterno: 'Martínez', apellidoMaterno: 'López', rut: '22222222-2', goles: 3 },
      
    ];
  }

  getPartidos(): Partido[] {
    return this.partidos;
  }

  getGoleadores(): Goleador[] {
    return this.goleadores;
  }
}