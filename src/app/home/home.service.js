"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Billa on 12/26/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.baseServiceUrl = 'http://localhost:8080/createUser'; // URL to web api
        // private baseServiceUrl = 'https://mockii.herokuapp.com/createUser';  // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    HomeService.prototype.create = function (user) {
        return this.http
            .post(this.baseServiceUrl, user, { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    };
    HomeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    HomeService = __decorate([
        core_1.Injectable()
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
