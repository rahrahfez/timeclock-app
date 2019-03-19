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

  onSubmit(): void {
    // Will now authenticate using the service to verify user. Once validated, will reroute to buttons page.
    const email = this.loginForm.get('email').value;
    const pw = this.loginForm.get('password').value;
    this.authService.signinUser(email, pw);
    this.route.navigate(["/home"]);
  }

  addNewUser() {
    // Will test sending data(User) to database. Will use UserService to send form info to database.
    const email = this.loginForm.get('email').value;
    const pw = this.loginForm.get('password').value;
    this.authService.signupUser(email, pw);
  }
}
