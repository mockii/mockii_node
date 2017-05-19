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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var growler_module_1 = require('./growler/growler.module');
var modal_module_1 = require('./modal/modal.module');
var header_navbar_component_1 = require('./navbar/header/header.navbar.component');
var footer_navbar_component_1 = require('./navbar/footer/footer.navbar.component');
var data_service_1 = require('./services/data.service');
var filter_service_1 = require('./services/filter.service');
var sorter_service_1 = require('./services/sorter.service');
var trackby_service_1 = require('./services/trackby.service');
var dialog_service_1 = require('./services/dialog.service');
var ensureModuleLoadedOnceGuard_1 = require('./ensureModuleLoadedOnceGuard');
var validation_service_1 = require('./services/validation.service');
var auth_service_1 = require('./services/auth.service');
var translate_pipe_1 = require("./pipes/translate.pipe");
var translate_service_1 = require("./services/translate.service");
var CoreModule = (function (_super) {
    __extends(CoreModule, _super);
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function CoreModule(parentModule) {
        _super.call(this, parentModule);
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, http_1.HttpModule, growler_module_1.GrowlerModule, modal_module_1.ModalModule, forms_1.FormsModule],
            exports: [growler_module_1.GrowlerModule, router_1.RouterModule, http_1.HttpModule, modal_module_1.ModalModule, header_navbar_component_1.HeaderNavbarComponent, footer_navbar_component_1.FooterNavbarComponent],
            declarations: [header_navbar_component_1.HeaderNavbarComponent, footer_navbar_component_1.FooterNavbarComponent, translate_pipe_1.TranslatePipe],
            providers: [sorter_service_1.SorterService, filter_service_1.FilterService, data_service_1.DataService, trackby_service_1.TrackByService,
                dialog_service_1.DialogService, validation_service_1.ValidationService, auth_service_1.AuthService, translate_service_1.TranslateService] // these should be singleton
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf())
    ], CoreModule);
    return CoreModule;
}(ensureModuleLoadedOnceGuard_1.EnsureModuleLoadedOnceGuard));
exports.CoreModule = CoreModule;
