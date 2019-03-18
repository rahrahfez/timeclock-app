import { Routes } from '@angular/router';

import { ButtonsComponent } from 'src/app/buttons/buttons.component';
import { LoginComponent } from 'src/app/login/login.component';
import { TimesheetComponent } from 'src/app/timesheet/timesheet.component';


export const routes: Routes = [
    { path: 'home', component: ButtonsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'timesheet', component: TimesheetComponent },
    { path: '**', redirectTo: '/login',
                pathMatch: 'full' }, 

]

