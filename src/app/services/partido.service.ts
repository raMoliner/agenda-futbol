import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Partido } from '../models/partido.model';
import { Goleador } from '../models/goleador.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private partidos: Partido[] = [
    { equipo1: 'Equipo 1', equipo2: 'Equipo 2', fecha: '2024-06-01', hora: '10:00' },
    { equipo1: 'Equipo 3', equipo2: 'Equipo 4', fecha: '2024-06-02', hora: '12:00' },
    { equipo1: 'Equipo 5', equipo2: 'Equipo 6', fecha: '2024-06-03', hora: '16:00' },
    { equipo1: 'Equipo 7', equipo2: 'Equipo 8', fecha: '2024-06-04', hora: '18:00' },
    { equipo1: 'Equipo 9', equipo2: 'Equipo 10', fecha: '2024-06-05', hora: '20:00' },
    { equipo1: 'Equipo 11', equipo2: 'Equipo 12', fecha: '2024-06-06', hora: '22:00' },
  ];

  private goleadores: Goleador[] = [
    { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', rut: '12345678-9', goles: 5 },
    { nombre: 'Carlos', apellidoPaterno: 'Sánchez', apellidoMaterno: 'Díaz', rut: '98765432-1', goles: 3 },
    { nombre: 'Luis', apellidoPaterno: 'Martínez', apellidoMaterno: 'Lopez', rut: '87654321-2', goles: 4 },
  ];

  getPartidos(): Observable<Partido[]> {
    return of(this.partidos);
  }

  getGoleadores(): Observable<Goleador[]> {
    return of(this.goleadores);
  }
}