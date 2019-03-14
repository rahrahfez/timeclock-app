import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ServerService } from '_services/server.service';
import { ClockService } from '_services/clock.service';
import { Router } from '@angular/router';
import { UserService } from '_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'id': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    // storeTime() actually submits an array of strings for testing purposes.
    const user = this.loginForm.get('id').value;
    // this.userService.addNewUser(user);
    console.log(user);
  }
}
