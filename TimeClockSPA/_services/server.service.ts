import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ClockService } from './clock.service';
import { UserService } from './user.service';

@Injectable()
export class ServerService {
    url = 'https://timeclock-app-srs.firebaseio.com/data.json';
    ct = this.clockService.getCurrentTime();
    time: {'c': string }

    constructor(private http: HttpClient, 
                private clockService: ClockService,
                private userService: UserService) {}

    storeTime(): Observable<string> {
        // currently implemented in login submit button
        return this.http.post<string>(this.url, this.userService.getUsers());
    }
}