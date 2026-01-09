import { Routes } from '@angular/router';
import { AUTHORIZED_ROUTE_CONFIG } from './route-configs';
// import { AUTHORIZED_LAYOUT_PROVIDERS } from '@layouts/layout-providers';

export const AUTHORIZED_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/dashboard/dashboard').then(m => m.Dashboard),
    ...AUTHORIZED_ROUTE_CONFIG
  },
  {
    path: 'dashboard',
    loadComponent: () => import('@pages/dashboard/dashboard').then(m => m.Dashboard),
    ...AUTHORIZED_ROUTE_CONFIG
  },
  {
    path: 'search',
    loadComponent: () => import('@pages/search/search').then(m => m.Search),
    ...AUTHORIZED_ROUTE_CONFIG
  },
  {
    path: 'bookings',
    loadComponent: () => import('@pages/bookings/bookings').then(m => m.Bookings),
    ...AUTHORIZED_ROUTE_CONFIG
  },
  {
    path: 'reports',
    loadComponent: () => import('@pages/reports/reports').then(m => m.Reports),
    ...AUTHORIZED_ROUTE_CONFIG
  },
  {
    path: 'offers',
    loadComponent: () => import('@pages/offers/offers').then(m => m.Offers),
    ...AUTHORIZED_ROUTE_CONFIG
  }
];
