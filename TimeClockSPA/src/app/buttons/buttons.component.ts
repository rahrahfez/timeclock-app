import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ServerService } from '_services/server.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private router: Router, private serverService: ServerService) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/login']);
    // this.clockService.getCurrentDateAndTime();
  }

  onViewTimesheet() {
    // this.router.navigate(['/timesheet']);
    this.subscription = this.serverService.getUsers()
      .subscribe(
        (response) => console.log(response)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


