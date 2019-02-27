import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    'userId': new FormControl(''),
    'userPw': new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.router.navigate(['buttons']);
  }

}
