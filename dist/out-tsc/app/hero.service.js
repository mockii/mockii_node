var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Billa on 12/22/16.
 */
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
var HeroService = /** @class */ (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(HEROES);
    };
    HeroService = __decorate([
        Injectable()
    ], HeroService);
    return HeroService;
}());
export { HeroService };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/hero.service.js.map