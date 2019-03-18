import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  listOfUsers: Observable<any>;


  ngOnInit() {
    
  }

}
