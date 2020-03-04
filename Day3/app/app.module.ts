import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';
import { BusinessComponent } from './business/business.component';
import { PersonalComponent } from './profile/personal/personal.component';
import { ClientsComponent } from './clients/clients.component';
import {HttpClientModule} from '@angular/common/http';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CatalogComponent,
    ProfileComponent,
    BusinessComponent,
    PersonalComponent,
    ClientsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
