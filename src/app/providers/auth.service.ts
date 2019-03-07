import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/user.interface';
import {AUTH_STORAGE_KEY} from '../const';
import {USERS} from '../data';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    authenticate(credentials: { username: string, password: string }): IUser | null {
        const user = USERS.find(u => u.username === credentials.username && u.password === credentials.password);
        if (user) {
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        }
        return user;
    }
}
