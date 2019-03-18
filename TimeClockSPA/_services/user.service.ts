import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../_models/user.model';
import { DataStorageService } from './data-storage.service';


@Injectable()
export class UserService implements OnInit, OnDestroy {
    subscription: Subscription;
    users = [
        new User("admin", "password")
    ];

    constructor(private dbService: DataStorageService) {}

    ngOnInit() {

    }

    addNewUserToDatabase(id: string, password: string) {
        let user = new User(id, password);
        this.users.push(user);
        this.subscription = this.dbService.addNewUsers(this.users).subscribe();
    }

    getUsers() {

    }

    getUserTimestamp(user: string) {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}