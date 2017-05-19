import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

// import { IUserLogin } from '../../shared/interfaces';
import { IUserProfile } from '../../shared/interfaces';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    
    // authUrl: string = '/api/auth';
    // isAuthenticated: boolean = false;
    // redirectUrl: string;
    // userId: string;

    //Store profile object in auth class
    userProfile: IUserProfile;
    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    // constructor(private http: Http) { }

    private userAuthChanged(status: boolean) {
       this.authChanged.emit(status); //Raise changed event
    }

    /*login(userLogin: IUserLogin) : Observable<boolean> {
        return this.http.post(this.authUrl + '/login', userLogin)
                   .map((response: Response) => {
                       const loggedIn = response.json();
                       this.userId = response.json().userId;
                       this.isAuthenticated = loggedIn;
                       this.redirectUrl = response.json().redirectUrl;
                       this.userAuthChanged(loggedIn);
                       return loggedIn;
                   })
                   /!*.subscribe((data) => {
                        if(data) {
                            const loggedIn = response.json();
                            this.userId = response.json().userId;
                            this.isAuthenticated = loggedIn;
                            this.userAuthChanged(loggedIn);
                            resolve(this.isAuthenticated);
                        }
                   })*!/
                   .catch(this.handleError);
    }

    logout() : Observable<boolean> {
        return this.http.post(this.authUrl + '/logout', null)
                   .map((response: Response) => {
                       const loggedOut = response.json();
                       this.isAuthenticated = !loggedOut;
                       this.userAuthChanged(!loggedOut); //Return loggedIn status
                       return status;
                   })
                   .catch(this.handleError); 
    }*/

    handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }


    // Configure Auth0
    lock = new Auth0Lock('WkXapAzanJTTmDSD3f3SZq35QLniESaa', 'mockii.auth0.com', {});

    constructor() {

        // Set userProfile attribute of already saved profile
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult: any) => {
            localStorage.setItem('id_token', authResult.idToken);

            // Fetch profile information
            this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
                this.userAuthChanged(this.authenticated());
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }
                console.log(profile);
                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
            });
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

    public logout(): Observable<boolean> {
        /// Remove token and profile from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
        this.userAuthChanged(this.authenticated());
        return Observable.of(true);
    }
}