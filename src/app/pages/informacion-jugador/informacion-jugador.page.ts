import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goleador } from 'src/app/models/goleador.model';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-informacion-jugador',
  templateUrl: './informacion-jugador.page.html',
  styleUrls: ['./informacion-jugador.page.scss'],
})
export class InformacionJugadorPage implements OnInit {
  jugador: Goleador | undefined;

  constructor(
    private route: ActivatedRoute,
    private partidoService: PartidoService
  ) { }

  ngOnInit() {
    const rut = this.route.snapshot.paramMap.get('rut');
    this.jugador = this.partidoService.getGoleadores().find(j => j.rut === rut);
  }
}