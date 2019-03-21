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
        return new Date().toString();
    }

    getCurrentTime(): string {
        return new Date().toLocaleTimeString();
    }

    getCurrentDate(): string {
        return new Date().toDateString();
    }
}
