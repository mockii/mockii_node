import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [

    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'interviewee', loadChildren: 'app/interviewee/interviewee.module#IntervieweeModule' },
    { path: 'interviewer', loadChildren: 'app/interviewer/interviewer.module#InterviewerModule' },
    { path: 'recruiter', loadChildren: 'app/recruiter/recruiter.module#RecruiterModule' },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },

    // Hidden Routes
    { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
    // { path: 'privacy', loadChildren: 'app/footer/tos/tos.module#TOSModule' }, //Terms Of Service
    // { path: 'help', loadChildren: 'app/misc/help/help.module#HelpModule' },
    // { path: 'trust', loadChildren: 'app/misc/tac/tac.module#TACModule' }, //Trust And Confindetiality
    // { path: 'faqs', loadChildren: 'app/misc/faqs/faqs.module#FAQsModule' }, //Frequently Asked Questions

    // Logged In Routes
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: '**', pathMatch:'full', redirectTo: '/home' } //catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }