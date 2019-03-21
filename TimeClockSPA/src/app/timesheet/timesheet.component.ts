import { Component, OnInit } from '@angular/core';

import { User } from '_models/user.model';
import { UserService } from '_services/user.service';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
  }

}
