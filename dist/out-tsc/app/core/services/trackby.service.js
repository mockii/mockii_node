var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var TrackByService = /** @class */ (function () {
    function TrackByService() {
    }
    TrackByService.prototype.customer = function (index, customer) {
        return customer.id;
    };
    TrackByService.prototype.order = function (index, order) {
        return index;
    };
    TrackByService = __decorate([
        Injectable()
    ], TrackByService);
    return TrackByService;
}());
export { TrackByService };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/core/services/trackby.service.js.map