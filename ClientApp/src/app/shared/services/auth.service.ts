import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'A6fcLDtO5gI7ub6SZCNtyZfAhQ5JMiw5',
    domain: 'pubtube.auth0.com',
    responseType: 'token id_token',
    audience: 'https://pubtube-api.com',
    redirectUri: 'http://localhost:5000/',
    scope: 'openid profile email'
  });

  private _authorizedProfile: any;

  constructor(public router: Router,
              private _http: HttpClient) {
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public testApi() {
    return this._http.get<string>('/api/accounts');
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash(async (err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {

        this.setSession(authResult);

        this.router.navigate(['/']);

      } else if (err) {
        console.log('error from auth0', err)
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('name');
    localStorage.removeItem('scope');
    localStorage.removeItem('email');
    localStorage.removeItem('nickname');
    localStorage.removeItem('email_verified');
    localStorage.removeItem('picture');
    localStorage.removeItem('user_id');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  private setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    console.log(authResult);
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('name', authResult.idTokenPayload.name);
    localStorage.setItem('email', authResult.idTokenPayload.email);
    localStorage.setItem('nickname', authResult.idTokenPayload.nickname);
    localStorage.setItem('email_verified', authResult.idTokenPayload.email_verified);
    localStorage.setItem('user_id', authResult.idTokenPayload.sub);
    localStorage.setItem('picture', authResult.idTokenPayload.picture);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scope', authResult.scope);
  }
}
