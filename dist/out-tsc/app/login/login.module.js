var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        NgModule({
            imports: [ReactiveFormsModule, SharedModule, LoginRoutingModule],
            declarations: [LoginRoutingModule.components]
        })
    ], LoginModule);
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/login/login.module.js.map