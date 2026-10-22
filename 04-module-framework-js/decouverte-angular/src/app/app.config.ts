import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    //withComponentInputBinding() : pour activer la redirection depuis un composant
    provideRouter(routes, withComponentInputBinding()),
  ],
};
