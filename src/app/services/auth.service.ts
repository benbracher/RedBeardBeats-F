import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { LoginUser } from '../models/LoginUser';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CdkAccordion } from '@angular/cdk/accordion';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser, cb: Function){
    
    return this._http.post(`${environment.serverUrl}/api/Auth/Register`, regUserData).subscribe((token: any) => {
      sessionStorage.setItem('pirate_ship', token.token);
      cb();
      sessionStorage.setItem('freebooter', token.user.id);
      this._router.navigate(['home']);
    });
  }

  login(loginInfo: LoginUser, cb: Function){
    return this._http.post(`${environment.serverUrl}/api/Auth/Login`, loginInfo).subscribe( (token: any) => {
      sessionStorage.setItem('pirate_ship', token.token);
      cb();
      console.log(token.user.id)
      sessionStorage.setItem('freebooter', token.user.id);
      this._router.navigate(['home']);
    });
  }

currentUser(): Observable<Object> {
  if (!sessionStorage.getItem('pirate_ship')) { return new Observable(observer => observer.next(false)); }

  return this._http.get(`${environment.serverUrl}/api/Account/UserInfo`, { headers: this.setHeader() });
}

private setHeader(): HttpHeaders {
  return new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('pirate_ship')}`);
}
}