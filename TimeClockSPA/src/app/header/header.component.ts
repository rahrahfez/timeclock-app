import { Component, OnInit } from '@angular/core';
import { AuthService } from '_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit() {

  }

  signOut() {
    this.authService.signout();
  }
}
