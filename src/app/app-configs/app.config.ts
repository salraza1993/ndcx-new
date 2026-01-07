import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { PRIME_NG_CONFIGS } from './primeNg-configs/primeng-configs';
import { AppRoutes } from '@core/routes/routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(AppRoutes),
    providePrimeNG({...PRIME_NG_CONFIGS}),
  ],
};
