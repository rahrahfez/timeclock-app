import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '_services/user.service';
import { DataStorageService } from '_services/data-storage.service';
import { Timestamp } from '_models/timestamp.model';

export const TIMESTAMP_ELEMENTS: Timestamp[] = [
  { date: 'March 25th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
  { date: 'March 26th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
  { date: 'March 27th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
  { date: 'March 28th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'}
]

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private userService: UserService,
              private db: DataStorageService) { }

  ngOnInit() {
  }

  clockIn() {
    this.db.sendData(TIMESTAMP_ELEMENTS)
      .subscribe(console.log);
  }

  clockOut() {
    this.userService.submitTime();
  }

  submitTime() {
    this.db.sendData(TIMESTAMP_ELEMENTS)
      .subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
      () => console.log('completed'));
  }

  onViewTimesheet() {
    this.router.navigate(['/timesheet']);
  }

  ngOnDestroy() {

  }
}


