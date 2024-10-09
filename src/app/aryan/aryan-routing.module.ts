import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaapComponent } from '../baap/baap.component';

const routes: Routes = [
  {
    path:'', component:BaapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AryanRoutingModule { }
