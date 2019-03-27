import { Component, OnInit, AfterViewInit } from '@angular/core';
import { map, flatMap } from 'rxjs/operators';

import { UserService } from '_services/user.service';
import { DataStorageService } from '_services/data-storage.service';
import { Timestamp } from '_models/timestamp.model';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['date', 'clockIn', 'clockOut'];
  dataSource: Timestamp[] = [];

  constructor(private userService: UserService, private db: DataStorageService) {}

  ngOnInit() {
    this.db.getData()
      .subscribe(
        (data: Timestamp[]) => {

        });
  }

  ngAfterViewInit() {

  }

}
