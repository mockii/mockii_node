"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by rakeshchouhan on 2/16/17.
 */
var core_1 = require('@angular/core');
var TranslatePipe = (function () {
    function TranslatePipe(translateService) {
        this.translateService = translateService;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this.translateService.instant({ key: value, words: Array() });
    };
    TranslatePipe = __decorate([
        // our translate service
        core_1.Pipe({
            name: 'translate',
            pure: false // impure pipe, update value when we change language
        })
    ], TranslatePipe);
    return TranslatePipe;
}());
exports.TranslatePipe = TranslatePipe;
