import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myRegisterForm: FormGroup;
  emailExists = "";
  passwordsDonotMatch = "";
  constructor(private fb: FormBuilder, private http: HttpClient, private registrationService: RegisterService) {
    this.myRegisterForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'repeatPassword': ['', Validators.compose([Validators.required])]
    }, { validator: this.checkIfMatchingPasswords('password', 'repeatPassword') });

    this.myRegisterForm.get('email').valueChanges.pipe(
      debounceTime(500)
    ).subscribe(s => {
      http.get("http://localhost:3000/users/" + s)
        .subscribe(
          res => {
            if (res == "true") {
              this.emailExists = "Email Already Exists!";
            }
            else {
              this.emailExists = "";
            }
          },
          err => {
            alert(err);
          }
        );
    });
  }

  onSubmit() {
    this.registrationService.registerUser(this.myRegisterForm.value.firstName, this.myRegisterForm.value.lastName, this.myRegisterForm.value.email, this.myRegisterForm.value.password, this.http);
  }

  ngOnInit() {
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        this.passwordsDonotMatch = "Passwords do not match!";
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        this.passwordsDonotMatch = "";
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

}