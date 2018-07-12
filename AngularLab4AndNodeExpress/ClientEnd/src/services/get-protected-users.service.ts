import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GetProtectedUsersService {

  constructor() { }

  loginUser(http) {
    http.post("http://localhost:3000/users/protected")
      .subscribe(
        res => {
          alert(res);
        },
        err => {
          alert(err);
        }
      );
  }
}
