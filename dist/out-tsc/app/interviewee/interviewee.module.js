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
import { SharedModule } from '../shared/shared.module';
import { IntervieweeRoutingModule } from './interviewee-routing.module';
var IntervieweeModule = /** @class */ (function () {
    function IntervieweeModule() {
    }
    IntervieweeModule = __decorate([
        NgModule({
            imports: [IntervieweeRoutingModule, SharedModule],
            declarations: [IntervieweeRoutingModule.components]
        })
    ], IntervieweeModule);
    return IntervieweeModule;
}());
export { IntervieweeModule };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/interviewee/interviewee.module.js.map