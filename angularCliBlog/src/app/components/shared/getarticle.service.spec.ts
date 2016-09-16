/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GetarticleService } from './getarticle.service';

describe('Service: Getarticle', () => {
  beforeEach(() => {
    addProviders([GetarticleService]);
  });

  it('should ...',
    inject([GetarticleService],
      (service: GetarticleService) => {
        expect(service).toBeTruthy();
      }));
});
