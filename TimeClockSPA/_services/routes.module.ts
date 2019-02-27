import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { UserInputComponent } from 'src/app/user-input/user-input.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user-input', component: UserInputComponent }

]

