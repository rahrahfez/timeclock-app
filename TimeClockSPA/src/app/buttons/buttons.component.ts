import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';

import { TimestampService } from '_services/timestamp.service';

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
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    // Find a way to initialize first time users. Right now, empty database returns null. Maybe when new user
    // registers, initialize database with empty strings.
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogTextComponent);
    dialogRef.afterClosed().subscribe(
      (result) => {
        this.clockIn();
        console.log(result);
      }
    )
    /*
    Bug fix: Selecting yes or no does nothing, will send data when clicked outside the dialog box, closing it.

    Will later add confirmation to tell user that they have clocked in/out with time info given.
     */
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
    // this.clockInSubscription.unsubscribe();
    // this.clockOutSubscription.unsubscribe();
    // this.getTimestampSubscription.unsubscribe();
  }
}

@Component({
  selector: 'app-dialog-text',
  templateUrl: './dialog-text.component.html'
})
export class DialogTextComponent {
  constructor() {}
}

