import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { DataStorageService } from '_services/data-storage.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clockIn() {
    
  }

  onClick() {
    // this.clockService.getCurrentDateAndTime();
  }

  onViewTimesheet() {
    this.router.navigate(['/timesheet']);
  }

  ngOnDestroy() {

  }
}


