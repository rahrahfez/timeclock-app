import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id: string;
  isHome: false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.router.url;
    console.log(this.id);
    console.log(this.router.url);
  }

  isHomepage() {
    if(this.id === '/') {
      return true;
    }
    // return !this.isHome;
  }

}
