import { Routes } from '@angular/router';
import { canActivateChildGuard } from './guard/can-activate-child.guard';
import { canMatchGuard } from './guard/can-match.guard';

export const routes: Routes = [
  // {
  //     path: '',
  //     title: 'Home do Curso',
  //     component: HomeComponent,
  // },
  // {
  //     path: 'sobre',
  //     title: 'Sobre do Curso',
  //     component: SobreComponent
  // },
  // {
  //     path: 'servicos/:id',
  //     title: 'Serviços do Curso',
  //     component: ServicosPrestadosComponent
  // },
  {
    // path: '',
    // children: [
    //   {
    //     path: '',
    //     title: 'Home do Curso',
    //     loadComponent: () => import('./pages/home/home.component'),
    //   },
    //   {
    //     path: 'sobre',
    //     title: 'Sobre do Curso',
    //     loadComponent: () => import('./pages/sobre/sobre.component'),
    //   },
    //   {
    //     path: 'servicos/:id',
    //     title: 'Serviços do Curso',
    //     loadComponent: () => import('./pages/servicos-prestados/servicos-prestados.component'),
    //   },
    // ],
    path: 'curso',
    loadChildren: () => import('./pages/curso.routes').then(r => r.cursoRoutes),
    // canActivateChild: [canActivateChildGuard]
    canMatch: [canMatchGuard] // Retorna diretamente para o not-found
  },
  {
    path: 'dashboard',
    children: [
      {
        path: 'sobre',
        title: 'Sobre do Curso',
        loadComponent: () => import('./pages/sobre/sobre.component'),
      },
    ],
  },
  {
    path: '**', // Rota coringa
    title: 'Página não encontrada',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];
