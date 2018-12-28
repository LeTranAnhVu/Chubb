import { TestBed } from '@angular/core/testing';

import { HomeabvantagesService } from './homeabvantages.service';

describe('HomeabvantagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeabvantagesService = TestBed.get(HomeabvantagesService);
    expect(service).toBeTruthy();
  });
});
