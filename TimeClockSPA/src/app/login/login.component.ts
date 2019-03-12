import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ServerService } from '_services/server.service';
import { ClockService } from '_services/clock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm = new FormGroup({
  //   'userId': new FormControl('')
  //   // 'userPw': new FormControl('')
  // });

  loginForm: FormGroup;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'id': new FormControl('')
    });
  }

  onSubmit() {
    this.serverService.storeTime().subscribe(
      (response) => console.log(response)
    );
  }
}
