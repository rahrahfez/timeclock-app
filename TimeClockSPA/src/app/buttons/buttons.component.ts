import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '_services/user.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  clockIn() {
    this.userService.submitTime();
  }

  onClick() {
    // this.clockService.getCurrentDateAndTime();
  }

  onViewTimesheet() {
    this.router.navigate(['/timesheet']);
  }

  ngOnDestroy() {

  }
}


