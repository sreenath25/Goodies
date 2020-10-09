import { 
        HttpInterceptor, 
        HttpRequest, 
        HttpHandler, 
        HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AUTHORIZATION } from 'src/app/shared/constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Below code is for Jwt authentication
        const token = this.tokenService.getToken();

        // below code will be get executed after login
        // because jwt token stored after login only
        if (token) {
            let newReq = req.clone({
                headers: req.headers.set(AUTHORIZATION, "Bearer " + token)
            });
            return next.handle(newReq);
        }
        return next.handle(req);
    }

}