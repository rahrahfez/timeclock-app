import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { key } from 'src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TimeClockSPA';

  ngOnInit() {
    firebase.initializeApp(key);
  }
}
