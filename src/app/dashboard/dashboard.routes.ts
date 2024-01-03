import { Routes } from '@angular/router';
import { ListUsersPagesComponent } from './pages/list-users-pages/list-users-pages.component';
import { CreateUserPagesComponent } from './pages/create-user-pages/create-user-pages.component';

export const dashboardRoutes: Routes = [
  {
    path: 'create-user',
    title: 'Crear usuario',
    component: CreateUserPagesComponent,
  },
  {
    path: 'user-list',
    title: 'Lista de usuarios',
    component: ListUsersPagesComponent,
  },
  {
    path: '**',
    redirectTo: 'create-user',
  },
];
