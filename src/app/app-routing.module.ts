import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page',
    loadChildren: () => import('./paises/pais.module').then(m=>m.PaisModule)
  },
  {
    path: '**',
    redirectTo:'page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
