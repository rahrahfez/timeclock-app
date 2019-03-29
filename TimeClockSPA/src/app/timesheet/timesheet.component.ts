import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

import { DataStorageService } from '_services/data-storage.service';
import { MatTableDataSource } from '@angular/material';
import { Timestamp } from '_models/timestamp.model';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  displayedColumns = ['date', 'clockIn', 'clockOut'];
  // dataSource = new TimestampDataSource(this.db);

  // Use this to console.log subscription output
  dataSource = new MatTableDataSource<Timestamp>();

  constructor(private db: DataStorageService) {}

  ngOnInit() {
    this.db.getData()
      .subscribe(
        (data) => {
          this.dataSource.data = data;
          console.log(data);
        })
  }
}

export class TimestampDataSource extends DataSource<any> {
  constructor(private db: DataStorageService) {
    super();
  }

  connect(): Observable<any> {
    return this.db.getData();
  }

  disconnect() {

  }
}
