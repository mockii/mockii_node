"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var angular2_jwt_1 = require('angular2-jwt');
var AuthService = (function () {
    function AuthService() {
        var _this = this;
        this.authChanged = new core_1.EventEmitter();
        // Configure Auth0
        this.lock = new Auth0Lock('WkXapAzanJTTmDSD3f3SZq35QLniESaa', 'mockii.auth0.com', {});
        // Set userProfile attribute of already saved profile
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            // Fetch profile information
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                _this.userAuthChanged(_this.authenticated());
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }
                console.log(profile);
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
            });
        });
    }
    // constructor(private http: Http) { }
    AuthService.prototype.userAuthChanged = function (status) {
        this.authChanged.emit(status); //Raise changed event
    };
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
    AuthService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return Observable_1.Observable.throw(errMessage);
        }
        return Observable_1.Observable.throw(error || 'Node.js server error');
    };
    AuthService.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService.prototype.logout = function () {
        /// Remove token and profile from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
        this.userAuthChanged(this.authenticated());
        return Observable_1.Observable.of(true);
    };
    __decorate([
        core_1.Output()
    ], AuthService.prototype, "authChanged");
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
