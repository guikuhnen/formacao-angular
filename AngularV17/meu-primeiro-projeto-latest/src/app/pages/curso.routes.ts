import { Routes } from '@angular/router';
import { canActivateGuard } from 'app/guard/can-activate.guard';
import { canDeactivateGuard } from 'app/guard/can-deactivate.guard';

export const cursoRoutes: Routes = [
  {
    path: '',
    title: 'Home do Curso',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'sobre',
    title: 'Sobre do Curso',
    loadComponent: () => import('./sobre/sobre.component'),
    canActivate: [canActivateGuard]
  },
  {
    path: 'servicos/:id',
    title: 'Serviços do Curso',
    loadComponent: () =>
      import('./servicos-prestados/servicos-prestados.component'),
    canDeactivate: [canDeactivateGuard]
  },
];
