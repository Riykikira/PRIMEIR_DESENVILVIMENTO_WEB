import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/inicio/home.component';
import { AuthComponent } from './paginas/autenticacao/auth.component';
import { NotFoundComponent } from './paginas/nao-encontrado/not-found.component';
import { LogadoComponent } from './components/logado/logado.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';


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
    path: 'catalogo',
    component: CatalogoComponent,
    title: 'Catálogo de Produtos - Interblock'
  },
  {
 
    path: 'logado',
    component: LogadoComponent,
    title: 'Painel Administrativo - Interblock'
  },
  {
    
    path: '**',
    component: NotFoundComponent,
    title: '404 - Página não encontrada'
  }
];
