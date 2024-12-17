import {Routes} from '@angular/router';
import {StartComponent} from './components/start/start.component';
import {MainPageComponent} from './components/main-page/main-page.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {
    path: '',
    component: MainPageComponent,

  }
];
