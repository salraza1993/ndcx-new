import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('@auth/pages/login/login').then(m => m.Login)
  },
  {
    path: 'forget-password',
    loadComponent: () =>
      import('@auth/pages/forget-password/forget-password').then(m => m.ForgetPassword)
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('@auth/pages/reset-password/reset-password').then(m => m.ResetPassword)
  }
];
