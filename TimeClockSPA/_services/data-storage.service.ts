// An entry point to accessing database. Allows client to use HTTP requests to get data.

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Timestamp } from '_models/timestamp.model';

@Injectable()
export class DataStorageService {
    url = 'https://timeclock-app-srs.firebaseio.com/data.json?auth=';   

    TIMESTAMP_ELEMENTS: Timestamp[] = [
        { date: 'March 25th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
        { date: 'March 26th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
        { date: 'March 27th, 2019', clockIn: '12:00 am', clockOut: '5:00 pm'},
        { date: 'March 28th, 2019', clockIn: '9:00 am', clockOut: '5:00pm'}      
    ]

    // TIMESTAMP_ELEMENTS: Timestamp[] = [];

    setTimestamp(timestamp: Timestamp[]) {
        this.TIMESTAMP_ELEMENTS = timestamp;
    }

    getTimestamp() {
        return this.TIMESTAMP_ELEMENTS;
    }

    constructor(private http: HttpClient,
                private authService: AuthService) {}


    // Post request: Append timestamp for authenticated user.

    // Put request: Initialize the user with dummy timestamp. 
    sendData(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.put<Timestamp>(this.url + token, this.TIMESTAMP_ELEMENTS);
    }

    // Get request: A single user, given the id.
    getData(): Observable<Timestamp[]> {
        const token = this.authService.getToken();
        return this.http.get<Timestamp[]>(this.url + token)
            .pipe(
                map(
                    (res) => res
                )
            );
    }

    // Delete request: Deletes user from system.

}