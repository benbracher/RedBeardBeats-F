import { ReloadService } from './reload.service';
import { environment } from '../../environments/environment.prod';
import { SideNavComponent } from './../components/side-nav/side-nav.component';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { LoginUser } from '../models/LoginUser';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router, private _reload: ReloadService) { }

  register(regUserData: RegisterUser){
    
    return this._http.post(`${environment.serverUrl}/api/Auth/Register`, regUserData);
  }

  login(loginInfo: LoginUser){
    return this._http.post(`${environment.serverUrl}/api/Auth/Login`, loginInfo).subscribe( (token: any) => {
      sessionStorage.setItem('pirate_ship', token.token);
      this._reload.updateStatus(true);
      this._router.navigate(['/']);
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