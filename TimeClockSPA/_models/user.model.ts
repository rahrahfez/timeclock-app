import { Timestamp } from './timestamp.model';

export class User {
    constructor(public id: string, public clockIn?: Timestamp[], public clockOut?: Timestamp[]) {}
}
    
