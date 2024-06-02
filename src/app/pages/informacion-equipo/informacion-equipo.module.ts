import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionEquipoPageRoutingModule } from './informacion-equipo-routing.module';

import { InformacionEquipoPage } from './informacion-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionEquipoPageRoutingModule
  ],
  declarations: [InformacionEquipoPage]
})
export class InformacionEquipoPageModule {}
