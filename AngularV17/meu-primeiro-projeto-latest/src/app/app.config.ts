import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  provideImgixLoader,
  registerLocaleData,
} from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import LocalePt from '@angular/common/locales/pt';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { environment } from 'environments/environment';
import { routes } from './app.routes';
import { provideTranslate } from './app.translate';
import { httpInterceptor } from './interceptor/http.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
registerLocaleData(LocalePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideTranslate(),
    // provideImgixLoader(environment.img),
    //{
    //  provide: IMAGE_LOADER,
    //  useValue: (config: ImageLoaderConfig) => {
    //    const img = config.src.split('.');
    //    const name = img.shift();
    //    const width = config.width ? '-' + config.width + 'w' : '';
    //    const type = img.pop();
//
    //    return `${environment.img}${name}${width}.${type}`;
    //  },
    //},
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
