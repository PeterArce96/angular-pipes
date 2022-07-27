import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesAngularComponent } from './pipes-angular/pipes-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
