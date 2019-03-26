import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '_services/user.service';
import { DataStorageService } from '_services/data-storage.service';
import { map } from 'rxjs/operators';
import { User } from '_models/user.model';

export interface Timestamp {
  date: string,
  clockIn: string,
  clockOut: string
}

const TIMESTAMP_ELEMENTS: Timestamp[] = [
  { date: 'March 25th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
  { date: 'March 26th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
  { date: 'March 27th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
  { date: 'March 28th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'}
]

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  displayedColumns: string[] = ['date', 'clockIn', 'clockOut'];
  dataSource = TIMESTAMP_ELEMENTS;

  user: User;

  constructor(private userService: UserService, private db: DataStorageService) {}

  ngOnInit() {
    this.db.getDataAsJson()
      .subscribe(
        (data: User) => this.user = data,
        (err) => console.log(err)
      )
  }

}
