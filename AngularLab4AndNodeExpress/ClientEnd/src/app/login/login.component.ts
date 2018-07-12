import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private http: HttpClient, private router: Router) {
    this.myForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required]
    });

    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onSubmit() {
    this.loginService.loginUser(this.myForm.value.email, this.myForm.value.password, this.http, this.router);
  }

  ngOnInit() {
  }
}
