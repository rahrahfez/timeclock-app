import { Timestamp } from './timestamp.model';

export class User {
    constructor(public id: number, public pw: number, public timestamp: Timestamp[]) {}
}
