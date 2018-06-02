var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
var app_routes = [
    { path: 'home', loadChildren: '../app/home/home.module#HomeModule' },
    { path: 'interviewee', loadChildren: '../app/interviewee/interviewee.module#IntervieweeModule' },
    { path: 'interviewer', loadChildren: '../app/interviewer/interviewer.module#InterviewerModule' },
    { path: 'recruiter', loadChildren: '../app/recruiter/recruiter.module#RecruiterModule' },
    { path: 'admin', loadChildren: '../app/admin/admin.module#AdminModule' },
    { path: 'login', loadChildren: '../app/login/login.module#LoginModule' },
    // Hidden Routes
    { path: 'search', loadChildren: '../app/search/search.module#SearchModule' },
    // { path: 'privacy', loadChildren: '../app/footer/tos/tos.module#TOSModule' }, //Terms Of Service
    // { path: 'help', loadChildren: '../app/misc/help/help.module#HelpModule' },
    // { path: 'trust', loadChildren: '../app/misc/tac/tac.module#TACModule' }, //Trust And Confindetiality
    // { path: 'faqs', loadChildren: '../app/misc/faqs/faqs.module#FAQsModule' }, //Frequently Asked Questions
    // Logged In Routes
    { path: 'dashboard', loadChildren: '../app/dashboard/dashboard.module#DashboardModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/home' } //catch any unfound routes and redirect to home page
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/app-routing.module.js.map