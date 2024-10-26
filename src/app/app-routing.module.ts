import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './routing/a/a.component';
import { BComponent } from './routing/b/b.component';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./aryan/aryan.module').then((m) => m.AryanModule)
  },
  {
    path: 'a', component:AComponent
  },
  {
    path:'b123', component:BComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
