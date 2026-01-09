import { Routes } from '@angular/router';
import { authGuard, guestGuard } from '@guards/auth/auth-guard';
import { PageLayoutEnum } from '@layouts/enums/PageLayoutEnum';
import { setLayout } from '@layouts/layout-resolver';

// Import the core routes that contain all application routing logic
export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./authorized-routes').then(authorized => authorized.AUTHORIZED_ROUTES),
    resolve: { layout: setLayout(PageLayoutEnum.Authorized) }
  },
  {
    path: '',
    canActivate: [guestGuard],
    resolve: { layout: setLayout(PageLayoutEnum.UnAuthorized) },
    loadChildren: () => import('./auth-routes').then(auth => auth.AUTH_ROUTES)
  },
  // Error route
  {
    path: '**',
    loadChildren: () => import('./error.route').then(error => error.ERROR_ROUTES),
    resolve: { layout: setLayout(PageLayoutEnum.Error) }
  }
];
