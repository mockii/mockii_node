//Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
var PreloadModulesStrategy = /** @class */ (function () {
    function PreloadModulesStrategy() {
    }
    PreloadModulesStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Observable.of(null);
        }
    };
    PreloadModulesStrategy = __decorate([
        Injectable()
    ], PreloadModulesStrategy);
    return PreloadModulesStrategy;
}());
export { PreloadModulesStrategy };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/core/strategies/preload-modules.strategy.js.map