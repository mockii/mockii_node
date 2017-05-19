"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var validation_service_1 = require('../core/services/validation.service');
var LoginComponent = (function () {
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
            email: ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            password: ['', [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]]
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
