import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../_models/user.model';
import { DataStorageService } from './data-storage.service';


@Injectable()
export class UserService implements OnInit, OnDestroy {
    subscription: Subscription;

    constructor(private dbService: DataStorageService) {}

    ngOnInit() {

    }

    addNewUserToDatabase(id: string, password: string) {
        
    }

    getUsers() {

    }

    getUserTimestamp(user: string) {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}