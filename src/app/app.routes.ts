import {Routes} from '@angular/router';
import {StartComponent} from './components/start/start.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {AdminComponent} from './components/admin/admin.component';
import {OrdersComponent} from './components/admin/orders/orders.component';
import {TrucksComponent} from './components/admin/trucks/trucks.component';
import {ClientsComponent} from './components/admin/clients/clients.component';
import {TariffsComponent} from './components/admin/tariffs/tariffs.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'start'},
  {
    path: 'start',
    component: MainPageComponent,
  },
  {
    path: 'login',
    component: AuthorizationComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'orders'},
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'trucks',
        component: TrucksComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'tariffs',
        component: TariffsComponent,
      },
    ]
  }
];
