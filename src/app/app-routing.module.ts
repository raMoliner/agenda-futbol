import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'administracion', loadChildren: () => import('./pages/administracion/administracion.module').then(m => m.AdministracionPageModule), canActivate: [AuthGuard] },
  { path: 'informacion-equipo/:nombre', loadChildren: () => import('./pages/informacion-equipo/informacion-equipo.module').then(m => m.InformacionEquipoPageModule), canActivate: [AuthGuard] },
  { path: 'informacion-jugador/:rut', loadChildren: () => import('./pages/informacion-jugador/informacion-jugador.module').then(m => m.InformacionJugadorPageModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }