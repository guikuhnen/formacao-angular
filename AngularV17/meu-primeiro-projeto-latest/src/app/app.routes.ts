import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home do Curso',
        component: HomeComponent,
    },
    {
        path: 'sobre',
        title: 'Sobre do Curso',
        component: SobreComponent
    },
    {
        path: 'servicos/:id',
        title: 'Serviços do Curso',
        component: ServicosPrestadosComponent
    },
    {
        path: '**', // Rota coringa
        title: 'Página não encontrada',
        component: NotFoundComponent,
    },
];
