import { TestBed } from '@angular/core/testing';

import { Banner01Service } from './banner01.service';

describe('Banner01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Banner01Service = TestBed.get(Banner01Service);
    expect(service).toBeTruthy();
  });
});
