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
import { ServerService } from '_services/server.service';
import { UserService } from '_services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayTimeComponent,
    HomeComponent,
    ButtonsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule  
  ],
  providers: [
    ClockService,
    ServerService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
