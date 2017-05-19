"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ensureModuleLoadedOnceGuard_1 = require('../ensureModuleLoadedOnceGuard');
var growler_component_1 = require('./growler.component');
var growler_service_1 = require('./growler.service');
var GrowlerModule = (function (_super) {
    __extends(GrowlerModule, _super);
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function GrowlerModule(parentModule) {
        _super.call(this, parentModule);
    }
    GrowlerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [growler_component_1.GrowlerComponent],
            providers: [growler_service_1.GrowlerService],
            declarations: [growler_component_1.GrowlerComponent]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf())
    ], GrowlerModule);
    return GrowlerModule;
}(ensureModuleLoadedOnceGuard_1.EnsureModuleLoadedOnceGuard));
exports.GrowlerModule = GrowlerModule;
