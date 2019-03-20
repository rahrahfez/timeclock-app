import { Routes } from '@angular/router';

import { ButtonsComponent } from 'src/app/buttons/buttons.component';
import { LoginComponent } from 'src/app/login/login.component';
import { TimesheetComponent } from 'src/app/timesheet/timesheet.component';
import { AuthGuard } from './auth-guard.service';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: ButtonsComponent, canActivate: [AuthGuard] },
    { path: 'timesheet', component: TimesheetComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/login',
                pathMatch: 'full' }, 

]

