var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Billa on 12/24/16.
 */
import { Component } from '@angular/core';
var RecruiterComponent = /** @class */ (function () {
    function RecruiterComponent() {
    }
    RecruiterComponent.prototype.ngOnInit = function () {
        this.recruiterLabel = 'This is Recruiter Module';
    };
    RecruiterComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'app-recruiter',
            templateUrl: 'recruiter.component.html',
            styleUrls: ['recruiter.component.css']
        })
    ], RecruiterComponent);
    return RecruiterComponent;
}());
export { RecruiterComponent };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/recruiter/recruiter.component.js.map