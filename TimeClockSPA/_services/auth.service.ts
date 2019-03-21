import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )
            .catch(
                error => console.log(error)
            );
            this.router.navigate(['/home']);
    }

    getToken(): string {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token:string) => this.token = token
            );
        return this.token;
    }

    getCurrentUserProfile() {
        return firebase.auth().currentUser;
    }

    isAuthenticated() {
        return this.token != null;
    }

    getCurrentUser(): string {
        return firebase.auth().currentUser.email;
    }

    getCurrentUserId(): string {
        return firebase.auth().currentUser.uid;
    }

    signout() {
        firebase.auth().signOut();
        this.token = null;
    }
}