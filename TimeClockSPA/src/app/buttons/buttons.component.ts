import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { TimestampService } from '_services/timestamp.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, OnDestroy {
  clockInSubscription: Subscription;
  clockOutSubscription: Subscription;
  getTimestampSubscription: Subscription;

  constructor(private tsService: TimestampService,
              private router: Router) { }

  ngOnInit() {
    this.getTimestampSubscription = this.tsService.getTimestamp();
  }

  clockIn() {
    this.clockInSubscription = this.tsService.addClockInToTimestamps();
  }

  clockOut() {
    this.clockOutSubscription = this.tsService.addClockOutToTimestamps();
  }

  onViewTimesheet() {
    this.router.navigate(['/timesheet']);
  }

  ngOnDestroy() {
    this.clockInSubscription.unsubscribe();
    this.clockOutSubscription.unsubscribe();
    this.getTimestampSubscription.unsubscribe();
  }
}


