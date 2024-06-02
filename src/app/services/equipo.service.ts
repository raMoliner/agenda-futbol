import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private equipos: Equipo[] = [];

  constructor() {
    this.loadEquipos();
  }

  loadEquipos() {
    const equipos = localStorage.getItem('equipos');
    if (equipos) {
      this.equipos = JSON.parse(equipos);
    }
  }

  saveEquipos(equipos: Equipo[]) {
    localStorage.setItem('equipos', JSON.stringify(equipos));
  }

  getEquipos(): Equipo[] {
    return this.equipos;
  }

  getEquipo(nombre: string): Equipo | undefined {
    return this.equipos.find(e => e.nombre === nombre);
  }
}