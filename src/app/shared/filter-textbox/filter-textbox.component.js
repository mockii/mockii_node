"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FilterTextboxComponent = (function () {
    function FilterTextboxComponent() {
        this.model = { filter: null };
        this.changed = new core_1.EventEmitter();
    }
    FilterTextboxComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    };
    __decorate([
        core_1.Output()
    ], FilterTextboxComponent.prototype, "changed");
    FilterTextboxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cm-filter-textbox',
            templateUrl: 'filter-textbox.component.html',
            styleUrls: ['filter-textbox.component.css']
        })
    ], FilterTextboxComponent);
    return FilterTextboxComponent;
}());
exports.FilterTextboxComponent = FilterTextboxComponent;
