import { Routes } from '@angular/router';

export const ERROR_ROUTES: Routes = [
  {
    path: '**',
    loadComponent: () => import('@app/error-pages/not-found/not-found').then(m => m.NotFound)
  }
];
