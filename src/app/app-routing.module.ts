import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagina/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pagina/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'homelogado',
    loadChildren: () => import('./pagina/homelogado/homelogado.module').then( m => m.HomelogadoPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagina/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pagina/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'curso-japones',
    loadChildren: () => import('./pagina/cursos/curso-japones/curso-japones.module').then( m => m.CursoJaponesPageModule)
  },
  {
    path: 'curso-brasileira',
    loadChildren: () => import('./pagina/cursos/curso-brasileira/curso-brasileira.module').then( m => m.CursoBrasileiraPageModule)
  },
  {
    path: 'temaki',
    loadChildren: () => import('./pagina/cursos/curso-japones/temaki/temaki.module').then( m => m.TemakiPageModule)
  },
  {
    path: 'hot',
    loadChildren: () => import('./pagina/cursos/curso-japones/hot/hot.module').then( m => m.HotPageModule)
  },
  {
    path: 'sashimi',
    loadChildren: () => import('./pagina/cursos/curso-japones/sashimi/sashimi.module').then( m => m.SashimiPageModule)
  },
  {
  path: 'feijoada',
  loadChildren: () => import('./pagina/cursos/curso-brasileira/feijoada/feijoada.module').then( m => m.FeijoadaPageModule)
},
{
  path: 'pato',
  loadChildren: () => import('./pagina/cursos/curso-brasileira/pato/pato.module').then( m => m.PatoPageModule)
},
{
  path: 'tropeiro',
  loadChildren: () => import('./pagina/cursos/curso-brasileira/tropeiro/tropeiro.module').then( m => m.TropeiroPageModule)
},

  






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}