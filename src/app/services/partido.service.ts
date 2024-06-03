import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Partido } from '../models/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private partidos: Partido[] = [
    { equipo1: 'Equipo 1', equipo2: 'Equipo 2', fecha: new Date().toLocaleDateString(), hora: '10:00' },
    { equipo1: 'Equipo 3', equipo2: 'Equipo 4', fecha: new Date().toLocaleDateString(), hora: '12:00' },
    { equipo1: 'Equipo 5', equipo2: 'Equipo 6', fecha: new Date().toLocaleDateString(), hora: '16:00' },
    { equipo1: 'Equipo 7', equipo2: 'Equipo 8', fecha: new Date().toLocaleDateString(), hora: '18:00' },
    { equipo1: 'Equipo 9', equipo2: 'Equipo 10', fecha: new Date().toLocaleDateString(), hora: '20:00' },
    { equipo1: 'Equipo 11', equipo2: 'Equipo 12', fecha: new Date().toLocaleDateString(), hora: '22:00' }
  ];

  constructor() {}

  getPartidos(): Observable<Partido[]> {
    return of(this.partidos);
  }
}