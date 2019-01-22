import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            if (!sessionStorage.getItem('pirate_ship')) {
                this.router.navigate(['/login']);
                return observer.next(false);
            }
            else{
                return observer.next(true);
            }
        });
    }
}