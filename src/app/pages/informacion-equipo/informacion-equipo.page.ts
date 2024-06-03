import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-informacion-equipo',
  templateUrl: './informacion-equipo.page.html',
  styleUrls: ['./informacion-equipo.page.scss'],
})
export class InformacionEquipoPage implements OnInit {
  equipo: Equipo | undefined;

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.equipo = this.equipoService.getEquipo('Equipo 1'); 
  }
}