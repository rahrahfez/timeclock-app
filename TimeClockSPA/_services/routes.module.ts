import { Routes } from '@angular/router';

import { ButtonsComponent } from 'src/app/buttons/buttons.component';
import { LoginComponent } from 'src/app/login/login.component';
import { TimesheetComponent } from 'src/app/timesheet/timesheet.component';
import { AuthGuard } from './auth-guard.service';
import { ViewCurrentlyComponent } from 'src/app/view-currently/view-currently.component';
import { HomeComponent } from 'src/app/home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ViewCurrentlyComponent, canActivate: [AuthGuard], children: [
            { path: '', component: ButtonsComponent, canActivate: [AuthGuard] },
            { path: 'timesheet', component: TimesheetComponent, canActivate: [AuthGuard]
        }
         
    ] },
    { path: '**', redirectTo: '/login',
                    pathMatch: 'full' }
    ]}
]

