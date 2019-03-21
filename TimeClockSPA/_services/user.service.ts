import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { User } from '../_models/user.model';
import { DataStorageService } from './data-storage.service';


@Injectable()
export class UserService implements OnInit{
    user: User;

    constructor(private dbService: DataStorageService) {}

    ngOnInit() {

    }  

    submitTime() {
        this.dbService.storeTime().subscribe();
    }

    getUser(): User {
        this.dbService.getUser()
            .pipe(
                map((user: User) => this.user = user)
            )
            .subscribe(
                () => console.log(this.user)
            );
        return this.user;
    }
}