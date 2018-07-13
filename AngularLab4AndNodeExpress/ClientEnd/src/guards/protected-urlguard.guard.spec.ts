import { TestBed, async, inject } from '@angular/core/testing';

import { ProtectedURLGuardGuard } from './protected-urlguard.guard';

describe('ProtectedURLGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtectedURLGuardGuard]
    });
  });

  it('should ...', inject([ProtectedURLGuardGuard], (guard: ProtectedURLGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
