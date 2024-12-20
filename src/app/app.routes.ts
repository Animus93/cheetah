import {Routes} from '@angular/router';
import {StartComponent} from './components/start/start.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {
    path: '',
    component: MainPageComponent,
  },

  {
    path: 'login',
    component: AuthorizationComponent,
  }
];
