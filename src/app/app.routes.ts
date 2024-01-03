import { Routes } from '@angular/router';
import { dashboardRoutes } from './dashboard/dashboard.routes';

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
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((r) => r.dashboardRoutes),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
