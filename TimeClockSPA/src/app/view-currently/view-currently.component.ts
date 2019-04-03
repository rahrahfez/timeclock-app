import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-currently',
  templateUrl: './view-currently.component.html',
  styleUrls: ['./view-currently.component.css']
})
export class ViewCurrentlyComponent implements OnInit {
  status = false;
  isOnHomepage = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isHome() {
    if (this.router.url === '/home/timesheet') {
      this.isOnHomepage = false;
    }
    return this.isOnHomepage;
  }

  backToHome() {
    this.isOnHomepage = true;
    this.router.navigate(['/home']);
  }

}
