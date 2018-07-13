import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GetProtectedUsersService {

  constructor() { }

  getUsers(http) {
    http.get("http://localhost:3000/users/protected")
      .subscribe(
        res => {
          console.log(res);
          alert(res);
        },
        err => {
          alert(err);
        }
      );
  }
}
