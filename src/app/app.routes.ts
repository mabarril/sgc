import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ListaMembros } from './pages/lista-membros/lista-membros';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'lista-membros', loadComponent: () => Promise.resolve(ListaMembros) },
];
