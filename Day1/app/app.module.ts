import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    //components,Directives,Pipes
    AppComponent,
    MarksheetComponent,
    SearchComponent,
    DetailsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
