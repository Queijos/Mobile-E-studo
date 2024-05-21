import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    loadChildren: () => import('./curso-japones/curso-japones.module').then( m => m.CursoJaponesPageModule)
  },
  {
    path: 'curso-brasileira',
    loadChildren: () => import('./curso-brasileira/curso-brasileira.module').then( m => m.CursoBrasileiraPageModule)
  },
  {
    path: 'curso-portuguesa',
    loadChildren: () => import('./curso-portuguesa/curso-portuguesa.module').then( m => m.CursoPortuguesaPageModule)
  },  {
    path: 'temaki',
    loadChildren: () => import('./temaki/temaki.module').then( m => m.TemakiPageModule)
  },
  {
    path: 'hot',
    loadChildren: () => import('./hot/hot.module').then( m => m.HotPageModule)
  },
  {
    path: 'sashimi',
    loadChildren: () => import('./sashimi/sashimi.module').then( m => m.SashimiPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
