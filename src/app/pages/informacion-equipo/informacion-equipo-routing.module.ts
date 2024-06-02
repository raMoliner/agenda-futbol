import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionEquipoPage } from './informacion-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionEquipoPageRoutingModule {}
