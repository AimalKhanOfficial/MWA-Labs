import { TestBed, async, inject } from '@angular/core/testing';

import { FarmersDataParamGuard } from './farmers-data-param.guard';

describe('FarmersDataParamGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmersDataParamGuard]
    });
  });

  it('should ...', inject([FarmersDataParamGuard], (guard: FarmersDataParamGuard) => {
    expect(guard).toBeTruthy();
  }));
});
