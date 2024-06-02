import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionJugadorPageRoutingModule } from './informacion-jugador-routing.module';

import { InformacionJugadorPage } from './informacion-jugador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionJugadorPageRoutingModule
  ],
  declarations: [InformacionJugadorPage]
})
export class InformacionJugadorPageModule {}
