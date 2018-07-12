import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginUser(emailParam, passWordParam, http, router) {
    http.post("http://localhost:3000/users/login", {
      email: emailParam,
      password: passWordParam
    })
      .subscribe(
        res => {
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(res.token);
          console.log("Decoded Token", decodedToken);

          if (res.auth) {
            localStorage.setItem("jwtToken", res.token);
            console.log(res.token);
            router.navigate(["main"]);
          }
          else {
            alert("User Does not Exist!");
            localStorage.clear();
          }

          // Other functions
          const expirationDate = helper.getTokenExpirationDate(res.token);
          const isExpired = helper.isTokenExpired(res.token);
          console.log("expirationDate", expirationDate);
          console.log("isExpired", isExpired);
        },
        err => {
          console.log(err);
        }
      );
  }
}
