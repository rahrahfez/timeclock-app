import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DisplayTimeComponent } from './display-time/display-time.component';
import { HomeComponent } from './home/home.component';
import { ClockService } from '_services/clock.service';
import { UserInputComponent } from './user-input/user-input.component';
import { RouterModule } from '@angular/router';
import { routes } from '_services/routes.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTimeComponent,
    HomeComponent,
    UserInputComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClockService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
