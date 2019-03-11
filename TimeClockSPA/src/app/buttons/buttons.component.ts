import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClockService } from '_services/clock.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private router: Router, private clockService: ClockService) { }

  ngOnInit() {
  }

    onClick() {
      this.router.navigate(['login']);
      // this.clockService.getCurrentDateAndTime();
  }
}


