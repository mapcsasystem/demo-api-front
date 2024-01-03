import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Redistro',
    loadComponent: () =>
      import('./auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
