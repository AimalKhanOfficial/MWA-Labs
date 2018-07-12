import { TestBed, inject } from '@angular/core/testing';

import { GetProtectedUsersService } from './get-protected-users.service';

describe('GetProtectedUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetProtectedUsersService]
    });
  });

  it('should be created', inject([GetProtectedUsersService], (service: GetProtectedUsersService) => {
    expect(service).toBeTruthy();
  }));
});
