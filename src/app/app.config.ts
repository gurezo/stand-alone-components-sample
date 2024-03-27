import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withDebugTracing,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';

import routes from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      // 複数のオプションを同時に指定する
      withHashLocation(),
      withDebugTracing(),
      withInMemoryScrolling()
    ),
  ],
};
