/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppService } from './app.service';

describe('Service: App', () => {
  beforeEach(() => {
    addProviders([AppService]);
  });

  it('should ...',
    inject([AppService],
      (service: AppService) => {
        expect(service).toBeTruthy();
      }));
});
