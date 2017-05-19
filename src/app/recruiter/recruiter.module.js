"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ChouhR01 on 1/11/2017.
 */
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var recruiter_routing_module_1 = require('./recruiter-routing.module');
var recruiter_service_1 = require('./recruiter.service');
var RecruiterModule = (function () {
    function RecruiterModule() {
    }
    RecruiterModule = __decorate([
        core_1.NgModule({
            imports: [recruiter_routing_module_1.RecruiterRoutingModule, shared_module_1.SharedModule],
            declarations: [recruiter_routing_module_1.RecruiterRoutingModule.components],
            providers: [recruiter_service_1.RecruiterService]
        })
    ], RecruiterModule);
    return RecruiterModule;
}());
exports.RecruiterModule = RecruiterModule;
