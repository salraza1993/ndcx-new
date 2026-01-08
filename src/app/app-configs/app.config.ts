import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutes } from '@core/routes/routes';
import { providePrimeNG } from 'primeng/config';
import { PRIME_NG_CONFIGS } from './primeNg-configs/primeng-configs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(AppRoutes),
    providePrimeNG({ ...PRIME_NG_CONFIGS })
  ]
};
