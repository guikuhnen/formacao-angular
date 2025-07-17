import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, shareReplay, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  // Sobrescreve o cabeçalho de todas as requisições
  const headers = new HttpHeaders().set('x-test-header-interceptor', 'test-value');
  const clonedReq = req.clone({ headers });
  
  //return next(req).pipe(
  return next(clonedReq).pipe(
    shareReplay(),
    retry({ count: 2, delay: 1000 }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        console.log('Sem internet!');
      }

      return throwError(() => error);
    })
  );
};
