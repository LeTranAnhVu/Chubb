import { TestBed } from '@angular/core/testing';

import { StoreFormDataService } from './store-form-data.service';

describe('StoreFormDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreFormDataService = TestBed.get(StoreFormDataService);
    expect(service).toBeTruthy();
  });
});
