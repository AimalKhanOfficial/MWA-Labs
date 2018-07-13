import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  registerUser(firstNameParam, lastNameParam, emailParam, passWordParam, http) {
    http.post("http://localhost:3000/users/register", {
      firstName: firstNameParam,
      lastName: lastNameParam, 
      email : emailParam,
      password : passWordParam
    })
      .subscribe(
        res => {
          alert(res);
        },
        err => {
          console.log(err);
        }
      );
  }
}
