import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '_services/user.service';
import { AuthService } from '_services/auth.service';
import { DataStorageService } from '_services/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService, 
              private authService: AuthService,
              private dbService: DataStorageService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    // Will now authenticate using the service to verify user. Once validated, will reroute to buttons page.

  }

  addNewUser() {
    // Will test sending data(User) to database. Will use UserService to send form info to database.
    const id = this.loginForm.get('id').value;
    const pw = this.loginForm.get('password').value;
    this.userService.addNewUserToDatabase(id, pw);
    console.log('id: ' + id + ' pw: ' + pw);
  }
}
