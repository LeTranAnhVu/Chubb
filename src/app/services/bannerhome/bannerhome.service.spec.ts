import { TestBed } from '@angular/core/testing';

import { BannerhomeService } from './bannerhome.service';

describe('BannerhomeService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: BannerhomeService = TestBed.get(BannerhomeService);
		expect(service).toBeTruthy();
	});
});
