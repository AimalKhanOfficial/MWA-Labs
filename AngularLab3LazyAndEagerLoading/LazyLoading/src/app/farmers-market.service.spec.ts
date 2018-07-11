import { TestBed, inject } from '@angular/core/testing';

import { FarmersMarketService } from './farmers-market.service';

describe('FarmersMarketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmersMarketService]
    });
  });

  it('should be created', inject([FarmersMarketService], (service: FarmersMarketService) => {
    expect(service).toBeTruthy();
  }));
});
