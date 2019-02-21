import { Component, OnInit } from '@angular/core';
import { ClockService } from '_services/clock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.css']
})
export class DisplayTimeComponent implements OnInit {
  currentTime: Observable<string>;

  constructor(private clockSerice: ClockService) {}

  ngOnInit() {
    this.currentTime = this.clockSerice.displayCurrentTime();
  }

}
