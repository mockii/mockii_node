"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
// import { AUTH_PROVIDERS }      from 'angular2-jwt';
/* App Components */
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var login_module_1 = require('./login/login.module');
var core_module_1 = require('./core/core.module');
var shared_module_1 = require('./shared/shared.module');
/* Logging
*
*
*    OFF = 0,
*    ERROR = 1,
*    WARN = 2,
*    INFO = 3,
*    DEBUG = 4,
*    LOG = 5,
*
*  import { Logger } from "angular2-logger/core"; // Default Logger set to WARN (Level 2) by default
*  import { OFF_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 0
*  import { ERROR_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 1
*  import { WARN_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 2
*  import { INFO_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 3
*  import { DEBUG_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 4
*
* */
var providers_1 = require("angular2-logger/app/core/providers");
var angular2_jwt_1 = require("angular2-jwt"); // Level 5
function authHttpServiceFactory(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        tokenName: 'token',
        tokenGetter: (function () { return localStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }]
    }), http, options);
}
exports.authHttpServiceFactory = authHttpServiceFactory;
exports.authProvider = {
    provide: angular2_jwt_1.AuthHttp,
    deps: [http_1.Http, http_1.RequestOptions],
    useFactory: authHttpServiceFactory
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                login_module_1.LoginModule,
                core_module_1.CoreModule,
                shared_module_1.SharedModule //Shared (multi-instance) objects
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                /*Logger,
                  OFF_LOGGER_PROVIDERS,
                  DEBUG_LOGGER_PROVIDERS,
                  ERROR_LOGGER_PROVIDERS,
                  WARN_LOGGER_PROVIDERS,
                  INFO_LOGGER_PROVIDERS,*/
                providers_1.LOG_LOGGER_PROVIDERS,
                exports.authProvider
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
