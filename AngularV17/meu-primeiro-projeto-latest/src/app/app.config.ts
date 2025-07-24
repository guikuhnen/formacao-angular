import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import LocalePt from '@angular/common/locales/pt';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { httpInterceptor } from './interceptor/http.interceptor';
import { provideTranslate } from './app.translate';
registerLocaleData(LocalePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({paramsInheritanceStrategy: 'always'})),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideTranslate(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
