import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionJugadorPage } from './informacion-jugador.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionJugadorPageRoutingModule {}
