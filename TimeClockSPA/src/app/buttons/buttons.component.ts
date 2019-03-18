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
  subscription: Subscription;

  constructor(private router: Router, private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/login']);
    // this.clockService.getCurrentDateAndTime();
  }

  onViewTimesheet() {
    // this.router.navigate(['/timesheet']);
  }

  ngOnDestroy() {

  }
}


