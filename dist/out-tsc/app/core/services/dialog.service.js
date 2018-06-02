var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var DialogService = /** @class */ (function () {
    function DialogService() {
        this.message = 'Is it OK?';
    }
    DialogService.prototype.confirm = function (message) {
        if (message) {
            this.message = message;
        }
        ;
        this.promise = new Promise(this.resolver);
        return this.promise;
    };
    ;
    DialogService.prototype.resolver = function (resolve) {
        return resolve(window.confirm('Is it OK?'));
    };
    DialogService = __decorate([
        Injectable()
    ], DialogService);
    return DialogService;
}());
export { DialogService };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/core/services/dialog.service.js.map