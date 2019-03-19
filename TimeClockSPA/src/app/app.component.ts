import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TimeClockSPA';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDgoySXyokyYdfp2MirYLimhI0om0pMl14",
      authDomain: "timeclock-app-srs.firebaseapp.com"
    });
  }
}
