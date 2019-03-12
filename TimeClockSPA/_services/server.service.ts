import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ClockService } from './clock.service';
import { UserService } from './user.service';

@Injectable()
export class ServerService {
    url = 'https://timeclock-app-srs.firebaseio.com/data.json';

    constructor(private http: HttpClient, 
                private clockService: ClockService,
                private userService: UserService) {}


    // Post request: Append timestamp for authenticated user.
    storeTime(): Observable<string> {
        // currently implemented in login submit button
        return this.http.post<string>(this.url, 'test');
    }

    // Put request: Initialize the user with dummy timestamp. 

    // Get request: Get authenticated user's timestamp.
    getTimestamps() {
        
    }

    // Delete request: Deletes user from system.
}