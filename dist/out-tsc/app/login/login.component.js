var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { ValidationService } from '../core/services/validation.service';
import { GrowlerService } from '../core/growler/growler.service';
import { ModalService } from "../core/modal/modal.service";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService, growler, modal) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.growler = growler;
        this.modal = modal;
        this.header = "Login";
        this.cancelButtonText = "Go Back";
        this.OKButtonText = "Login";
        // this.body = require('./login.component.html');
        // console.log(require('./login.component.html'));
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, ValidationService.emailValidator]],
            password: ['', [Validators.required, ValidationService.passwordValidator]]
        });
    };
    LoginComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            Router,
            AuthService,
            GrowlerService,
            ModalService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/login/login.component.js.map