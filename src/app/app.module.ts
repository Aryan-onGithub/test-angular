import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaasComponent } from './saas/saas.component';
import { BahuComponent } from './bahu/bahu.component';
import { AryanModule } from './aryan/aryan.module';
import { TestComponent } from './test/test.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RoutingComponent } from './routing/routing.component';
import { AComponent } from './routing/a/a.component';
import { BComponent } from './routing/b/b.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SaasComponent,
    BahuComponent,
    TestComponent,
    FormControlComponent,
    RoutingComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AryanModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule

  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
