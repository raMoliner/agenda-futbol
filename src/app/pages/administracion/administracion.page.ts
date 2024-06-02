import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo, Jugador } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {
  equipos: Equipo[] = [];
  jugadores: Jugador[] = [];
  nuevoEquipoNombre: string = '';
  nuevoJugador: Jugador = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    rut: ''
  };

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.equipos = this.equipoService.getEquipos();
    this.jugadores = this.obtenerJugadores(); // Método para obtener jugadores de los equipos
  }

  obtenerJugadores(): Jugador[] {
    let jugadores: Jugador[] = [];
    this.equipos.forEach(equipo => {
      jugadores = jugadores.concat(equipo.titulares, equipo.reservas);
    });
    return jugadores;
  }

  anadirEquipo() {
    const nuevoEquipo: Equipo = {
      nombre: this.nuevoEquipoNombre,
      titulares: [],
      reservas: []
    };
    this.equipos.push(nuevoEquipo);
    this.nuevoEquipoNombre = '';
    this.equipoService.saveEquipos(this.equipos);
  }

  editarEquipo(equipo: Equipo) {
    // Lógica para editar equipo
  }

  eliminarEquipo(equipo: Equipo) {
    this.equipos = this.equipos.filter(e => e !== equipo);
    this.equipoService.saveEquipos(this.equipos);
  }

  anadirJugador() {
    // Añadir jugador al primer equipo por simplicidad
    this.equipos[0].titulares.push(this.nuevoJugador);
    this.jugadores.push(this.nuevoJugador);
    this.nuevoJugador = { nombre: '', apellidoPaterno: '', apellidoMaterno: '', rut: '' };
    this.equipoService.saveEquipos(this.equipos);
  }

  editarJugador(jugador: Jugador) {
    // Lógica para editar jugador
  }

  eliminarJugador(jugador: Jugador) {
    this.equipos.forEach(equipo => {
      equipo.titulares = equipo.titulares.filter(j => j !== jugador);
      equipo.reservas = equipo.reservas.filter(j => j !== jugador);
    });
    this.jugadores = this.jugadores.filter(j => j !== jugador);
    this.equipoService.saveEquipos(this.equipos);
  }
}