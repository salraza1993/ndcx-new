import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthServices } from '@auth/services/auth-services';

export const authGuard: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
): boolean | UrlTree => {
  const _auth = inject(AuthServices);
  const _router = inject(Router);
  const isAuthenticated = _auth.isAuthenticated();
  if (isAuthenticated) {
    return true;
  }

  return _router.createUrlTree(['/login'], {
    queryParams: { returnUrl: _state.url }
  });
};

/**
 * Guard to prevent authenticated users from accessing guest-only pages (like login)
 */
export const guestGuard: CanActivateFn = (): boolean | UrlTree => {
  const _auth = inject(AuthServices);
  const router = inject(Router);

  if (!_auth.isAuthenticated()) {
    return true;
  }

  // Redirect authenticated users to dashboard
  return router.createUrlTree(['/dashboard']);
};
