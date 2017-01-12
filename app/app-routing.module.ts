import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [

    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'interviewee', loadChildren: 'app/interviewee/interviewee.module#IntervieweeModule' },
    { path: 'interviewer', loadChildren: 'app/interviewer/interviewer.module#InterviewerModule' },
    { path: 'recruiter', loadChildren: 'app/recruiter/recruiter.module#RecruiterModule' },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '**', pathMatch:'full', redirectTo: '/dashboard' } //catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }