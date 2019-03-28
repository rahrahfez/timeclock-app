import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '_models/user.model';

@Injectable()
export class UserService implements OnInit {
    users$: Observable<any>;

    user: User;
    
    constructor() {}

    ngOnInit() {
        
    }  

    getUsersTimestamp() {
        return this.users$
            .pipe(
                map(
                    (response) => {
                        this.user = response
                    })
            )
    }

    getUser() {
        return this.user;
    }
}