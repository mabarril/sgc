import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ListaMembros } from './pages/lista-membros/lista-membros';
import { CadastroMembro } from './pages/cadastro-membro/cadastro-membro';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'lista-membros', loadComponent: () => Promise.resolve(ListaMembros) },
    { path: 'membro', loadComponent: () => Promise.resolve(CadastroMembro) },
];
