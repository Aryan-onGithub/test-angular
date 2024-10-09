import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AryanRoutingModule } from './aryan-routing.module';
import { BaapComponent } from '../baap/baap.component';
import { BetaComponent } from '../beta/beta.component';



@NgModule({
  declarations: [
     BaapComponent,
    BetaComponent
  ],
  imports: [
    CommonModule,
    AryanRoutingModule,
  ],
  exports: [
    BaapComponent,
    BetaComponent
  ]
})
export class AryanModule { }
