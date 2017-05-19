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
var dashboard_routing_module_1 = require('./dashboard-routing.module');
var dashboard_service_1 = require('./dashboard.service');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [dashboard_routing_module_1.DashboardRoutingModule, shared_module_1.SharedModule],
            declarations: [dashboard_routing_module_1.DashboardRoutingModule.components],
            providers: [dashboard_service_1.DashboardService] // these should be singleton
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
