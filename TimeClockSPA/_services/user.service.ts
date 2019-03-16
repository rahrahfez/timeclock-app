import { Injectable } from '@angular/core';

import { ServerService } from './server.service';
import { User } from '../_models/user.model';

@Injectable()
export class UserService {
    users: User[];

    constructor(private serverService: ServerService) {}

    addNewUser(user: string) {
        let newUser = { id: user };
        this.users.push(newUser);
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