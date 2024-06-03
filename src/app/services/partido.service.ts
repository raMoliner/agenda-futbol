import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Partido } from '../models/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private partidos: Partido[] = [
    { equipo1: 'Equipo 1', equipo2: 'Equipo 2', fecha: new Date(), hora: '10:00' },
    { equipo1: 'Equipo 3', equipo2: 'Equipo 4', fecha: new Date(), hora: '12:00' },
    // Añade más partidos
  ];

  constructor() {}

  getPartidos(): Observable<Partido[]> {
    return of(this.partidos);
  }
}