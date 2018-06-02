var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var FilterTextboxComponent = /** @class */ (function () {
    function FilterTextboxComponent() {
        this.model = { filter: null };
        this.changed = new EventEmitter();
    }
    FilterTextboxComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], FilterTextboxComponent.prototype, "changed", void 0);
    FilterTextboxComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'cm-filter-textbox',
            templateUrl: 'filter-textbox.component.html',
            styleUrls: ['filter-textbox.component.css']
        })
    ], FilterTextboxComponent);
    return FilterTextboxComponent;
}());
export { FilterTextboxComponent };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/shared/filter-textbox/filter-textbox.component.js.map