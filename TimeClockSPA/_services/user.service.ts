import { Injectable } from '@angular/core';

import { ServerService } from './server.service';
import { User } from '../_models/user.model';

@Injectable()
export class UserService {
    constructor(private serverService: ServerService) {}

    // users: User[] = [
    //     new User(1, 1, [new Timestamp('Fri Mar 12 12:00 pm')]),
    //     new User(2, 2, [new Timestamp('Thu Mar 11 3:09 am')])
    // ]

    users = ['charlie', 'marly'];

    addNewUser(user: string) {
        this.users.push(user);
        this.serverService.addNewUsers(this.users)
            .subscribe(
                (response) => console.log(response)
            );
    }

    getUsers() {
        this.serverService.getUsers();
    }

    getUserTimestamp(user: string) {

    }

}