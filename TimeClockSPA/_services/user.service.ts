import { Injectable } from '@angular/core';

import { User } from '../_models/user.model';
import { Timestamp } from '_models/timestamp.model';

@Injectable()
export class UserService {
    constructor() {}

    users: User[] = [
        new User(1, 1, [new Timestamp('Fri Mar 12', '12:00 pm')]),
        new User(2, 2, [new Timestamp('Thu Mar 11', '3:09 am')])
    ]
 
    getUsers() {
        return this.users.slice();
    }

    // setUser(_id: number) {
    //     this.user.id = _id;
    // }

    // setPw(_pw: number) {
    //     this.user.pw = _pw;
    // }

    // addTime(_time: number) {
    //     this.user.time.push(_time);
    // }
}