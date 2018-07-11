import { TestBed, async, inject } from '@angular/core/testing';

import { CheckFarmParamGuard } from './check-farm-param.guard';

describe('CheckFarmParamGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckFarmParamGuard]
    });
  });

  it('should ...', inject([CheckFarmParamGuard], (guard: CheckFarmParamGuard) => {
    expect(guard).toBeTruthy();
  }));
});
