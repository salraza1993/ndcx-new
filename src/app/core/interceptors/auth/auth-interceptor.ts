import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthServices } from '@auth/services/auth-services';
import { catchError, Observable, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const _auth = inject(AuthServices);
  const accessToken = _auth.getToken();

  // Clone request with auth header if token exists
  const clonedReq = accessToken
    ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${accessToken}`) })
    : req;

  // Handle errors once
  return next(clonedReq).pipe(
    catchError(error => {
      if (error.status === 401) {
        _auth.signOut();
      }
      return throwError(() => error);
    })
  );
};
