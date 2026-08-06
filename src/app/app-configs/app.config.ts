import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutes } from '@core/routes/routes';
import { providePrimeNG } from 'primeng/config';
import { authInterceptor } from '../core/interceptors/auth/auth-interceptor';
import { PRIME_NG_CONFIGS } from './primeNg-configs/primeng-configs';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(AppRoutes),
    provideHttpClient(withXhr(), withInterceptors([authInterceptor])),
    providePrimeNG({ ...PRIME_NG_CONFIGS })
  ]
};
