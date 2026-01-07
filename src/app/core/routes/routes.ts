import { Routes } from '@angular/router';
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
    loadChildren: () =>
      import('@app/core/routes/authorized-routes').then(dashboard => dashboard.AUTHORIZED_ROUTES),
    resolve: { layout: setLayout(PageLayoutEnum.Authorized) }
  },
  {
    path: '',
    resolve: { layout: setLayout(PageLayoutEnum.UnAuthorized) },
    loadChildren: () => import('@core/routes/auth-routes').then(auth => auth.AUTH_ROUTES)
  },
  // Error route
  {
    path: '**',
    loadChildren: () => import('@core/routes/error.route').then(error => error.ERROR_ROUTES),
    resolve: { layout: setLayout(PageLayoutEnum.Error) }
  }
];
