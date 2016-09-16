import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent, environment} from './app/';
import {appRouterProviders} from './app/app.routes';
import {provideForms,disableDeprecatedForms} from '@angular/forms'
import {HTTP_PROVIDERS, HTTP_BINDINGS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,
  [
    appRouterProviders,
    provideForms(),
    disableDeprecatedForms(),
    HTTP_PROVIDERS,
    HTTP_BINDINGS
  ]);
