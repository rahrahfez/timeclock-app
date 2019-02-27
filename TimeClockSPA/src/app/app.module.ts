import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatFormFieldModule, 
  MatInputModule,
  MatButtonModule } from '@angular/material/';

import { AppComponent } from './app.component';
import { DisplayTimeComponent } from './display-time/display-time.component';
import { HomeComponent } from './home/home.component';
import { ClockService } from '_services/clock.service';
import { UserInputComponent } from './user-input/user-input.component';
import { routes } from '_services/routes.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTimeComponent,
    HomeComponent,
    UserInputComponent,
    ButtonsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule  
  ],
  providers: [
    ClockService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
