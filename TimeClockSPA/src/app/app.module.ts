import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayTimeComponent } from './display-time/display-time.component';
import { HomeComponent } from './home/home.component';
import { ClockService } from '_services/clock.service';
import { routes } from '_services/routes.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from '_services/user.service';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { DataStorageService } from '_services/data-storage.service';
import { AuthService } from '_services/auth.service';
import { AuthGuard } from '_services/auth-guard.service';
import { ViewCurrentlyComponent } from './view-currently/view-currently.component';
import { MyMaterialModule } from './my-material.module';
import { TimestampService } from '_services/timestamp.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayTimeComponent,
    HomeComponent,
    ButtonsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TimesheetComponent,
    ViewCurrentlyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyMaterialModule  
  ],
  providers: [
    ClockService,
    AuthService,
    UserService,
    DataStorageService,
    AuthGuard,
    TimestampService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
