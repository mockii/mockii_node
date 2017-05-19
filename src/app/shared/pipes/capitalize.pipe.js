"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
 *   Capitalizes the firsst character of each word. For caps lock on all characters in a word, use the default pipe 'uppercase' from angular framework. Similarly 'lowercase' for Lowercase
 *
 * */
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        /*if (value) {
          return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;*/
    };
    CapitalizePipe = __decorate([
        core_1.Pipe({ name: 'capitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());
exports.CapitalizePipe = CapitalizePipe;
