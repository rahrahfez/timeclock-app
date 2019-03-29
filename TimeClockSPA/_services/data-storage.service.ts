// An entry point to accessing database. Allows client to use HTTP requests to get data.

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { Timestamp } from '_models/timestamp.model';

@Injectable()
export class DataStorageService {
    readonly url = 'https://timeclock-app-srs.firebaseio.com/data.json?auth=';   

    constructor(private http: HttpClient,
                private authService: AuthService) {}


    // Post request: Append timestamp for authenticated user.

    // Put request: Initialize the user with dummy timestamp. 
    sendData(timestamp: Timestamp[]): Observable<any> {
        const token = this.authService.getToken();
        return this.http.put<Timestamp>(this.url + token, timestamp);
    }

    // Get request: A single user, given the id.
    getData(): Observable<Timestamp[]> {
        const token = this.authService.getToken();
        return this.http.get<Timestamp[]>(this.url + token);
    }

    // Delete request: Deletes user from system.

}