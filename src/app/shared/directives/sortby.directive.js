"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SortByDirective = (function () {
    function SortByDirective() {
        this.sorted = new core_1.EventEmitter();
    }
    Object.defineProperty(SortByDirective.prototype, "sortBy", {
        set: function (value) {
            this.sortProperty = value;
        },
        enumerable: true,
        configurable: true
    });
    SortByDirective.prototype.onClick = function (event) {
        event.preventDefault();
        this.sorted.next(this.sortProperty); //Raise clicked event
    };
    __decorate([
        core_1.Output()
    ], SortByDirective.prototype, "sorted");
    __decorate([
        core_1.Input('cm-sort-by')
    ], SortByDirective.prototype, "sortBy");
    SortByDirective = __decorate([
        core_1.Directive({
            selector: '[cm-sort-by]',
            host: {
                '(click)': 'onClick($event)'
            }
        })
    ], SortByDirective);
    return SortByDirective;
}());
exports.SortByDirective = SortByDirective;
