"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Billa on 12/24/16.
 */
var core_1 = require('@angular/core');
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var UserProfile_1 = require("../model/UserProfile");
var DashboardComponent = (function () {
    function DashboardComponent(modalService, dashboardService, authService) {
        this.modalService = modalService;
        this.dashboardService = dashboardService;
        this.authService = authService;
        this.userProfile = new UserProfile_1.UserProfile();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.searchLabel = 'Search Interviewer';
        this.getSearchTypes();
    };
    DashboardComponent.prototype.getSearchTypes = function () {
        // TODO: Move this to a service call.
        this.searchTypes = [
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: '... By Location'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: '... By Technology'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: '... By Topic'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: '... By Occupation'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: '... By Occupation Category'
            }
        ];
    };
    DashboardComponent.prototype.onSelectSearchType = function (type) {
        this.selectedSearchType = type;
        this.searchLabel = this.selectedSearchType.searchType;
    };
    DashboardComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.dashboardService.create(_this.userProfile);
            window.alert('Successfully created user :' + _this.userProfile.firstName);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    DashboardComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        core_1.Input()
    ], DashboardComponent.prototype, "userProfile");
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
