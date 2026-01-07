import { Provider } from '@angular/core';

export const AUTHORIZED_LAYOUT_PROVIDERS: Provider[] = [];

export const UNAUTHORIZED_LAYOUT_PROVIDERS: Provider[] = [
  // Services for public/guest users - minimal set
];

export const ERROR_LAYOUT_PROVIDERS: Provider[] = [
  // Minimal services for error pages
];
