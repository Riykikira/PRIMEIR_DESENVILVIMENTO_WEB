import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/inicio/home.component';
import { AuthComponent } from './paginas/autenticacao/auth.component';
import { NotFoundComponent } from './paginas/nao-encontrado/not-found.component';
import { LogadoComponent } from './logado/logado.component';

/**
 * ROTAS DO APLICATIVO
 * 
 * Este arquivo configura todas as rotas disponíveis no aplicativo.
 * 
 * Rotas disponíveis:
 * - / → Home (pública)
 * - /auth → Login/Cadastro (pública)
 * - /logado → Dashboard (protegido)
 * - ** → 404 (não encontrado)
 */
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Interblock - Artefatos de Cimento'
  },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Login / Cadastro - Interblock'
  },
  {
    // Rota protegida: requer autenticação
    // Se não autenticado, o componente redireciona para /auth
    path: 'logado',
    component: LogadoComponent,
    title: 'Painel Administrativo - Interblock'
  },
  {
    // Rota wildcard: captura todas as URLs não encontradas
    path: '**',
    component: NotFoundComponent,
    title: '404 - Página não encontrada'
  }
];
