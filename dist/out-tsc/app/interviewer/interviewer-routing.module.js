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
import { InterviewerComponent } from './interviewer.component';
var routes = [
    { path: '', component: InterviewerComponent }
];
var InterviewerRoutingModule = /** @class */ (function () {
    function InterviewerRoutingModule() {
    }
    InterviewerRoutingModule.components = [InterviewerComponent];
    InterviewerRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], InterviewerRoutingModule);
    return InterviewerRoutingModule;
}());
export { InterviewerRoutingModule };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/interviewer/interviewer-routing.module.js.map