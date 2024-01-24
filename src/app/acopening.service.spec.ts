import { TestBed } from '@angular/core/testing';

import { AcopeningService } from './acopening.service';

describe('AcopeningService', () => {
  let service: AcopeningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcopeningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
