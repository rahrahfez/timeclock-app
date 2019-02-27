import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { UserInputComponent } from 'src/app/user-input/user-input.component';
import { ButtonsComponent } from 'src/app/buttons/buttons.component';
import { LoginComponent } from 'src/app/login/login.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'user-input', component: UserInputComponent },
    { path: 'buttons', component: ButtonsComponent }

]

