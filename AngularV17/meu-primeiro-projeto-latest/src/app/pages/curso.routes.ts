import { Routes } from '@angular/router';

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
  },
  {
    path: 'servicos/:id',
    title: 'Serviços do Curso',
    loadComponent: () =>
      import('./servicos-prestados/servicos-prestados.component'),
  },
];
