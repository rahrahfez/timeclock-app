//  A service that provides a component to display current real time,
// record a time stamp, ...

// TODO: add feature to get time by date and/or time

import { Observable } from 'rxjs';

export class ClockService {
    clock: Observable<string>;
    current = new Date();

    displayCurrentTime() {
        return this.clock = new Observable<string>((observer => {
            setInterval(() =>
                observer.next(new Date().toString()), 1000)
        }));
    }

    getCurrentDateAndTime() {
        const date = new Date().toString();
        console.log(date);
        return date;
    }

    getCurrentTime() {
        return new Date().toString();
    }

    getCurrentDate() {

    }
}
