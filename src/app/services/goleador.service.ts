import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goleador } from '../models/goleador.model';

@Injectable({
  providedIn: 'root'
})
export class GoleadorService {
  private goleadores: Goleador[] = [
    { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', rut: '11111111-1', goles: 5 },
    { nombre: 'Pedro', apellidoPaterno: 'Martínez', apellidoMaterno: 'López', rut: '22222222-2', goles: 3 },
    // Añade más goleadores
  ];

  constructor() {}

  getGoleadores(): Observable<Goleador[]> {
    return of(this.goleadores);
  }
}