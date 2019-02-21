//  A service that provides a component to display current real time,
// record a time stamp, ...

import { Observable } from 'rxjs';

export class ClockService {
    clock: Observable<string>;

    displayCurrentTime() {
        return this.clock = new Observable<string>((observer => {
            setInterval(() =>
            observer.next(new Date().toString()), 1000)
        }));
    }
}
