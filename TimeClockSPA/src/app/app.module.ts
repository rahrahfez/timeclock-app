import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DisplayTimeComponent } from './display-time/display-time.component';
import { HomeComponent } from './home/home.component';
import { ClockService } from '_services/clock.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTimeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    ClockService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
