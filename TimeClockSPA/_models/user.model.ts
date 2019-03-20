import { Timestamp } from './timestamp.model';

export class User {
    // id: string;
    // password: string;
    // clockedIn: Timestamp[];
    constructor(public id: string, public clockIn: Timestamp[], public clockOut: Timestamp[]) {}
}
    
