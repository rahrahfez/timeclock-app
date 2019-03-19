// An entry point to accessing database. Allows client to use HTTP requests to get data.

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '_models/user.model';
import { AuthService } from './auth.service';

@Injectable()
export class DataStorageService {
    url = 'https://timeclock-app-srs.firebaseio.com/data.json?auth=';

    constructor(private http: HttpClient,
                private authService: AuthService) {}


    // Post request: Append timestamp for authenticated user.
    storeTime(): Observable<string> {
        // currently implemented in login submit button
        const token = this.authService.getToken();
        return this.http.post<string>(this.url + token, 'test');
    }

    // Put request: Initialize the user with dummy timestamp. 
    addNewUsers(users: User[]) {
        return this.http.post<User[]>(this.url, users);
    }

    // Get request: Get authenticated user's timestamp.
    getTimestamps() {
        
    }

    // Get request: A list of all the Users.
    getUsers() {
        
    }

    // Get request: A single user, given the id.
    getUser(id: number) {

    }

    // Delete request: Deletes user from system.

}