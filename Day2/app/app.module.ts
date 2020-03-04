import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingdemoComponent } from './databindingdemo/databindingdemo.component';
import {FormsModule} from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { HelloAComponent } from './hello-a/hello-a.component';
import { HelloBComponent } from './hello-b/hello-b.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingdemoComponent,
    DirectivesComponent,
    HelloAComponent,
    HelloBComponent,
    TodoComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
