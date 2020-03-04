import { Routes } from'@angular/router';
import { BusinessComponent } from 'src/app/business/business.component';
import { PersonalComponent } from './personal.component';

export const PROFILE_ROUTES:Routes = [
    {path:'business', component:BusinessComponent},
    {path:'personal', component:PersonalComponent}
  ]
