import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goleador } from '../models/goleador.model';

@Injectable({
  providedIn: 'root'
})
export class GoleadorService {
  private goleadores: Goleador[] = [
    { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', rut: '11111111-1', goles: 15 },
    { nombre: 'Pedro', apellidoPaterno: 'Rosales', apellidoMaterno: 'Castillo', rut: '20421232-2', goles: 14 },
    { nombre: 'Alejandro', apellidoPaterno: 'Gajardo', apellidoMaterno: 'Barco', rut: '12526222-k', goles: 10 },
    { nombre: 'Pablo', apellidoPaterno: 'Millán', apellidoMaterno: 'Gallardo', rut: '19225422-1', goles: 9 },
    { nombre: 'Diego', apellidoPaterno: 'Galindo', apellidoMaterno: 'Valdebenito', rut: '19242211-2', goles: 5 },
    { nombre: 'Salvador', apellidoPaterno: 'Toledo', apellidoMaterno: 'Ruminot', rut: '20242222-2', goles: 3 },
    
  ];

  constructor() {}

  getGoleadores(): Observable<Goleador[]> {
    return of(this.goleadores);
  }
}