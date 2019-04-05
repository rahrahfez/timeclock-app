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
        /**
         * Gets current date/time, if current date matches previous date within array,
         * replace previous time with current time.
         * 
         * Question: Move getCurrentDate() and getCurrentTime() into own function?
         */
        let date = this.clockService.getCurrentDate();
        let time = this.clockService.getCurrentTime();

        let previousDateAndTime = this.timestamps
            .find(
                ind => ind.date === date);

        if (previousDateAndTime) {
            // Replaces old time with new time.
            // Will later make it so user cannot input new time if previous time exits.
            this.timestamps.pop();
            return { 
                'date': date, 
                'time': {
                    'clockIn': time }};
        } else {
            return { 
                'date': date, 
                'time': {
                    'clockIn': time }};
        }
    }

    private createTimestampWhenClockOut(): Timestamp {
        /**
         * First checks to see if any previous entry of clock in is present.
         * If present, remove previous entry, append new time to previous entry, 
         * return new timestamp.
         */
        let date = this.clockService.getCurrentDate();
        let time = this.clockService.getCurrentTime();

        let previousDateAndTime = this.timestamps
            .find(
                ind => ind.date === date);

        if (previousDateAndTime === undefined) {
            // Returns empty string for clockin if no previous entry found.
            // Question: How will I add clock in time later if I clocked out before clocking in?
            return { 
                'date': date, 
                'time': { 
                    'clockIn': '', 'clockOut': time }}
        } else {
            this.timestamps.pop(); 

            return { 
                'date': previousDateAndTime.date, 
                'time': {
                    'clockIn': previousDateAndTime.time.clockIn,
                    'clockOut': time }};
        }       
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