import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  login(): void {
    // Will now authenticate using the service to verify user. Once validated, will reroute to buttons page.
    const email = this.loginForm.get('email').value;
    const pw = this.loginForm.get('password').value;
    this.authService.signinUser(email, pw);
    if(this.authService.isAuthenticated()) {
      this.route.navigate(["/home"]);
    }
  }

  // addNewUser() {
  //   const email = this.loginForm.get('email').value;
  //   const pw = this.loginForm.get('password').value;
  //   this.authService.signupUser(email, pw);
  // }
}
