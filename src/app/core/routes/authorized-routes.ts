import { Routes } from '@angular/router';
import { ADMIN_ROUTE_CONFIG, AUTHORIZED_ROUTE_CONFIG } from './route-configs';
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
  },
  {
    path: 'notifications',
    loadComponent: () => import('@pages/notifications/notifications').then(m => m.Notifications),
    ...AUTHORIZED_ROUTE_CONFIG
  },
  {
    path: 'wallet',
    loadComponent: () => import('@pages/wallet/wallet').then(m => m.Wallet),
    ...AUTHORIZED_ROUTE_CONFIG,
    children: [
      {
        path: 'recharge',
        loadComponent: () => import('@pages/wallet/recharge/recharge').then(m => m.Recharge)
      },
      {
        path: 'activities',
        loadComponent: () => import('@pages/wallet/activities/activities').then(m => m.Activities)
      },
      {
        path: 'activities/:id',
        loadComponent: () => import('@pages/wallet/details/details').then(m => m.Details)
      }
    ]
  },

  {
    path: 'my-profile',
    loadComponent: () => import('@pages/profile/profile').then(m => m.Profile),
    ...AUTHORIZED_ROUTE_CONFIG,
    children: [
      {
        path: 'update-password',
        loadComponent: () =>
          import('@pages/profile/change-password/change-password').then(m => m.ChangePassword),
        ...AUTHORIZED_ROUTE_CONFIG
      },
      {
        path: 'settings',
        loadComponent: () => import('@pages/profile/settings/settings').then(m => m.Settings),
        ...AUTHORIZED_ROUTE_CONFIG
      }
    ]
  },

  // admin routes
  {
    path: 'admin',
    loadComponent: () => import('@pages/admin/admin').then(m => m.Admin),
    ...ADMIN_ROUTE_CONFIG
  }
];
