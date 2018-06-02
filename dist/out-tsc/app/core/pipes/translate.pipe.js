var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by rakeshchouhan on 2/16/17.
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '../services/translate.service'; // our translate service
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translateService) {
        this.translateService = translateService;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this.translateService.instant({ key: value, words: Array() });
    };
    TranslatePipe = __decorate([
        Pipe({
            name: 'translate',
            pure: false // impure pipe, update value when we change language
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], TranslatePipe);
    return TranslatePipe;
}());
export { TranslatePipe };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/core/pipes/translate.pipe.js.map