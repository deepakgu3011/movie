import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path :'', component:HomeComponent},
  {path :'about', component:AboutComponent},
  {path :'contact', component:ContactComponent},
  {path :'privacy', component:PrivacyPolicyComponent},
  { path: '**', component: PageNotFoundComponentComponent },
];
