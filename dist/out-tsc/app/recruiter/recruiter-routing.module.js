var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecruiterComponent } from './recruiter.component';
var routes = [
    { path: '', component: RecruiterComponent }
];
var RecruiterRoutingModule = /** @class */ (function () {
    function RecruiterRoutingModule() {
    }
    RecruiterRoutingModule.components = [RecruiterComponent];
    RecruiterRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], RecruiterRoutingModule);
    return RecruiterRoutingModule;
}());
export { RecruiterRoutingModule };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/recruiter/recruiter-routing.module.js.map