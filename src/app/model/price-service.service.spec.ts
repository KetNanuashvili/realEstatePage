import { TestBed } from '@angular/core/testing';

import { PriceService } from './price-service.service';

describe('PriceServiceService', () => {
  let service: PriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
