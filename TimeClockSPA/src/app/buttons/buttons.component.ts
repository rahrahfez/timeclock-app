import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    onClockIn() {
      this.router.navigate(['user-input', { relativeTo: this.router }]);
  }

  onClockOut() {
    
  }

}


