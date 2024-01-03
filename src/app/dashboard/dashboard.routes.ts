import { Routes } from '@angular/router';
import { ListUsersPagesComponent } from './pages/list-users-pages/list-users-pages.component';
import { CreateUserPagesComponent } from './pages/create-user-pages/create-user-pages.component';

export const dashboardRoutes: Routes = [
  {
    path: 'create-user',
    component: CreateUserPagesComponent,
  },
  {
    path: 'user-list',
    component: ListUsersPagesComponent,
  },
  {
    path: '**',
    redirectTo: 'create-user',
  },
];
