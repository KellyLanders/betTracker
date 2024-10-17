import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-fncc1ruig1rtv6l7.us.auth0.com',
      clientId: 'AEkSboK6eokHv9ZxzZf6pVDdbBI1dREi',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
};
