var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Logger } from "angular2-logger/core";
import { TranslateService } from "./core/services/translate.service";
var AppComponent = /** @class */ (function () {
    function AppComponent(_logger, translateService) {
        this._logger = _logger;
        this.translateService = translateService;
        this._logger.error('This is a priority level 1 error message...');
        this._logger.warn('This is a priority level 2 warning message...');
        this._logger.info('This is a priority level 3 warning message...');
        this._logger.debug('This is a priority level 4 debug message...');
        this._logger.log('This is a priority level 5 log message...');
        // set default language
        this.translateService.setDefaultLanguage({
            languageName: 'English',
            subtext: '',
            icon: '',
            localeName: 'en'
        });
        this.translateService.enableFallback(true);
    }
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [Logger, TranslateService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/app.component.js.map