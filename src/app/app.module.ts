import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaasComponent } from './saas/saas.component';
import { BahuComponent } from './bahu/bahu.component';
import { AryanModule } from './aryan/aryan.module';


@NgModule({
  declarations: [
    AppComponent,
    SaasComponent,
    BahuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AryanModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
