import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {}

    storeTime(str: string) {
        this.http.post('https://timeclock-app-srs.firebaseio.com/', str);
    }
}