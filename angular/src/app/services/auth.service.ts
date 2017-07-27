import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev: boolean;

  constructor(
    private http: Http
  ) { 
    this.isDev = true; 
  }

  registerUser(user) {
    let headers = new Headers();
    let link = this.prepEndpoint('users/register');
    headers.append('Content-type', 'application/json');
    return this.http.post(link, user, 
      {headers: headers}).map(res => res.json()
      );
  }

  authenticateUser(user) {
    let headers = new Headers();
    let link = this.prepEndpoint('users/authenticate');
    headers.append('Content-type', 'application/json');
    return this.http.post(link, user, 
      {headers: headers}).map(res => res.json()
      );
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getProfile() {
    let headers = new Headers();
    let link = this.prepEndpoint('users/profile');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(link,
      {headers: headers}).map(res => res.json()
      );    
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

   prepEndpoint(ep){
    if(!this.isDev){
      return ep;
    } else {
      return 'http://localhost:3000/'+ep;
    }
  }
}
