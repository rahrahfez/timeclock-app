/*
    Service used to create timestamps, holds timestamp[] sent from database, add new
    timestamp to timestamp[], and sends the timestamp[] back to server.
*/

import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { Timestamp } from '_models/timestamp.model';
import { ClockService } from './clock.service';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class TimestampService {
    timestamps: Timestamp[] = [];

    constructor(private clockService: ClockService,
                private db: DataStorageService) {}

    private createTimestampWhenClockIn(): Timestamp {
        let date = this.clockService.getCurrentDate();
        let time = this.clockService.getCurrentTime();
        return { 'date': date, 'clockIn': time };
    }

    private createTimestampWhenClockOut(): Timestamp {
        let date = this.clockService.getCurrentDate();
        let time = this.clockService.getCurrentTime();
        return { 'date': date, 'clockOut': time };
    }

    setTimestamp(timestamps: Timestamp[]): void {
        this.timestamps = timestamps;
    }

    addClockInToTimestamps(): Subscription {
        let clockIn = this.createTimestampWhenClockIn();
        this.timestamps.push(clockIn);
        return this.db.sendData(this.timestamps)
            .subscribe(
                console.log,
                err => console.log(err)
            )
    }

    addClockOutToTimestamps(): Subscription {
        let clockOut = this.createTimestampWhenClockOut();
        this.timestamps.push(clockOut);
        return this.db.sendData(this.timestamps)
            .subscribe(
                console.log,
                err => console.log(err)
            )
    }

    getTimestamp(): Subscription {
        return this.db.getData()
            .subscribe(
                data => this.setTimestamp(data),
                err => console.log(err)
            )
    }

}