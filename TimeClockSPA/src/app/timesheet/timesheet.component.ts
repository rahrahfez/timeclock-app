import { Component, OnInit } from '@angular/core';

import { UserService } from '_services/user.service';
import { Observable } from 'rxjs';
import { ServerService } from '_services/server.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  listOfUsers: Observable<any>;
  constructor(private userService: UserService, private serverService: ServerService) { }

  ngOnInit() {
    this.listOfUsers = this.serverService.getUsers();
  }

}
