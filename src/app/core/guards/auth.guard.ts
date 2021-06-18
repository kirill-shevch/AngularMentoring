import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('CanActivate Guard is called');
        const { url } = state;
        return this.checkLogin(url);
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('CanActivateChild Guard is called');
        const { url } = state;
        return this.checkLogin(url);
    }

    private checkLogin(url: string): boolean | UrlTree {
        if (this.authService.isLoggedIn) { return true; }
        this.authService.redirectUrl = url;
        return this.router.parseUrl('/login');
    }
}
