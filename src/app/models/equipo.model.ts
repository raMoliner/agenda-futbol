export interface Jugador {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    rut: string;
  }
  
  export interface Equipo {
    nombre: string;
    titulares: Jugador[];
    reservas: Jugador[];
  }