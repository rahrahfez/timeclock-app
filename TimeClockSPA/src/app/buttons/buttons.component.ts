import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MatSnackBar } from '@angular/material';

import { TimestampService } from '_services/timestamp.service';
import { ClockService } from '_services/clock.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() clockInClicked = new EventEmitter;

  constructor(private tsService: TimestampService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private clockService: ClockService) { }

  ngOnInit() {
    // Find a way to initialize first time users. Right now, empty database returns null. Maybe when new user
    // registers, initialize database with empty strings.
  }

  // openDialog() {
  //   let dialogRef = this.dialog.open(DialogTextComponent);

  //   dialogRef.afterClosed().subscribe(
  //     () => {
  //       this.clockIn();
  //     }
  //   )
  //   /*
  //   Bug fix: Selecting yes or no does nothing, will send data when clicked outside the dialog box, closing it.

  //   Will later add confirmation to tell user that they have clocked in/out with time info given.
  //    */
  // }

  clockIn() {
    let currentTime = this.clockService.getCurrentTime();
    this.snackBar.open('You have successfully clocked in at ' + currentTime, '', { duration: 3000 });
    this.tsService.addClockInToTimestamps();
  }

  clockOut() {
    let currentTime = this.clockService.getCurrentTime();
    this.snackBar.open('You have successfully clocked out at ' + currentTime, '', { duration: 3000 });
    this.tsService.addClockOutToTimestamps();
  }

  onViewTimesheet() {
    this.router.navigate(['/home/timesheet'], { relativeTo: this.route });
  }

}

@Component({
  selector: 'app-dialog-text',
  templateUrl: './dialog-text.component.html'
})
export class DialogTextComponent {

  constructor(public dialogRef: MatDialogRef<DialogTextComponent>) {}

  onNoClick() {
    this.dialogRef.close();
  }
}

