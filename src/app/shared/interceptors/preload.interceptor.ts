import { HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';

// export const preloadInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader-service.service';

export const PreloadInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const loaderService = inject(LoaderService);

  loaderService.showLoader(); //activa el spinner
  return next(req).pipe(
    finalize(() => {
      setTimeout(() => {
        loaderService.hideLoader(); //desactiva el spinner
      }, 1000);
    })
  );
};
