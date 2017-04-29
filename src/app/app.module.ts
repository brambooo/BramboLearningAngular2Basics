import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // used for two-way model binding

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
