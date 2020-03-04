import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { BusinessComponent } from './business/business.component';
import { PersonalComponent } from './profile/personal/personal.component';
import { ClientsComponent } from './clients/clients.component';

export const PROFILE_ROUTES:Routes = [
  {path:'business', component:BusinessComponent},
  {path:'personal',component:PersonalComponent}
]

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'search/:pname', component: CatalogComponent},
  {path:'catalog', component: CatalogComponent},
  {path:'cart', component: CartComponent},
  {path:'profile', component: ProfileComponent, children:PROFILE_ROUTES},
  {path:'clients', component: ClientsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
