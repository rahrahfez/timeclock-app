import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { DataStorageService } from '_services/data-storage.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private db: DataStorageService) { }

  ngOnInit() {
  }

  clockIn() {
    this.db.sendData()
      .subscribe(console.log);
  }


  // submitTime() {
  //   this.db.sendData({ date: 'March 28th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'})
  //     .subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err),
  //     () => console.log('completed'));
  // }

  onViewTimesheet() {
    this.router.navigate(['/timesheet']);
  }

  ngOnDestroy() {

  }
}


