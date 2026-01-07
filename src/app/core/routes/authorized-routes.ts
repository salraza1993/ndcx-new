import { Routes } from '@angular/router';
// import { AUTHORIZED_LAYOUT_PROVIDERS } from '@layouts/layout-providers';

export const AUTHORIZED_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('@pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'search',
    loadComponent: () => import('@pages/search/search').then(m => m.Search)
  },
  {
    path: 'bookings',
    loadComponent: () => import('@pages/bookings/bookings').then(m => m.Bookings)
  },
  {
    path: 'reports',
    loadComponent: () => import('@pages/reports/reports').then(m => m.Reports)
  },
  {
    path: 'offers',
    loadComponent: () => import('@pages/offers/offers').then(m => m.Offers)
  }
];
