import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AUTH_KEY } from '../shared/constants';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor(private cookieService: CookieService) {}

    saveToken(token: string) {
        localStorage.removeItem(AUTH_KEY);
        localStorage.setItem(AUTH_KEY, token);
    }

    getToken() {
        // const token =  localStorage.getItem(AUTH_KEY);
        const token =  this.cookieService.get(AUTH_KEY);
        return token ? token : null;
    }

    clearToken() {
        localStorage.clear();
    }
}