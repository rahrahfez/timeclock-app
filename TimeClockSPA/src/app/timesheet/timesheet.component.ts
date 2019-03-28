import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

import { DataStorageService } from '_services/data-storage.service';
import { Timestamp } from '_models/timestamp.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  timestamps: Timestamp[] = [];
  displayedColumns = ['date', 'clockIn', 'clockOut'];
  dataSource = new TimestampDataSource(this.db);
  // dataSource = new MatTableDataSource<Timestamp>(); 

  constructor(private db: DataStorageService) {}

  ngOnInit() {
    // this.dataSource.data = this.db.getTimestamp();
    // this.db.getData()
    //   .subscribe()
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
