/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ArtistComponent } from './artist.component';

describe('Component: Artist', () => {
  it('should create an instance', () => {
    let component = new ArtistComponent();
    expect(component).toBeTruthy();
  });
});
