"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var growler_service_1 = require('../../growler/growler.service');
var HeaderNavbarComponent = (function () {
    function HeaderNavbarComponent(router, authService, growler, modal) {
        this.router = router;
        this.authService = authService;
        this.growler = growler;
        this.modal = modal;
        this.isCollapsed = true;
        this.loginLogoutText = 'Login - Sign up';
    }
    HeaderNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.authService.authChanged
            .subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.router.navigate(['/home']);
            }
            _this.setLoginLogoutText();
        }, function (err) { return console.log(err); });
    };
    HeaderNavbarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HeaderNavbarComponent.prototype.loginOrOut = function () {
        var _this = this;
        var isAuthenticated = this.authService.authenticated();
        if (isAuthenticated) {
            this.authService.logout()
                .subscribe(function (status) {
                console.log(_this.loginLogoutText);
                _this.setLoginLogoutText();
                _this.growler.growl('Logged Out', growler_service_1.GrowlerMessageType.Info);
                // this.router.navigate(['/home']);
                return;
            }, function (err) { return console.log(err); });
        }
        this.redirectToLogin();
    };
    HeaderNavbarComponent.prototype.redirectToLogin = function () {
        // this.router.navigate(['/login']);
        // console.log(LoginComponent.templateUrl);
        // this.modal.show(new LoginComponent());
        this.authService.login();
    };
    HeaderNavbarComponent.prototype.setLoginLogoutText = function () {
        console.log(this.loginLogoutText);
        this.loginLogoutText = (this.authService.authenticated()) ? 'Logout' : 'Login - Sign up';
    };
    Object.defineProperty(HeaderNavbarComponent.prototype, "menuIcon", {
        get: function () {
            return this.isCollapsed ? '☰' : '✖';
        },
        enumerable: true,
        configurable: true
    });
    HeaderNavbarComponent.prototype.searchMockiiChange = function (value) {
        this.searchModel = value;
        if (value === "") {
            this.searchFont = 'cursive';
        }
        else {
            this.searchFont = 'initial';
        }
    };
    HeaderNavbarComponent.prototype.searchMockiiOnEnter = function (event) {
        if (event.keyCode === 13) {
            if (!this.isCollapsed) {
                this.isCollapsed = !this.isCollapsed;
            }
            //TODO: Call Search Service
            console.log("Call Search Service for Search Query", this.searchModel);
            this.router.navigate(['/search']);
        }
    };
    HeaderNavbarComponent.prototype.navigateTo = function () {
        this.isCollapsed = true;
        this.searchMockiiChange('');
    };
    HeaderNavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            templateUrl: 'header.navbar.component.html',
            styleUrls: ['header.navbar.component.css']
        })
    ], HeaderNavbarComponent);
    return HeaderNavbarComponent;
}());
exports.HeaderNavbarComponent = HeaderNavbarComponent;
