import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'informacion-equipo/:nombre',
    loadChildren: () => import('./pages/informacion-equipo/informacion-equipo.module').then( m => m.InformacionEquipoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./pages/administracion/administracion.module').then( m => m.AdministracionPageModule)
  },
  {
    path: 'informacion-jugador/:rut',
    loadChildren: () => import('./pages/informacion-jugador/informacion-jugador.module').then( m => m.InformacionJugadorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }