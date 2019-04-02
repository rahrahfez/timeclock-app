import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

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
  
    setTimeout(() => {
      console.log(this.authService.getCurrentUserProfile()),
      this.router.navigate(['/home'], { relativeTo: this.route })
    }, 1000);
  }

  // addNewUser() {
  //   const email = this.loginForm.get('email').value;
  //   const pw = this.loginForm.get('password').value;
  //   this.authService.signupUser(email, pw);
  // }
}
