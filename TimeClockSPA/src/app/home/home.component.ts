import { Component, OnInit } from '@angular/core';

import { TimestampService } from '_services/timestamp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private timeService: TimestampService) { }

  ngOnInit() {
    this.timeService.getTimestamp();
  }
}
