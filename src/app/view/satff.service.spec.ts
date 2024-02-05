import { TestBed } from '@angular/core/testing';

import { SatffService } from './satff.service';

describe('SatffService', () => {
  let service: SatffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
