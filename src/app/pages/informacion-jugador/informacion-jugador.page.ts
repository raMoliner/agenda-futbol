import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goleador } from 'src/app/models/goleador.model';
import { GoleadorService } from 'src/app/services/goleador.service';

@Component({
  selector: 'app-informacion-jugador',
  templateUrl: './informacion-jugador.page.html',
  styleUrls: ['./informacion-jugador.page.scss'],
})
export class InformacionJugadorPage implements OnInit {
  jugador: Goleador | undefined;

  constructor(
    private route: ActivatedRoute,
    private goleadorService: GoleadorService
  ) { }

  ngOnInit() {
    const rut = this.route.snapshot.paramMap.get('rut');
    this.goleadorService.getGoleadores().subscribe(goleadores => {
      this.jugador = goleadores.find(j => j.rut === rut);
    });
  }
}