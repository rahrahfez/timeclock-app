// An entry point to accessing database. Allows client to use HTTP requests to get data.

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '_models/user.model';
import { AuthService } from './auth.service';
import { ClockService } from './clock.service';

@Injectable()
export class DataStorageService {
    url = 'https://timeclock-app-srs.firebaseio.com/data.json?auth=';   

    constructor(private http: HttpClient,
                private authService: AuthService,
                private clockService: ClockService) {}


    // Post request: Append timestamp for authenticated user.
    storeTime(): Observable<any> {
        // currently implemented in login submit button
        const token = this.authService.getToken();
        
        return this.http.post<User>(this.url + token, 'user');
    }

    // Put request: Initialize the user with dummy timestamp. 

    // Get request: A single user, given the id.
    getDataAsString(): Observable<string> {
        const token = this.authService.getToken();
        return this.http.get(this.url + token, { responseType: 'text' });
    }

    getDataAsJson(): Observable<object> {
        const token = this.authService.getToken();
        return this.http.get<User>(this.url + token);
    }

    // Delete request: Deletes user from system.

}