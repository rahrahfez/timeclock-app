import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ClockService } from './clock.service';
import { UserService } from './user.service';

@Injectable()
export class ServerService {
    url = 'https://timeclock-app-srs.firebaseio.com/data.json';

    constructor(private http: HttpClient) {}


    // Post request: Append timestamp for authenticated user.
    storeTime(): Observable<string> {
        // currently implemented in login submit button
        return this.http.post<string>(this.url, 'test');
    }

    // Put request: Initialize the user with dummy timestamp. 
    addNewUsers(users: string[]) {
        return this.http.put<string[]>(this.url, users);
    }

    // Get request: Get authenticated user's timestamp.
    getTimestamps() {
        
    }

    // Get request: A list of all the Users.
    getUsers() {
        return this.http.get(this.url);
    }

    // Get request: A single user, given the id.
    getUser(id: number) {

    }

    // Delete request: Deletes user from system.
}