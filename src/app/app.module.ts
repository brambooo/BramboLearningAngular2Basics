import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // used for two-way model binding
import {MemberDetailComponent} from './member-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
  ],
  // Declarations array contains a list of application components, pipes and directives that belong to the module
  declarations: [
      AppComponent,
      MemberDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
