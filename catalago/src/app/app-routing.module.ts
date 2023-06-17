import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaApisComponent } from './component/lista-apis/lista-apis.component';

const routes: Routes = [
  {path: 'lista-apis', component: ListaApisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
