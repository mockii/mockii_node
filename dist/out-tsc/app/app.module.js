var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AUTH_PROVIDERS }      from 'angular2-jwt';
/* App Components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
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
import { LOG_LOGGER_PROVIDERS } from "angular2-logger/app/core/providers";
import { AuthConfig, AuthHttp } from "angular2-jwt"; // Level 5
export function authHttpServiceFactory(http, options) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'token',
        tokenGetter: (function () { return localStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
export var authProvider = {
    provide: AuthHttp,
    deps: [Http, RequestOptions],
    useFactory: authHttpServiceFactory
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                AppRoutingModule,
                NgbModule.forRoot(),
                LoginModule,
                CoreModule,
                SharedModule //Shared (multi-instance) objects
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                /*Logger,
                  OFF_LOGGER_PROVIDERS,
                  DEBUG_LOGGER_PROVIDERS,
                  ERROR_LOGGER_PROVIDERS,
                  WARN_LOGGER_PROVIDERS,
                  INFO_LOGGER_PROVIDERS,*/
                LOG_LOGGER_PROVIDERS,
                authProvider
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/app.module.js.map