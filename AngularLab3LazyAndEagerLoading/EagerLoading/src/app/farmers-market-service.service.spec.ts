import { TestBed, inject } from '@angular/core/testing';

import { FarmersMarketServiceService } from './farmers-market-service.service';

describe('FarmersMarketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmersMarketServiceService]
    });
  });

  it('should be created', inject([FarmersMarketServiceService], (service: FarmersMarketServiceService) => {
    expect(service).toBeTruthy();
  }));
});
