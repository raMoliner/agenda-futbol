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
  equipoSeleccionado: Equipo | null = null;
  jugadorSeleccionado: Jugador | null = null;
  
/* Esquema para el manejo de datos pero como no estoy conectado 
a una base de datos solo estoy trabajando con datos en el front end para mostrar */ 

  constructor(private equipoService: EquipoService) {}

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
    this.equipoSeleccionado = { ...equipo };
  }

  guardarEdicionEquipo() {
    if (this.equipoSeleccionado) {
      const index = this.equipos.findIndex(e => e.nombre === this.equipoSeleccionado!.nombre);
      if (index !== -1) {
        this.equipos[index] = this.equipoSeleccionado;
        this.equipoService.saveEquipos(this.equipos);
        this.equipoSeleccionado = null;
      }
    }
  }

  eliminarEquipo(equipo: Equipo) {
    this.equipos = this.equipos.filter(e => e !== equipo);
    this.equipoService.saveEquipos(this.equipos);
  }

  anadirJugador() {
    this.equipos[0].titulares.push(this.nuevoJugador); 
    this.jugadores.push(this.nuevoJugador);
    this.nuevoJugador = { nombre: '', apellidoPaterno: '', apellidoMaterno: '', rut: '' };
    this.equipoService.saveEquipos(this.equipos);
  }

  editarJugador(jugador: Jugador) {
    this.jugadorSeleccionado = { ...jugador };
  }

  guardarEdicionJugador() {
    if (this.jugadorSeleccionado) {
      this.equipos.forEach(equipo => {
        const indexTitulares = equipo.titulares.findIndex(j => j.rut === this.jugadorSeleccionado!.rut);
        if (indexTitulares !== -1) {
          equipo.titulares[indexTitulares] = this.jugadorSeleccionado!;
        }
        const indexReservas = equipo.reservas.findIndex(j => j.rut === this.jugadorSeleccionado!.rut);
        if (indexReservas !== -1) {
          equipo.reservas[indexReservas] = this.jugadorSeleccionado!;
        }
      });
      this.equipoService.saveEquipos(this.equipos);
      this.jugadorSeleccionado = null;
    }
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