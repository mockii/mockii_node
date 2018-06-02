var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Billa on 12/26/16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var RecruiterService = /** @class */ (function () {
    function RecruiterService(http) {
        this.http = http;
        this.baseServiceUrl = 'http://localhost:8080/createUser'; // URL to web api
        // private baseServiceUrl = 'https://mockii.herokuapp.com/createUser';  // URL to web api
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    RecruiterService.prototype.create = function (user) {
        return this.http
            .post(this.baseServiceUrl, user, { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    };
    RecruiterService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RecruiterService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], RecruiterService);
    return RecruiterService;
}());
export { RecruiterService };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/recruiter/recruiter.service.js.map