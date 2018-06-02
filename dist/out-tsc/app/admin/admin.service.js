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
 * Created by Billa on 12/24/16.
 */
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.baseServiceUrl = 'https://mockii.herokuapp.com'; // URL to web api
    }
    AdminService.prototype.getTopics = function () {
        var url = this.baseServiceUrl + "/findAllTopics";
        return this.http.get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AdminService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    AdminService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AdminService);
    return AdminService;
}());
export { AdminService };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/admin/admin.service.js.map