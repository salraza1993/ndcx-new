import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

interface AsideMenuItem {
  label: string;
  icon: string;
  class?: string;
  route: string;
}

@Component({
  selector: 'app-aside-menu',
  imports: [RouterModule, RouterLink],
  templateUrl: './aside-menu.html',
  styleUrl: './aside-menu.css',
  host: {
    class: 'aside-menu flex flex-col gap-2'
  }
})
export class AsideMenu {
  protected readonly asideMenu = signal<AsideMenuItem[]>([
    {
      label: 'Dashboard',
      icon: 'fa-regular fa-gauge-high',
      route: '/dashboard'
    },
    {
      label: 'Search',
      icon: 'fa-regular fa-magnifying-glass',
      route: '/search'
    },
    {
      label: 'Bookings',
      icon: 'fa-regular fa-list',
      route: '/bookings'
    },
    {
      label: 'Reports',
      icon: 'fa-regular fa-pie-chart',
      route: '/reports'
    },
    {
      label: 'Offers & Promotions',
      icon: 'fa-regular fa-bullhorn',
      route: '/offers'
    },
    {
      label: 'Admin Panel',
      icon: 'fa-regular fa-user-gear',
      route: '/admin',
      class: 'admin-panel-link'
    }
  ]);
}
